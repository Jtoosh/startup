import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./app.css";
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import { Study } from './study/study';
import { Account } from  './account/account';
import { About } from './about/about';
import { Home } from './home/home';

export default function App() {
  return (
    <BrowserRouter>
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
                    <NavLink to='' className='nav-link'>Home</NavLink>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="./study.html" className="nav-link">
                    <NavLink className='nav-link' to='study'>Study</NavLink>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="./account.html" className="nav-link">
                    <NavLink className='nav-link' to='account'>Account</NavLink>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="./about.html" className="nav-link">
                    <NavLink className='nav-link' to='about'>About</NavLink>
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

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/study" element={<Study />} />
        <Route path="/account" element={<Account />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
        {/* Not Found component still needs to be implemented */}
      </Routes> 


        <footer className="container-fluid bg-secondary fixed-bottom">
          <div className="text-center">
            <span>James Teuscher, 2024</span>
            <form action="https://github.com/Jtoosh/startup.git">
              <button className="btn btn-primary">Mnemonic Study GitHub</button>
            </form>
          </div>
        </footer>
      </div>
    </BrowserRouter>
  );
}

function NotFound() {
  return <main className='container-fluid bg-secondary text-center'><h2>Error 404: Return to sender. Address unknown.</h2></main>;
}
