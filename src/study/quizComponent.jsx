import React from "react";
import "./study.css";
import { NavLink } from "react-router-dom";
import { Quiz } from "./quiz.js";
import { Question } from "./question.js";
import { QuizContext } from "../app.jsx";



export function QuizComponent() {
    const [currentUser, setCurrentUser] = React.useState(JSON.parse(localStorage.getItem("userObject")));
    let userQuizzes = readStorage();

    const { currentQuizIndex, setCurrentQuizIndex } = React.useContext(QuizContext);
    const currentQuiz = userQuizzes[currentQuizIndex];
    console.log(userQuizzes);
    console.log(currentQuizIndex);
    console.log(currentQuiz);
    const [currentQuestionIndex, setCurrentQuestionIndex] = React.useState(0);    

    function readStorage() {
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
          return quizObjects;
        } else {
          return [];
        }
      }

      function nextQuestion() {
        if (currentQuiz.questions[currentQuestionIndex + 1] === undefined) {
          alert('No more cards in deck. Click "Add Card" to add a new card.');
          return;
        } else {
          setCurrentQuestionIndex(currentQuestionIndex + 1);
        }
      }
      function prevQuestion() {
        if (currentQuiz.questions[currentQuestionIndex - 1] === undefined) {
          alert('No more cards in deck. Click "Add Card" to add a new card.');
          return;
        } else {
          setCurrentQuestionIndex(currentQuestionIndex - 1);
        }
      }

  return (
    <main onLoad={readStorage()}>
      <h1 className="text-center">"Quiz Name"</h1>
      <NavLink to="../study" className="btn btn-primary">
        &#8592; Back to Study
      </NavLink>

      <div className="container-fluid d-flex row justify-content-center">
        <div className="card question text-center my-4 d-flex column justify-content-end">
          <div>{currentQuiz.questions[currentQuestionIndex].questionText}</div>

          <div className="mt-8">
            <div className="my-4">
              <input
                type="text"
                id="answer"
                name="answer"
                placeholder="Answer"
                required
              />
              <input
                type="text"
                id="semantic"
                name="semantic"
                placeholder="Semantic Device"
                required
              />
            </div>
            <div className="my-4 text-start">
              <div className="form-check">
                <input
                  type="radio"
                  id="option1"
                  name="quiz-option"
                  value="option1"
                  className="form-check-input"
                />
                <label for="option1" className="form-check-label">
                  Option 1
                </label>
              </div>
              <div className="form-check">
                <input
                  type="radio"
                  id="option2"
                  name="quiz-option"
                  value="option2"
                  className="form-check-input"
                />
                <label for="option2" className="form-check-label">
                  Option 2
                </label>
              </div>
              <div className="form-check">
                <input
                  type="radio"
                  id="option3"
                  name="quiz-option"
                  value="option3"
                  className="form-check-input"
                />
                <label for="option3" className="form-check-label">
                  Option 3
                </label>
              </div>
              <div className="form-check">
                <input
                  type="radio"
                  id="option4"
                  name="quiz-option"
                  value="option4"
                  className="form-check-input"
                />
                <label for="option4" className="form-check-label">
                  Option 4
                </label>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className=" buttons d-flex column justify-content-center  mx-2 ">
            <button className="btn btn-warning">Help</button>
            <button className="btn btn-success">&#8592; Back</button>
            <button className="btn btn-success">Next &#8594;</button>
          </div>
          <div className="buttons d-flex column justify-content-center my-4">
            <button className="btn btn-warning">Favorite</button>
            <button className="btn btn-secondary">Share Quiz </button>
            <form action="quizEdit.html">
              <button type="submit" className="btn btn-primary">
                Edit Quiz
              </button>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}
