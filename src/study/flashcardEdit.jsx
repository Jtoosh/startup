import React from "react";
import "./study.css";
import { NavLink } from "react-router-dom";
import { Card, Deck } from "./flashcard.jsx"

function getDeck(deckName){
    // let currentDeck = localStorage.getItem(deckName)
    // let deck = JSON.parse(currentDeck)
    // return deck
}

export function FlashcardEdit() {
    let card1 = new Card("James", "Just a guy trying to learn react", "Just trying -> James")
    let deckEditing = new Deck("Test Deck",[card1] )

    function handleSubmit(e){
        e.preventDefault();
        
        const form = e.target;
        const formData = new FormData(form);

        const formObject = Object.fromEntries(formData.entries());
        
        card1.termName = formObject.termName
        card1.termDef = formObject.termDef
        card1.semantic = formObject.semantic

        localStorage.setItem(deckEditing.name, JSON.stringify(deckEditing))
        console.log(deckEditing);

        // let cardIndex = deckEditing.cards.indexOf(card1)
        // deckEditing.cards[cardIndex] = card1
        
    }
    function flipAnimation(){
        let flashcard = document.querySelector(".flashcard");
        flashcard.classList.toggle("flipped");
    
    }
  return <main>
    <h1 className = "text-center">"Deck Name"</h1>
    <NavLink to="../study" className="btn btn-primary">&#8592; Back to Study</NavLink>

    <div className="container-fluid d-flex row justify-content-center"> 
        <form onSubmit={handleSubmit} className="container-fluid d-flex row justify-content-center">
            <div className=" flashcard card text-center my-4 flashcard">
                <div className="flashcard-inner">
                    <div className="flashcard-front my-4">
                        Front of flashcard field
                        <input type="text" required= "true"  name="termName" id="termName"  placeholder={deckEditing.cards[0].termName}/>
            
                        <input type="text" required = "true" name="semantic" id="semantic" placeholder={deckEditing.cards[0].semantic} className="my-4"/>
                        <button onClick={flipAnimation} className="btn btn-secondary">Flip</button>
                    </div>
                    <div className="flashcard-back my-4">
                        Back of flashcard field
                        <input type="textarea" required = "true" name= "termDef" id= "termDef" placeholder={deckEditing.cards[0].termDef}/>
                        <button onClick={flipAnimation} className="btn btn-secondary">Flip</button>
                    </div>
                </div>
            </div>
            <div>
                <div className="buttons d-flex column justify-content-center">
                    <button className="btn btn-warning">Need ideas? <strong>This will use a 3rd party API to generate ideas/mnemonics</strong></button>
                    <button  type="submit" to="../study/flashcard" className="btn btn-primary" >Save Changes</button>
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