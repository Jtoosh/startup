import React from "react";
import "./study.css";
import { NavLink } from "react-router-dom";
import { Quiz } from "./quiz.js";
import { Question } from "./question.js";
import { QuizContext } from "../app.jsx";
import { readStorage } from "./readstorage.js";



export function QuizComponent() {
    const [currentUser, setCurrentUser] = React.useState(JSON.parse(localStorage.getItem("userObject")));
    let userQuizzes = readStorage("quiz", currentUser);

    const { currentQuizIndex, setCurrentQuizIndex } = React.useContext(QuizContext);
    const currentQuiz = userQuizzes[currentQuizIndex];
    const [currentQuestionIndex, setCurrentQuestionIndex] = React.useState(0); 
    
    console.log(currentQuiz)
    

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
    <main onLoad={readStorage}>
      <h1 className="text-center">"Quiz Name"</h1>
      <NavLink to="../study" className="btn btn-primary">
        &#8592; Back to Study
      </NavLink>

      <div className="container-fluid d-flex row justify-content-center">
        <div className="card question text-center my-4 d-flex column justify-content-end">
          <div>{currentQuiz.questions[currentQuestionIndex].questionText}</div>

          <div className="mt-8">
            <div className="my-4">
              {/* <input
                type="text"
                id="answer"
                name="answer"
                placeholder="Answer"
                required
              /> */}
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
                  {currentQuiz.questions[currentQuestionIndex].options[0]}
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
                  {currentQuiz.questions[currentQuestionIndex].options[1]}
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
                  {currentQuiz.questions[currentQuestionIndex].options[2]}
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
                  {currentQuiz.questions[currentQuestionIndex].options[3]}
                </label>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className=" buttons d-flex column justify-content-center  mx-2 ">
            <button className="btn btn-warning">Help</button>
            <button className="btn btn-success" onClick={prevQuestion}>&#8592; Back</button>
            <button className="btn btn-success" onClick={nextQuestion}>Next &#8594;</button>
          </div>
          <div className="buttons d-flex column justify-content-center my-4">
            <button className="btn btn-warning">Favorite</button>
            <button className="btn btn-secondary">Share Quiz </button>
            <NavLink to="../study/quizEdit" className="btn btn-primary">
              <button type="submit" className="btn btn-primary">
                Edit Quiz
              </button>
            </NavLink >
          </div>
        </div>
      </div>
    </main>
  );
}
