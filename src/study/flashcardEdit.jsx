import React from "react";
import "./study.css";
import { NavLink } from "react-router-dom";

export function FlashcardEdit() {
  return <main>
    <h1 className = "text-center">"Deck Name"</h1>
    <NavLink to="../study" className="btn btn-primary">&#8592; Back to Study</NavLink>

    <div className="container-fluid d-flex row justify-content-center"> 
        <div className=" flashcard card text-center my-4 flashcard">
            <div className="flashcard-inner">
                <div className="flashcard-front my-4">
                    Front of flashcard field 
                    <input type="text" name="term_name" id="term_name" required= "true" placeholder="Term Name"/>
                    
                    <input type="text" required = "true" id="semantic" placeholder="Semantic Device" className="my-4"/>
                </div>
                <div className="flashcard-back my-4">
                    Back of flashcard field
                    <input type="text" required = "true" id= "definition" placeholder="Definition"/> 
                </div>
            </div>
        </div>
        <div>
            <div className="buttons d-flex column justify-content-center">
                <button className="btn btn-warning">Need ideas? <strong>This will use a 3rd party API to generate ideas/mnemonics</strong></button>
                <form action="flashcardTemplate.html" ><button type="submit" className="btn btn-primary">Save Changes</button></form>
            </div>
            <div className="buttons d-flex column justify-content-center my-4">
                <button className="btn btn-success"> &#8592; Previous Card</button>
                <button className="btn btn-success">Next Card &#8594;</button>
            </div>
        </div>
    </div>
</main>
}