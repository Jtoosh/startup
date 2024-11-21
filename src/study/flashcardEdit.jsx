import React, { useContext } from "react";
import "./study.css";
import { NavLink } from "react-router-dom";
import { Card } from "../../shared/card.mjs";
import { Deck } from "../../shared/deck.mjs";
import { DeckContext } from "../app";
import { ApiModal } from "./apiModal";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export function FlashcardEdit() {
  const { currentDeckIndex, setCurrentDeckIndex } = useContext(DeckContext);
  const [currentCardIndex, setCurrentCardIndex] = React.useState(0);
  const [currentUser, setCurrentUser] = React.useState(JSON.parse(localStorage.getItem("userObject")));
 
  

  let deckEditing =
    readStorage()[currentDeckIndex] !== undefined
      ? readStorage()[currentDeckIndex]
      : new Deck("New Deck", [
          new Card("New Term", "New Definition", "New Semantic"),
        ]);
  

  function readStorage() {
    const thisUserDecks = []
    if (currentUser.decks.length !== 0) {
      for (let i = 0; i < currentUser.decks.length; i++) {
        // 
        console.log(currentUser.decks[i].name);
        const nameKey = currentUser.decks[i].key(0)
        const nameValue = currentUser.decks[i].getItem(nameKey);
        const cardsKey = currentUser.decks[i].key(1)
        const cardsValue = currentUser.decks[i].getItem(cardsKey);
        thisUserDecks.push({ nameKey, value: JSON.parse(nameValue), cardsKey, cardsValue: JSON.parse(cardsValue) });
      }
      let deckObjects = thisUserDecks.map(
        (deck) => new Deck(deck.key, deck.value.cards)
      );
    } else{
      return [];
    }
    // console.log(deckObjects);
    return deckObjects;
  }

  function updateStorage() {
    console.log(currentUser.decks);
    currentUser.decks[currentDeckIndex] = deckEditing;
    setCurrentUser(currentUser);
    localStorage.setItem("userObject", JSON.stringify(currentUser));
    
  }

  function handleSubmit(e) {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);

    const formObject = Object.fromEntries(formData.entries());

    let currentCard = deckEditing.cards[currentCardIndex];

    deckEditing.name = formObject.deckName;

    currentCard.termName = formObject.termName;
    currentCard.termDef = formObject.termDef;
    currentCard.semantic = formObject.semantic;

    localStorage.setItem(deckEditing.name, JSON.stringify(deckEditing));
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
      <h1 className="text-center">{deckEditing.name}</h1>
      <NavLink to="../study" className="btn btn-primary">
        &#8592; Back to Study
      </NavLink>

      <div className="container-fluid d-flex row justify-content-center">
        <form
          onSubmit={handleSubmit}
          className="container-fluid d-flex row justify-content-center"
        >
          <div className="text-center">
            <input
              type="text"
              required={true}
              name="deckName"
              id="DeckName"
              defaultValue={deckEditing.name}
              key={`${currentCardIndex}-deckName-1`}
            />
          </div>
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
                <button
                  type="button"
                  onClick={flipAnimation}
                  className="btn btn-secondary"
                >
                  Flip
                </button>
              </div>
            </div>
          </div>
          <div>
            <div className="buttons d-flex column justify-content-center">
              <ApiModal/>
              
              <button
                type="submit"
                to="../study/flashcard"
                className="btn btn-primary"
              >
                Save Changes
              </button>
              <NavLink
                type="button"
                to="../study/flashcard"
                className="btn btn-primary"
              >
                Finish Editing
              </NavLink>
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
