import React from "react";
import "./study.css";

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
                <a href="flashcardTemplate.html" className ="btn btn-primary btn-sm">Study</a>
            </div>
            <div className="card" style={cardWidth}>
                <h5 className="card-title">Deck2</h5>
                <a href="flashcardTemplate.html" className ="btn btn-primary btn-sm">Study</a>
            </div>
            <div className="card" style={cardWidth}>
                <h5 className="card-title">Create Deck</h5>
                <a href="flashcardEdit.html" className="btn btn-primary btn-sm">+</a>
            </div>
        </div>

        <div className="row d-flex justify-content-evenly text-center ms-4">
            <span className="text-start">Your Quizzes:</span>
            
                <div className="card" style={cardWidth}>
                    <h5 className="card-title">Quiz1</h5>
                    <a href="quizTemplate.html" className="btn btn-primary btn-sm">Take Quiz</a>
                </div>
                <div className="card" style={cardWidth}>
                    <h5 className="card-title">Quiz2</h5>
                    <a href="quizTemplate.html" className="btn btn-primary btn-sm">Take Quiz</a>
                </div>
                <div className="card" style={cardWidth}>
                    <h5 className="card-title">Create Quiz</h5>
                    <a href="quizEdit.html" className="btn btn-primary btn-sm">+</a>
                </div>
        </div>
    </main>
}
