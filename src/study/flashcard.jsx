import React from "react";
import "./study.css";
import { NavLink } from "react-router-dom";

export function Flashcard() {
return <main>
<h1 className = "text-center">"Deck Name"</h1>
<NavLink to="../study" className="btn btn-primary">&#8592; Back to Study</NavLink>

<div className="container-fluid d-flex row justify-content-center">
    
        <div className="card text-center my-4 flashcard">
            <div className="flashcard-inner">
                <div className="flashcard-front">
                    <p>Term name</p>
                    <p>Semantic device</p>
                </div>
                <div className="flashcard-back">
                    <p>Term definition</p>
                </div>
            </div>
        </div>

    <div className="button ">
        <div className = " buttons d-flex column justify-content-center  mx-2 ">
            <button className="btn btn-success">&#8592; Back</button>
            <button className="btn btn-success">Next &#8594;</button>
        </div>
        <div className="buttons d-flex column justify-content-center my-4 ">
            <button className="btn btn-warning">Favorite</button>
            <button className="btn btn-secondary">Share Deck </button>
            <form action="flashcardEdit.html">
                <button type="submit" className="btn btn-primary">Edit Card</button>
            </form>
        </div>
    </div>
</div>
</main>
}