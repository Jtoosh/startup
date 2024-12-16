import React, { useContext } from "react";
import "./study.css";
import { NavLink } from "react-router-dom";
import { Deck } from "./deck.mjs";
import { Card } from "./card.mjs";
import { Quiz } from "./quiz.js";
import { Question } from "./question.js";
import { DeckContext } from "../app.jsx";
import { OnlineStatus } from "./onlineStatus.jsx";
import { StudyEvent, StudyNotifier } from "./studyNotifier.mjs";

export function Study() {
  const { currentDeckIndex, setCurrentDeckIndex } = useContext(DeckContext);
  const { currentQuizIndex, setCurrentQuizIndex } = useContext(DeckContext);
  const [currentUser, setCurrentUser] = React.useState(
    JSON.parse(localStorage.getItem("userObject"))
  );
  // TODO: Add a setCurrentQuizIndex function using useContext hook.

  let cardWidth = { width: "10rem" };
  let createdDecks = readDecks();

  function readStorage(mediaType) {
    if (mediaType === "flashcard") {
      const thisUserDecks = [];
      if (currentUser.decks.length !== 0) {
        for (let i = 0; i < currentUser.decks.length; i++) {
          //
          // const nameKey = Object.keys(currentUser.decks[i])[0];
          const nameValue = Object.values(currentUser.decks[i])[0];
          // const cardsKey = Object.keys(currentUser.decks[i])[1];
          const cardsValue = Object.values(currentUser.decks[i])[1];
          for (let j = 0; j < cardsValue.length; j++) {
            // const termNameKey = Object.keys(cardsValue[j])[0];
            const termNameValue = Object.values(cardsValue[j])[0];
            // const termDefKey = Object.keys(cardsValue[j])[1];
            const termDefValue = Object.values(cardsValue[j])[1];
            // const semanticKey = Object.keys(cardsValue[j])[2];
            const semanticValue = Object.values(cardsValue[j])[2];
            cardsValue[j] = new Card(
              termNameValue,
              termDefValue,
              semanticValue
            );
          }
          thisUserDecks.push({ name: nameValue, cards: cardsValue });
        }

        let deckObjects = thisUserDecks.map(
          (deck) => new Deck(deck.name, deck.cards)
        );
      } else {
        return [];
      }
      return deckObjects;
    } else if (mediaType === "quiz") {
      const thisUserQuizzes = [];
      if (currentUser.quizzes.length) {
        for (let i = 0; i < currentUser.quizzes.length; i++) {
          // const nameKey = Object.keys(currentUser.quizzes[i])[0];
          const nameValue = Object.values(currentUser.quizzes[i])[0];
          // const questionsKey = Object.keys(currentUser.quizzes[i])[1];
          const questionsValue = Object.values(currentUser.quizzes[i])[1];
          for (let j = 0; j < questionsValue.length; j++) {
            const questionTextValue = questionsValue[0];
            const answerValue = questionsValue[1];
            const optionsValue = questionsValue[2];
            const semanticValue = questionsValue[3];
            questionsValue[j] = new Question(
              questionTextValue,
              answerValue,
              optionsValue,
              semanticValue
            );
          }
          thisUserQuizzes.push({ name: nameValue, questions: questionsValue });
        }
        let quizObjects = thisUserQuizzes.map(
          (quiz) => new Quiz(quiz.name, quiz.questions)
        );
      } else {
        return [];
      }
      return quizObjects;
    }
  }
  function readDecks() {
    let userDecks = readStorage("flashcard");
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
    let userQuizzes = readStorage("quiz");
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

        <div>
          <span>Quiz functionality coming soon!</span>
        </div>
        {/* <div className="card" style={cardWidth}>
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
        </div> */}
      </div>

      <OnlineStatus />
    </main>
  );
}
