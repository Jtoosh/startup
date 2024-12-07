import React from "react";
import "./account.css";

export function Account() {
    const [currentUser, setCurrentUser] = React.useState(JSON.parse(localStorage.getItem("userObject")));


  return <main>
  <h1 className="text-center">Account Info</h1>
  <div className="container-fluid"> 
      <div className="profile-pic ">
          <span>Profile Picture:</span>
          <img src="public/book-icon.png" alt=""/>
      </div>
      <div>
          <p className="my-4">Username: {currentUser.username.split('@')[0]} </p>
          <p className="my-4">Email: {currentUser.username} </p>
      </div>
  
      <div className="my-4 container-fluid">
          Study Stats:
          <ul>
            <li>Total Decks: {currentUser.decks.length}</li>
          </ul>
      </div>    
      <button className="btn btn-primary" type="submit" name="edit_account">Edit Account</button>
  </div>
</main>
}
