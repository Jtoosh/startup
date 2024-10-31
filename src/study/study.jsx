import React from "react";
import "./study.css";
import { NavLink } from "react-router-dom";

export function Study() {
let cardWidth = {width: "10rem"};

  return <main className="container-fluid">
        <div className="text-center">
            <h1>Study Menu</h1> 
            <p>Here is where you access you flashcard decks and quizzes, both that you have created or found from other users.</p>
        </div>

        <div><button className="btn btn-warning my-4">Show Favorites</button></div>

        <div className=" row d-flex justify-content-evenly text-center ms-4">
            <span className="text-start">Your Decks:</span>
            <div className="card" style={cardWidth}>
                <h5 className="card-title">Deck1</h5>
                <NavLink to="flashcard" className ="btn btn-primary btn-sm"> Study</NavLink>
            </div>
            <div className="card" style={cardWidth}>
                <h5 className="card-title">Deck2</h5>
                <NavLink to="flashcard" className ="btn btn-primary btn-sm"> Study</NavLink>
            </div>
            <div className="card" style={cardWidth}>
                <h5 className="card-title">Create Deck</h5>
                <NavLink to="flashcardEdit" className="btn btn-primary btn-sm">+</NavLink>
            </div>
        </div>

        <div className="row d-flex justify-content-evenly text-center ms-4">
            <span className="text-start">Your Quizzes:</span>
            
                <div className="card" style={cardWidth}>
                    <h5 className="card-title">Quiz1</h5>
                    <NavLink to="quiz" className="btn btn-primary btn-sm">Take Quiz</NavLink>
                </div>
                <div className="card" style={cardWidth}>
                    <h5 className="card-title">Quiz2</h5>
                    <NavLink to="quiz" className="btn btn-primary btn-sm">Take Quiz</NavLink>
                </div>
                <div className="card" style={cardWidth}>
                    <h5 className="card-title">Create Quiz</h5>
                    <NavLink to="quizEdit" className="btn btn-primary btn-sm">+</NavLink>
                </div>
        </div>
    </main>
}
