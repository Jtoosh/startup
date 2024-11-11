import React from "react";
import "./study.css";
import { NavLink } from "react-router-dom";
import { Card, Deck } from "./flashcard.jsx";

export function FlashcardEdit() {
  let deckEditing =
    readStorage()[0] !== undefined
      ? readStorage()[0]
      : new Deck("New Deck", [
          new Card("New Term", "New Definition", "New Semantic"),
        ]);
  const [currentCardIndex, setCurrentCardIndex] = React.useState(0);

  function readStorage() {
    let localStorageItems = [];
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      const value = localStorage.getItem(key);
      localStorageItems.push({ key, value: JSON.parse(value) });
    }
    let deckObjects = localStorageItems.map(
      (deck) => new Deck(deck.key, deck.value.cards)
    );
    // console.log(deckObjects);
    return deckObjects;
  }

  function updateStorage() {
    let json_string = JSON.stringify(deckEditing);
    localStorage.setItem(deckEditing.name, json_string);
  }

  function handleSubmit(e) {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);

    const formObject = Object.fromEntries(formData.entries());

    let currentCard = deckEditing.cards[currentCardIndex];

    currentCard.termName = formObject.termName;
    currentCard.termDef = formObject.termDef;
    currentCard.semantic = formObject.semantic;

    localStorage.setItem(deckEditing.name, JSON.stringify(deckEditing));
    console.log(deckEditing);

    // let cardIndex = deckEditing.cards.indexOf(card1)
    // deckEditing.cards[cardIndex] = card1
  }
  function flipAnimation() {
    let flashcard = document.querySelector(".flashcard");
    flashcard.classList.toggle("flipped");
  }
  function advanceCard() {

    if (deckEditing.cards[currentCardIndex + 1] === undefined) {
      alert('No more cards in deck. Click "Add Card" to add a new card.');
      return;
    } else {
      setCurrentCardIndex(currentCardIndex + 1);
    }
  }
  function retreatCard() {
    // let cardIndex = deckEditing.cards.indexOf(currentCard);
    if (deckEditing.cards[currentCardIndex - 1] === undefined) {
      alert('No more cards in deck. Click "Add Card" to add a new card.');
      return;
    } else {
      setCurrentCardIndex(currentCardIndex - 1);
    }
  }
  function addCard() {
    let newCard = new Card("New Term", "New Definition", "New Semantic");
    deckEditing.cards.push(newCard);
    updateStorage();
    setCurrentCardIndex(deckEditing.cards.length - 1);
  }
  return (
    <main>
      <h1 className="text-center">"Deck Name"</h1>
      <NavLink to="../study" className="btn btn-primary">
        &#8592; Back to Study
      </NavLink>

      <div className="container-fluid d-flex row justify-content-center">
        <form
          onSubmit={handleSubmit}
          className="container-fluid d-flex row justify-content-center"
        >
          <div className=" flashcard card text-center my-4 flashcard">
            <div className="flashcard-inner">
              <div className="flashcard-front my-4">
                Front of flashcard field
                <input
                  type="text"
                  required={true}
                  name="termName"
                  id="termName"
                  defaultValue={deckEditing.cards[currentCardIndex].termName}
                  key={`${currentCardIndex}-termName-1`}
                />
                <input
                  type="text"
                  required={true}
                  name="semantic"
                  id="semantic"
                  defaultValue={deckEditing.cards[currentCardIndex].semantic}
                  key={`${currentCardIndex}-semantic-2`}
                  className="my-4"
                />
                <button onClick={flipAnimation} className="btn btn-secondary">
                  Flip
                </button>
              </div>
              <div className="flashcard-back my-4">
                Back of flashcard field
                <input
                  type="textarea"
                  required={true}
                  name="termDef"
                  id="termDef"
                  defaultValue={deckEditing.cards[currentCardIndex].termDef}
                  key={`${currentCardIndex}-termDef-3`}
                />
                <button onClick={flipAnimation} className="btn btn-secondary">
                  Flip
                </button>
              </div>
            </div>
          </div>
          <div>
            <div className="buttons d-flex column justify-content-center">
              <button className="btn btn-warning">
                Need ideas?{" "}
                <strong>
                  This will use a 3rd party API to generate ideas/mnemonics
                </strong>
              </button>
              <button
                type="submit"
                to="../study/flashcard"
                className="btn btn-primary"
              >
                Save Changes
              </button>
            </div>
            <div className="buttons d-flex column justify-content-center my-4">
              <button
                type="button"
                className="btn btn-success"
                onClick={retreatCard}
              >
                &#8592; Previous Card
              </button>
              <button
                type="button"
                className="btn btn-success"
                onClick={advanceCard}
              >
                Next Card &#8594;
              </button>
              <button
                type="button"
                className="btn btn-secondary"
                onClick={addCard}
              >
                Add Card
              </button>
            </div>
          </div>
        </form>
      </div>
    </main>
  );
}
