import React from "react";
import "./account.css";

export function Account() {
  return <main>
  <h1 className="text-center">Account Info</h1>
  <div className="container-fluid"> 
      <div className="profile-pic ">
          <span>Profile Picture:</span>
          <img src="assets/img/book-icon.png" alt=""/>
      </div>
      <div>
          <p className="my-4">Username: </p>
          <p className="my-4">Email:</p>
          <p className="my-4">Name:</p>
          <p className="my-4">Member since:</p>
      </div>
  
      <div className="my-4 container-fluid">
          Study Stats:
          <strong>This is where database data will go.</strong>
          <table className="table table-hover table-bordered">
              <thead>
                  <tr>
                      <th>Username</th>
                      <th>Total decks saved</th>
                      <th>Decks completed</th>
                      <th>Decks created</th>
                      <th>Total quizzes saved</th>
                      <th>Quizzes completed</th>
                      <th>Quizzes created</th>
                  </tr>
              </thead>
              <tbody>
                  <tr>
                      <td>Skadoosh</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                  </tr>
                  <tr>
                      <td>Skadoosh friend</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                  </tr>
              </tbody>
          </table>
      </div>    
      <button className="btn btn-primary" type="submit" name="edit_account">Edit Account</button>
  </div>
</main>
}
