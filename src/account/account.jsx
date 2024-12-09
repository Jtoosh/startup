import React from "react";
import "./account.css";

export function Account(props) {
    const [currentUser, setCurrentUser] = React.useState(JSON.parse(localStorage.getItem("userObject")));
//   const returnComp = props.editing === false ? <main>
//     <h1 className="text-center">Account Info</h1>
//     <div className="container-fluid"> 
//         <div className="profile-pic ">
//             <span>Profile Picture:</span>
//             <img src="public/book-icon.png" alt=""/>
//         </div>
//         <div>
//             <p className="my-4">Username: {currentUser.username.split('@')[0]} </p>
//             <p className="my-4">Email: {currentUser.username} </p>
//         </div>
    
//         <div className="my-4 container-fluid">
//             Study Stats:
//             <ul>
//                 <li>Total Decks: {currentUser.decks.length}</li>
//             </ul>
//         </div>    
//         <button className="btn btn-primary" type="button" name="edit_account" onClick={() =>{props.setter(!props.editing)}}>Edit Account</button>
//     </div>
//   </main> : <main>
//     <h1 className="text-center">Edit Account</h1>
//     <div className="container-fluid"> 
//         <div className="profile-pic ">
//             <span>Profile Picture:</span>
//             <img src="public/book-icon.png" alt=""/>
//         </div>
//         <div>
//             <p className="my-4">Username: {currentUser.username.split('@')[0]} </p>
//             <p className="my-4">Email: {currentUser.username} </p>
//         </div>
    
//         <div className="my-4 container-fluid">
//             Study Stats:
//             <ul>
//                 <li>Total Decks: {currentUser.decks.length}</li>
//             </ul>
//         </div>    
//         <button className="btn btn-primary" type="button" name="edit_account" onClick={() =>{props.setter(!props.editing)}}>Save Changes</button>
//     </div>
//   </main>
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
      {/* This editing functionality is proving challenging right now, so I'll just leave it for later. */}
      {/* <button className="btn btn-primary" type="button" name="edit_account" onClick={() =>{props.setter(!props.editing)}}>Edit Account</button> */}
  </div>
</main>;
}
