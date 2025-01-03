import React from "react";
import "./study.css";
import { NavLink } from "react-router-dom";
import { Quiz } from "./quiz.js";
import { Question } from "./question.js";
import { QuizContext } from "../app.jsx";
import { readStorage } from "./readstorage.js";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

export function QuizComponent() {
  const [currentUser, setCurrentUser] = React.useState(
    JSON.parse(localStorage.getItem("userObject"))
  );
  let userQuizzes = readStorage("quiz", currentUser);

  const { currentQuizIndex, setCurrentQuizIndex } =
    React.useContext(QuizContext);
  const currentQuiz = userQuizzes[currentQuizIndex];
  const [currentQuestionIndex, setCurrentQuestionIndex] = React.useState(0);

  const [modalShow, setModalShow] = React.useState(false);

  const handleShow = () => setModalShow(true);
  const handleClose = () => setModalShow(false);

  function nextQuestion() {
    if (currentQuestionIndex + 1 === currentQuiz.questions.length) {
      alert(
        'No more questions in quiz. Click "Edit Quiz" to add a new question.'
      );
      return;
    } else {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  }
  function prevQuestion() {
    if (currentQuestionIndex - 1 < 0) {
      alert(
        'No more questions in quiz. Click "Edit Quiz" to add a new question.'
      );
      return;
    } else {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  }

  function semanticModal() {
    return (
      <Modal show={modalShow} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Need some Help?</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <strong>Here is the semantic you wrote for this question:</strong>
          <p>{currentQuiz.questions[currentQuestionIndex].semantic}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }

    function findSelection(){
      let currentQuestion = currentQuiz.questions[currentQuestionIndex];
      let options = currentQuestion.options;
      let selection = currentQuestion.selection;
      for (option of options){
        if (option === selection){
          optionElement = document.getElementById(`option` + options.indexOf(option));
          optionElement.defaultChecked = true;
        }
      }
    }

    function setSelection(option){
      let currentQuestion = currentQuiz.questions[currentQuestionIndex];
      currentQuestion.selection = option;  
      localStorage.setItem("userObject", JSON.stringify(currentUser));  
    }

  return (
    <main onLoad={readStorage}>
      <h1 className="text-center">{currentQuiz.name}</h1>
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
            <div className="my-4 text-start" onLoad={findSelection}>
              <div className="form-check">
                <input
                  onChange={() => setSelection(currentQuiz.questions[currentQuestionIndex].options[0])}
                  type="radio"
                  id="option1"
                  name="quiz-selection"
                  value="option1"
                  className="form-check-input"
                  key={currentQuiz.questions[currentQuestionIndex].options[0]}
                  defaultChecked= {false}
                />
                <label htmlFor="option1" className="form-check-label">
                  {currentQuiz.questions[currentQuestionIndex].options[0]}
                </label>
              </div>
              <div className="form-check">
                <input
                  onChange={() => setSelection(currentQuiz.questions[currentQuestionIndex].options[1])}
                  type="radio"
                  id="option2"
                  name="quiz-selection"
                  value="option2"
                  className="form-check-input"
                  key={currentQuiz.questions[currentQuestionIndex].options[1]}
                  defaultChecked= {false}
                />
                <label htmlFor="option2" className="form-check-label">
                  {currentQuiz.questions[currentQuestionIndex].options[1]}
                </label>
              </div>
              <div className="form-check">
                <input
                  onChange={() => setSelection(currentQuiz.questions[currentQuestionIndex].options[2])}
                  type="radio"
                  id="option3"
                  name="quiz-selection"
                  value="option3"
                  className="form-check-input"
                  key={currentQuiz.questions[currentQuestionIndex].options[2]}
                  defaultChecked= {false}
                />
                <label htmlFor="option3" className="form-check-label">
                  {currentQuiz.questions[currentQuestionIndex].options[2]}
                </label>
              </div>
              <div className="form-check">
                <input
                  onChange={() => setSelection(currentQuiz.questions[currentQuestionIndex].options[3])}
                  type="radio"
                  id="option4"
                  name="quiz-selection"
                  value="option4"
                  className="form-check-input"
                  key={currentQuiz.questions[currentQuestionIndex].options[3]}
                  defaultChecked= {false}
                />
                <label htmlFor="option4" className="form-check-label">
                  {currentQuiz.questions[currentQuestionIndex].options[3]}
                </label>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className=" buttons d-flex column justify-content-center  mx-2 ">
            <button className="btn btn-warning" onClick={handleShow}>
              Help
            </button>
            {semanticModal()}
            <button className="btn btn-success" onClick={prevQuestion}>
              &#8592; Back
            </button>
            <button className="btn btn-success" onClick={nextQuestion}>
              Next &#8594;
            </button>
          </div>
          <div className="buttons d-flex column justify-content-center my-4">
            <button className="btn btn-warning">Favorite</button>
            <button className="btn btn-secondary">Share Quiz </button>
            <NavLink to="../study/quizEdit" className="btn btn-primary">
              <button type="submit" className="btn btn-primary">
                Edit Quiz
              </button>
            </NavLink>
          </div>
        </div>
      </div>
    </main>
  );
}
