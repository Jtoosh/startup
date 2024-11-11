import React from "react";
import "./home.css";
import { NavLink } from "react-router-dom";

export function Home() { 
    return <main>
        {/* <!--Title div--> */}
        <div className = "text-center" > 
            <h1>Mnemonic Study</h1>
            <h2>Welcome to deeper understanding</h2>
        </div>
        {/* <!--Main promo and motto--> */}
        <div className = ""> 
            <img src="../../books.jpg"  alt="Studying placeholder image" className = " banner" />
            <p className="text-center lead mt-4 fw-bold">"Mnemonic": a device intended to improve function of the memory.</p>
            <p className="text-center lead">Welcome to an application that will help improve your memory and understanding of what is most important to you. Utilizing psychological memory tools like semantic encoding
            and mnemonic devices, Mnemonic Study is the place where information can become understanding.</p>
        </div>
        {/* <!--Promo cards for Flashcards and Quizzes--> */}
        <div className="row d-flex justify-content-around"> 
            <div className="card ">
                <div className="card-body">
                    <h5 className="card-title bi bi-card-text "> Flashcards</h5>
                    <p className="card-text">Click below to view the flashcard sets in your library and review important info.</p>
                    <NavLink to="../study" className="btn btn-primary">View Sets</NavLink>
                </div>
            </div>

            <div className="card ">
                <div className="card-body">
                    <h5 className="card-title bi bi-pencil-square"> Quizzes</h5>
                    <p className="card-text">Click the below to view the quizzes in your library and test your knowledge.</p>
                    <NavLink to="../study" className="btn btn-primary">View Quizzes</NavLink>
                </div>
                
            </div>
        </div>
    </main>
}