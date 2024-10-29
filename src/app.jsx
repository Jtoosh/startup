import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./app.css";

export default function App() {
  return (
    <div className="App">
      <header>
        <nav className="navbar bg-info sticky-top">
          <div className="container-fluid">
            <ul className="nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a
                  href="index.html"
                  className="nav-link active"
                  aria-current="true"
                >
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a href="./study.html" className="nav-link">
                  Study
                </a>
              </li>
              <li className="nav-item">
                <a href="./account.html" className="nav-link">
                  Account
                </a>
              </li>
              <li className="nav-item">
                <a href="./about.html" className="nav-link">
                  About
                </a>
              </li>
            </ul>
            {/* <!--These buttons will be made conditional so that one or the other appears, but not both, depending on authentication--> */}

            <button type="submit" name="Login" className="btn btn-primary mr-1">
              Login
            </button>
            <button
              type="submit"
              name="Logout"
              className="btn btn-secondary m-2"
            >
              Logout
            </button>
            <span>
              Account Name with <i className="bi bi-person fs-1"></i>
            </span>
          </div>
        </nav>
      </header>

      <main> App content goes here </main>

      <footer className="container-fluid bg-secondary fixed-bottom">
        <div className="text-center">
          <span>James Teuscher, 2024</span>

          <form action="https://github.com/Jtoosh/startup.git">
            <button className="btn btn-primary">Mnemonic Study GitHub</button>
          </form>
        </div>
      </footer>
    </div>
  );
}
