import React from "react";
import "./study.css";
import { NavLink } from "react-router-dom";
import { Card, Deck } from "./flashcard.jsx";

function getDeck(deckName){
    // let currentDeck = localStorage.getItem(deckName)
    // let deck = JSON.parse(currentDeck)
    // return deck
}

let card1 = new Card("James", "Just a guy trying to learn react", "Just trying -> James")
let deckEditing = new Deck("Test Deck",[card1] )

function updateCard(){
    // let term_name = document.getElementById('term_name').value
    // let semantic = document.getElementById('semantic').value
    // let definition = document.getElementById('definition').value
    // let card = new Card(term_name, definition, semantic)
    // deckEditing.cards[0] = card
    // localStorage.setItem(deckEditing.name, JSON.stringify(deckEditing))
    localStorage.setItem(formData, new FormData(document.querySelector('form')))
}

export function FlashcardEdit() {
  return <main>
    <h1 className = "text-center">"Deck Name"</h1>
    <NavLink to="../study" className="btn btn-primary">&#8592; Back to Study</NavLink>

    <div className="container-fluid d-flex row justify-content-center"> 
        <form onSubmit={updateCard} className="container-fluid d-flex row justify-content-center">
            <div className=" flashcard card text-center my-4 flashcard">
                <div className="flashcard-inner">
                    <div className="flashcard-front my-4">
                        Front of flashcard field
                        <input type="text"  name="term_name" id="term_name" required= "true" placeholder={deckEditing.cards[0].termName}/>
            
                        <input type="text" required = "true" id="semantic" placeholder={deckEditing.cards[0].semantic} className="my-4"/>
                    </div>
                    <div className="flashcard-back my-4">
                        Back of flashcard field
                        <input type="textarea" required = "true" id= "definition" placeholder={deckEditing.cards[0].termDef}/>
                    </div>
                </div>
            </div>
            <div>
                <div className="buttons d-flex column justify-content-center">
                    <button className="btn btn-warning">Need ideas? <strong>This will use a 3rd party API to generate ideas/mnemonics</strong></button>
                    <NavLink type="submit" to="../study/flashcard" className="btn btn-primary" action="submit" >Save Changes</NavLink>
                </div>
                <div className="buttons d-flex column justify-content-center my-4">
                    <button className="btn btn-success"> &#8592; Previous Card</button>
                    <button className="btn btn-success">Next Card &#8594;</button>
                </div>
            </div>
        </form>
        
        
    </div>
</main>
}