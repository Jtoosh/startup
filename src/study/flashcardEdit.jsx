import React, { useContext } from "react";
import "./study.css";
import { NavLink } from "react-router-dom";
import { Card } from "../../public/shared/card.mjs";
import { Deck } from "../../public/shared/deck.mjs";
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
        const nameKey = Object.keys(currentUser.decks[i])[0];
        const nameValue = Object.values(currentUser.decks[i])[0];
        const cardsKey = Object.keys(currentUser.decks[i])[1];
        const cardsValue = Object.values(currentUser.decks[i])[1];
        for (let j = 0; j < cardsValue.length; j++) {
          const termNameKey = Object.keys(cardsValue[j])[0];
          const termNameValue = Object.values(cardsValue[j])[0];
          const termDefKey = Object.keys(cardsValue[j])[1];
          const termDefValue = Object.values(cardsValue[j])[1];
          const semanticKey = Object.keys(cardsValue[j])[2];
          const semanticValue = Object.values(cardsValue[j])[2];
          cardsValue[j] = new Card(termNameValue, termDefValue, semanticValue);
        }
        thisUserDecks.push({ name: nameValue, cards: cardsValue });
      }
      
      let deckObjects = thisUserDecks.map(
        (deck) => new Deck(deck.name, deck.cards)
      );
      
      return deckObjects;
    } else{
      return [];
    }
    
    
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

    updateStorage();
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
