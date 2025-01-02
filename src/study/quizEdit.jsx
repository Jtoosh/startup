import React from "react";
import "./study.css";
import { NavLink } from "react-router-dom";
import { Quiz } from "./quiz.js";
import { Question } from "./question.js";
import { QuizContext } from "../app.jsx";
import { readStorage } from "./readstorage.js";

export function QuizEdit() {
  const [currentUser, setCurrentUser] = React.useState(
    JSON.parse(localStorage.getItem("userObject"))
  );
  const { currentQuizIndex, setCurrentQuizIndex } =
    React.useContext(QuizContext);
  const [currentQuestionIndex, setCurrentQuestionIndex] = React.useState(0);

  let quizEditing =
    readStorage("quiz", currentUser)[currentQuizIndex] !== undefined
      ? readStorage("quiz", currentUser)[currentQuizIndex]
      : new Quiz("New Quiz", [
          new Question(
            "New Question",
            "New Answer",
            ["Option 1", "Option 2", "Option 3", "Option 4"],
            "New Semantic",
            "No Selection"
          ),
        ]);

  function updateStorage() {
    currentUser.quizzes[currentQuizIndex] = quizEditing;
    setCurrentUser(currentUser);
    localStorage.setItem("userObject", JSON.stringify(currentUser));
  }

  function nextQuestion() {
    if (currentQuestionIndex + 1 === quizEditing.questions.length) {
      alert(
        'No more questions in quiz. Click "Add Question" to add a new question.'
      );
      return;
    } else {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  }
  function prevQuestion() {
    if (currentQuestionIndex - 1 < 0) {
      alert(
        'No more questions in quiz. Click "Add Question" to add a new question.'
      );
      return;
    } else {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const formObject = Object.fromEntries(formData.entries());
    let currentQuestion = quizEditing.questions[currentQuestionIndex];

    currentQuestion.questionText = formObject.question;
    currentQuestion.answer = formObject.answer;
    currentQuestion.semantic = formObject.semantic;
    currentQuestion.options = [
      formObject.option1,
      formObject.option2,
      formObject.option3,
      formObject.option4,
    ];
    updateStorage();
  }

  function addQuestion() {
    const newQuestion = new Question(
      "Question",
      "Answer",
      ["A", "B", "C", "D"],
      "Semantic",
      "No Selection"
    );
    console.log(newQuestion);
    quizEditing.questions.push(newQuestion);
    updateStorage();
    setCurrentQuestionIndex(quizEditing.questions.length - 1);
    console.log(currentQuestionIndex);
    console.log(quizEditing);
  }

  return (
    <main>
      <h1 className="text-center">{quizEditing.name}</h1>
      <NavLink to="../study" className="btn btn-primary">
        &#8592; Back to Study
      </NavLink>
      <form onSubmit={handleSubmit}>
        <div className="container-fluid d-flex row justify-content-center">
          <div className="card question text-center my-4 d-flex column justify-content-end">
            <div className="my-4">
              <div className="my-2">
                <label htmlFor="question">Question: </label>
                <input
                  type="text"
                  id="question"
                  name="question"
                  defaultValue={
                    quizEditing.questions[currentQuestionIndex].questionText
                  }
                  required = {true}
                  key={`${currentQuestionIndex}-questionText-1`}
                />
              </div>

              <div className="my-2">
                <label htmlFor="semantic">Semantic Device: </label>
                <input
                  type="text"
                  id="semantic"
                  name="semantic"
                  defaultValue={
                    quizEditing.questions[currentQuestionIndex].semantic
                  }
                  required = {true}
                  key={`${currentQuestionIndex}-semantic-2`}
                />
              </div>

              <div className="my-2">
                <label htmlFor="answer">Answer: </label>
                <input
                  type="text"
                  id="answer"
                  name="answer"
                  defaultValue={
                    quizEditing.questions[currentQuestionIndex].answer
                  }
                  required = {true}
                  key={`${currentQuestionIndex}-answer-3`}
                />   
              </div>
            </div>

            <div className="mt-8">
              <div className="my-4 text-start">
                <div className="form-check">
                  <label htmlFor="option1" className="form-check-label">
                    A
                  </label>
                  <input
                    type="text"
                    id="option1"
                    name="option1"
                    defaultValue={
                      quizEditing.questions[currentQuestionIndex].options[0]
                    }
                    required = {true}
                    key={`${currentQuestionIndex}-option1-4`}
                  />
                </div>
                <div className="form-check">
                  <label htmlFor="option2" className="form-check-label">
                    B
                  </label>
                  <input
                    type="text"
                    id="option2"
                    name="option2"
                    defaultValue={
                      quizEditing.questions[currentQuestionIndex].options[1]
                    }
                    required = {true}
                    key={`${currentQuestionIndex}-option2-5`}
                  />
                </div>
                <div className="form-check">
                  <label htmlFor="option3" className="form-check-label">
                    C
                  </label>
                  <input
                    type="text"
                    id="option3"
                    name="option3"
                    defaultValue={
                      quizEditing.questions[currentQuestionIndex].options[2]
                    }
                    required = {true}
                    key={`${currentQuestionIndex}-option3-6`}
                  />
                </div>
                <div className="form-check">
                  <label htmlFor="option4" className="form-check-label">
                    D
                  </label>
                  <input
                    type="text"
                    id="option4"
                    name="option4"
                    defaultValue={
                      quizEditing.questions[currentQuestionIndex].options[3]
                    }
                    required = {true}
                    key={`${currentQuestionIndex}-option4-7`}
                  />
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className=" buttons d-flex column justify-content-center  mx-2 ">
              <button
                type="button"
                className="btn btn-success"
                onClick={prevQuestion}
              >
                &#8592; Back
              </button>
              <button
                type="button"
                className="btn btn-success"
                onClick={nextQuestion}
              >
                Next &#8594;
              </button>
              <button
                type="button"
                className="btn btn-secondary"
                onClick={addQuestion}
              >
                Add Question
              </button>
            </div>
            <div className="buttons d-flex column justify-content-center my-4">
              <button className="btn btn-warning">Need a Suggestion?</button>
              <NavLink
                to="../study/quiz"
                className="btn btn-primary"
              >
                Finish Editing
              </NavLink>
              <button type="submit" className="btn btn-primary">
                Save Quiz
              </button>
            </div>
          </div>
        </div>
      </form>
    </main>
  );
}
