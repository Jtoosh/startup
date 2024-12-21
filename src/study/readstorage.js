import {Deck} from './deck.mjs'
import {Card} from './card.mjs'
import { Quiz } from "./quiz.js";
import { Question } from "./question.js";


export function readStorage(mediaType, userObject) {
    if (mediaType === "flashcard") {
      const thisUserDecks = [];
      if (userObject.decks.length !== 0) {
        for (let i = 0; i < userObject.decks.length; i++) {
          //
          // const nameKey = Object.keys(userObject.decks[i])[0];
          const nameValue = Object.values(userObject.decks[i])[0];
          // const cardsKey = Object.keys(userObject.decks[i])[1];
          const cardsValue = Object.values(userObject.decks[i])[1];
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
        return deckObjects;
      } else {
        return [];
      }
      
    } else if (mediaType === "quiz") {
      const thisUserQuizzes = [];
      if (userObject.quizzes.length) {
        for (let i = 0; i < userObject.quizzes.length; i++) {
          // const nameKey = Object.keys(userObject.quizzes[i])[0];
          const nameValue = Object.values(userObject.quizzes[i])[0];
          // const questionsKey = Object.keys(userObject.quizzes[i])[1];
          const questionsValue = Object.values(userObject.quizzes[i])[1];
          for (let j = 0; j < questionsValue.length; j++) {
            questionsValue[j] = new Question(
              questionsValue[j].questionText,
              questionsValue[j].answer,
              questionsValue[j].options,
              questionsValue[j].semantic
            );
          }
          thisUserQuizzes.push({ name: nameValue, questions: questionsValue });
        }
        let quizObjects = thisUserQuizzes.map(
          (quiz) => new Quiz(quiz.name, quiz.questions)
        );
        return quizObjects;
      } else {
        return [];
      }
    }
  }