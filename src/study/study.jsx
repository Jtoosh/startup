import React, {useContext} from "react";
import "./study.css";
import { NavLink } from "react-router-dom";
import { Deck } from "../../shared/deck.mjs";
import { DeckContext } from "../app.jsx";

export function Study() {
  const {currentDeckIndex, setCurrentDeckIndex} = useContext(DeckContext);
  const [currentUser, setCurrentUser] = React.useState(localStorage.getItem("userObject"));

  let cardWidth = { width: "10rem" };
  let createdDecks = readDecks();

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


  function readDecks() {
    let userDecks = readStorage();
    let deckDivs = [];
    for (let deck of userDecks) {
      deckDivs.push(
        <div className="card" style={cardWidth}>
          <h5 className="card-title">{deck.name}</h5>
          <NavLink to="flashcard" className="btn btn-primary btn-sm" onClick={() => {setCurrentDeckIndex(userDecks.indexOf(deck))}}>
            Study
          </NavLink>
        </div>
      );
    }
    deckDivs.push(
      <div className="card" style={cardWidth}>
        <h5 className="card-title">Create Deck</h5>
        <NavLink to="flashcardEdit" className="btn btn-primary btn-sm" onClick={() => {setCurrentDeckIndex(userDecks.length)}}>
          +
        </NavLink>
      </div>
    );
    return deckDivs;
  }

  return (
    <main className="container-fluid">
      <div className="text-center">
        <h1>Study Menu</h1>
        <p>
          Here is where you access you flashcard decks and quizzes, both that
          you have created or found from other users.
        </p>
      </div>

      <div>
        <button className="btn btn-warning my-4">Show Favorites</button>
      </div>

      <div
        className=" row d-flex justify-content-evenly text-center ms-4"
        id="deckDisplay"
      >
        <span className="text-start">Your Decks:</span>
        {createdDecks}
      </div>

      <div className="row d-flex justify-content-evenly text-center ms-4">
        <span className="text-start">Your Quizzes:</span>

        <div className="card" style={cardWidth}>
          <h5 className="card-title">Quiz1</h5>
          <NavLink to="quiz" className="btn btn-primary btn-sm">
            Take Quiz
          </NavLink>
        </div>
        <div className="card" style={cardWidth}>
          <h5 className="card-title">Quiz2</h5>
          <NavLink to="quiz" className="btn btn-primary btn-sm">
            Take Quiz
          </NavLink>
        </div>
        <div className="card" style={cardWidth}>
          <h5 className="card-title">Create Quiz</h5>
          <NavLink to="quizEdit" className="btn btn-primary btn-sm">
            +
          </NavLink>
        </div>
      </div>
    </main>
  );
}
