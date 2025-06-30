import React, { createContext, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./app.css";
import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom";
import { Study } from "./study/study";
import { Login } from "./login/login";
import { Account } from "./account/account";
import { About } from "./about/about";
import { Home } from "./home/home";
import { NotFound } from "./other/notFound";
import { Unauthorized } from "./other/Unauthorized";
import { Flashcard } from "./study/flashcard";
import { FlashcardEdit } from "./study/flashcardEdit";
import { Quiz } from "./study/quiz";
import { QuizEdit } from "./study/quizEdit";
import { AuthState } from "./login/authState";
import { QuizComponent } from "./study/quizComponent";

// These next 12 lines are the context and provider for the Deck component, to pass it between pages

export const DeckContext = createContext(0);

export const QuizContext = createContext(0);

// This function is the logout function that will be passed to the logout button **WORK IN PROGRESS**
// function logout() {
//   fetch(`/api/auth/logout`, {
//     method: 'delete',
//   })
//     .catch(() => {
//       // Logout failed. Assuming offline
//     })
//     .finally(() => {
//       localStorage.removeItem('userName');
//       localStorage.removeItem('userObject');
//       setAuthState(AuthState.Unauthenticated);
//       setUserName('');
//       });
// }

export default function App() {
  const [userName, setUserName] = React.useState(
    localStorage.getItem("userName") || ""
  );
  const currentAuthState = userName
    ? AuthState.Authenticated
    : AuthState.Unauthenticated;
  const [authState, setAuthState] = React.useState(currentAuthState);
  const [editingAccount, setEditingAccount] = React.useState(false);

  const [currentDeckIndex, setCurrentDeckIndex] = useState(0);
  const [currentQuizIndex, setCurrentQuizIndex] = useState(0);

  return (
    <DeckContext.Provider value={{ currentDeckIndex, setCurrentDeckIndex }}>
      <QuizContext.Provider value={{ currentQuizIndex, setCurrentQuizIndex }}>
        <BrowserRouter>
          <div className="App">
            <header>
              <nav className="navbar bg-info sticky-top">
                <div className="container-fluid">
                  <ul className="nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                      <NavLink to="home" className="nav-link">
                        Home
                      </NavLink>
                    </li>
                    {authState === AuthState.Authenticated && (
                      <li className="nav-item">
                        <NavLink className="nav-link" to="study">
                          Study
                        </NavLink>
                      </li>
                    )}
                    {authState === AuthState.Authenticated && (
                      <li className="nav-item">
                        <NavLink className="nav-link" to="account">
                          Account
                        </NavLink>
                      </li>
                    )}
                    <li className="nav-item">
                      <NavLink className="nav-link" to="about">
                        About
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink className="nav-link" to="">
                        Logout
                      </NavLink>
                    </li>
                  </ul>
                  {/* <!--These buttons will be made conditional so that one or the other appears, but not both, depending on authentication--> */}
                  {/* <button
                      type="submit"
                      name="Login"
                      className="btn btn-primary mr-1"
                    >
                      Login
                    </button> */}
                  {/* {currentAuthState === AuthState.Authenticated &&        Logout button **WORK IN PROGRESS**
                    (<NavLink className="nav-link" to="">
                      <button
                        type="submit"
                        name="Logout"
                        className="btn btn-secondary m-2"
                        onClick={logout}
                      >
                        Logout
                      </button>
                    </NavLink>)
                    } */}
                  {currentAuthState === AuthState.Authenticated && (
                    <span>
                      {userName} <i className="bi bi-person fs-1"></i>
                    </span>
                  )}
                </div>
              </nav>
            </header>
            {/* {(authState === AuthState.Authenticated) ? authenticatedRoutes : unauthenticatedRoutes} */}
            <Routes>
              <Route
                path="/"
                element={
                  <Login
                    userName={userName}
                    authState={authState}
                    onAuthChange={(userName, authState) => {
                      setAuthState(authState);
                      setUserName(userName);
                    }}
                  />
                }
              />
              <Route path="/study" element={<Study />} />
              <Route path="/home" element={<Home />} />
              <Route path="/study/flashcard" element={<Flashcard />} />
              <Route path="/study/flashcardEdit" element={<FlashcardEdit />} />
              <Route path="/study/quiz" element={<QuizComponent />} />
              <Route path="/study/quizEdit" element={<QuizEdit />} />
              <Route
                path="/account"
                element={
                  <Account
                    editing={editingAccount}
                    setter={setEditingAccount}
                  />
                }
              />
              <Route path="/about" element={<About />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
            <footer className="container-fluid bg-secondary fixed-bottom">
              <div className="text-center">
                <span>James Teuscher, 2024</span>
                <form action="https://github.com/Jtoosh/startup.git">
                  <button className="btn btn-primary">
                    Mnemonic Study GitHub
                  </button>
                </form>
              </div>
            </footer>
          </div>
        </BrowserRouter>
      </QuizContext.Provider>
    </DeckContext.Provider>
  );
}
