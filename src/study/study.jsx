import React, { useContext } from "react";
import "./study.css";
import { NavLink } from "react-router-dom";
import { Deck } from "./deck.mjs";
import { Card } from "./card.mjs";
import { Quiz } from "./quiz.js";
import { Question } from "./question.js";
import { DeckContext } from "../app.jsx";
import { QuizContext } from "../app.jsx";
import { OnlineStatus } from "./onlineStatus.jsx";
import { StudyEvent, StudyNotifier } from "./studyNotifier.mjs";
import { readStorage } from "./readstorage.js";

export function Study() {
  const { currentDeckIndex, setCurrentDeckIndex } = useContext(DeckContext);
  const { currentQuizIndex, setCurrentQuizIndex } = useContext(QuizContext);

  const [currentUser, setCurrentUser] = React.useState(
    JSON.parse(localStorage.getItem("userObject"))
  );
  // TODO: Add a setCurrentQuizIndex function using useContext hook.

  let cardWidth = { width: "10rem" };
  let createdDecks = readDecks();
  let createdQuizzes = readQuizzes();

  function readDecks() {
    let userDecks = readStorage("flashcard", currentUser);
    let deckDivs = [];
    for (let deck of userDecks) {
      deckDivs.push(
        <div className="card" style={cardWidth}>
          <h5 className="card-title">{deck.name}</h5>
          <NavLink
            to="flashcard"
            className="btn btn-primary btn-sm"
            onClick={() => {
              StudyNotifier.sendMessage(
                currentUser.username,
                StudyEvent.Start,
                {}
              );
              setCurrentDeckIndex(userDecks.indexOf(deck));
            }}
          >
            Study
          </NavLink>
        </div>
      );
    }
    deckDivs.push(
      <div className="card" style={cardWidth}>
        <h5 className="card-title">Create Deck</h5>
        <NavLink
          to="flashcardEdit"
          className="btn btn-primary btn-sm"
          onClick={() => {
            setCurrentDeckIndex(userDecks.length);
          }}
        >
          +
        </NavLink>
      </div>
    );
    return deckDivs;
  }

  function readQuizzes() {
    let userQuizzes = readStorage("quiz", currentUser);
    let quizDivs = [];
    for (let quiz of userQuizzes) {
      quizDivs.push(
        <div className="card" style={cardWidth}>
          <h5 className="card-title">{quiz.name}</h5>
          <NavLink
            to="quiz"
            className="btn btn-primary btn-sm"
            onClick={() => {
              StudyNotifier.sendMessage(
                currentUser.username,
                StudyEvent.Start,
                {}
              );
              setCurrentQuizIndex(userQuizzes.indexOf(quiz));
            }}
          >
            Take Quiz
          </NavLink>
        </div>
      );
    }
    quizDivs.push(
      <div className="card" style={cardWidth}>
        <h5 className="card-title">Create Quiz</h5>
        <NavLink
          to="quizEdit"
          className="btn btn-primary btn-sm"
          onClick={() => {
            setCurrentQuizIndex(userQuizzes.length);
          }}
        >
          +
        </NavLink>
      </div>
    );
    return quizDivs;
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
        {createdQuizzes}
        {/* <div>
          <span>Quiz functionality coming soon!</span>
        </div> */}
      </div>

      <OnlineStatus />
    </main>
  );
}
