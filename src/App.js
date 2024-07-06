import React, { useState, useEffect, useRef } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Apple from './pages/Apple';
import Apricot from './pages/Apricot';
import Ball from './pages/Ball';
import Banana from './pages/Banana';

function App() {
  const [openA, setOpenA] = useState(false);
  const [openB, setOpenB] = useState(false);

  let menuRefA = useRef();
  let menuRefB = useRef();

  useEffect(() => {
    let handler = (e) => {
      if (menuRefA.current && !menuRefA.current.contains(e.target)) {
        setOpenA(false);
      }
      if (menuRefB.current && !menuRefB.current.contains(e.target)) {
        setOpenB(false);
      }
    };

    document.addEventListener('mousedown', handler);

    return () => {
      document.removeEventListener('mousedown', handler);
    };
  });

  return (
    <div className="App">
      <div className="header-container">
        <header className="header">
          <Link to="/" className="title">Site-name</Link>
          <nav className="nav">
            <div className="nav-item" ref={menuRefA}>
              <a onClick={() => setOpenA(!openA)}>A</a>
              <div className={`dropdown-menu ${openA ? 'active' : 'inactive'}`}>
                <ul>
                  <DropdownItem text="Apple" link="/apple" />
                  <DropdownItem text="Apricot" link="/apricot" />
                </ul>
              </div>
            </div>
            <div className="nav-item" ref={menuRefB}>
              <a onClick={() => setOpenB(!openB)}>B</a>
              <div className={`dropdown-menu ${openB ? 'active' : 'inactive'}`}>
                <ul>
                  <DropdownItem text="Ball" link="/ball" />
                  <DropdownItem text="Banana" link="/banana" />
                </ul>
              </div>
            </div>
          </nav>
        </header>
        
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/apple" element={<Apple />} />
        <Route path="/apricot" element={<Apricot />} />
        <Route path="/ball" element={<Ball />} />
        <Route path="/banana" element={<Banana />} />
      </Routes>
    </div>
  );
}

function DropdownItem({ text, link }) {
  return (
    <li className="dropdownItem">
      <Link to={link}>{text}</Link>
    </li>
  );
}

export default App;
