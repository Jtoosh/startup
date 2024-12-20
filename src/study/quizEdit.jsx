import React from "react";
import "./study.css";
import { NavLink } from "react-router-dom";

export function QuizEdit() {
  return  <main>
  <h1 className = "text-center">"Quiz Name"</h1>
  <NavLink to="../study" className="btn btn-primary">&#8592; Back to Study</NavLink>
  <div className="container-fluid d-flex row justify-content-center">
      <div className="card question text-center my-4 d-flex column justify-content-end">
          <div className="my-4" > 
              <div className="my-2"><input type="text" id="question" name="question" placeholder="Quiz Question" required/></div>

              <div className="my-2"><input type="text" id="semantic" name="semantic" placeholder="Semantic Device" required/></div>
          </div>
      
          <div className="mt-8">
             
              <div className="my-4 text-start">
                  <div className="form-check">
                      <input type="radio" id="option1rad" name="quiz-option" value="option1" className="form-check-input"/>
                      <label for="option1rad" className="form-check-label">A</label>
                      <input type="text" id="option1text" placeholder="Option 1"/>
                  </div>
                  <div className="form-check">
                      <input type="radio" id="option2" name="quiz-option" value="option2" className="form-check-input"/>
                      <label for="option2" className="form-check-label">B</label>
                      <input type="text" id="option1text" placeholder="Option 2"/>
                  </div>
                  <div className="form-check">
                      <input type="radio" id="option3" name="quiz-option" value="option3" className="form-check-input"/>
                      <label for="option3" className="form-check-label">C</label>
                      <input type="text" id="option1text" placeholder="Option 3"/>
                  </div>
                  <div className="form-check">
                      <input type="radio" id="option4" name="quiz-option" value="option4" className="form-check-input"/>
                      <label for="option4" className="form-check-label">D</label>
                      <input type="text" id="option1text" placeholder="Option 4"/>
                  </div>
              </div>
          </div>
      </div>
      <div>
          <div className = " buttons d-flex column justify-content-center  mx-2 ">
              <button className="btn btn-success">&#8592; Back</button>
              <button className="btn btn-success">Next &#8594;</button>
          </div>
          <div className="buttons d-flex column justify-content-center my-4">
              <button className="btn btn-warning">Need a Suggestion?</button>
              <form action="quizTemplate.html">
                  <button type="submit" className="btn btn-primary">Save Quiz</button>
              </form>
          </div>
      </div>
  </div>
</main>
}