import React, { useContext, useState } from "react";
import "./study.css";
import { NavLink } from "react-router-dom";
import { DeckContext } from "../app";
import { Card } from "../../shared/card.mjs"
import { Deck } from "../../shared/deck.mjs"

export function Flashcard() {
  const [currentUser, setCurrentUser] = React.useState(
    localStorage.getItem("userObject")
  );
  let userDecks = readStorage();
  const { currentDeckIndex, setCurrentDeckIndex } = useContext(DeckContext);
  const currentDeck = userDecks[currentDeckIndex];
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  // console.log(userDecks);
  // console.log(currentDeckIndex);
  const [currentCard, setCurrentCard] = React.useState(
    userDecks[currentDeckIndex].cards[0]
  );


  function readStorage() {
    const thisUserDecks = []
    if (currentUser.deck !== undefined) {
      for (let i = 0; i < currentUser.deck.length; i++) {
        const key = currentUser.deck.key(i);
        const value = currentUser.deck.getItem(key);
        thisUserDecks.push({ key, value: JSON.parse(value) });
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
  // console.log(userDecks)
  function flipAnimation() {
    let flashcard = document.querySelector(".flashcard");
    flashcard.classList.toggle("flipped");
  }

  function advanceCard() {
    if (currentDeck.cards[currentCardIndex + 1] === undefined) {
      alert('No more cards in deck. Click "Add Card" to add a new card.');
      return;
    } else {
      setCurrentCardIndex(currentCardIndex + 1);
    }
  }
  function retreatCard() {
    if (currentDeck.cards[currentCardIndex - 1] === undefined) {
      alert('No more cards in deck. Click "Add Card" to add a new card.');
      return;
    } else {
      setCurrentCardIndex(currentCardIndex - 1);
    }
  }

  return (
    <main onLoad={readStorage}>
      <h1 className="text-center">{currentDeck.name}</h1>
      <NavLink to="../study" className="btn btn-primary">
        &#8592; Back to Study
      </NavLink>

      <div className="container-fluid d-flex row justify-content-center">
        <div className="card text-center my-4 flashcard">
          <div className="flashcard-inner">
            <div className="flashcard-front">
              <p>{currentDeck.cards[currentCardIndex].termName}</p>
              <p>{currentDeck.cards[currentCardIndex].semantic}</p>
              <button onClick={flipAnimation} className="btn btn-secondary">
                Flip
              </button>
            </div>
            <div className="flashcard-back">
              <p>{currentDeck.cards[currentCardIndex].termDef}</p>
              <button onClick={flipAnimation} className="btn btn-secondary">
                Flip
              </button>
            </div>
          </div>
        </div>

        <div className="button ">
          <div className=" buttons d-flex column justify-content-center  mx-2 ">
            <button className="btn btn-success" onClick={retreatCard}>
              &#8592; Back
            </button>
            <button className="btn btn-success" onClick={advanceCard}>
              Next &#8594;
            </button>
          </div>
          <div className="buttons d-flex column justify-content-center my-4 ">
            <button className="btn btn-warning">Favorite</button>
            <button className="btn btn-secondary">Share Deck </button>

            <NavLink to="../study/flashcardEdit" className="btn btn-primary">
              Edit Card
            </NavLink>
          </div>
        </div>
      </div>
    </main>
  );
}
