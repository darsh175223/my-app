import React, { useState, useEffect, useRef } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Apple from './pages/Apple';
import Apricot from './pages/Apricot';
import Ball from './pages/Ball';
import Banana from './pages/Banana';
import Hashtable from './pages/Hashtable';
import Hashmap from './pages/Hashmap';
import MergeSort from './pages/MergeSort';
import BubbleSort from './pages/BubbleSort';
import RadixSort from './pages/RadixSort';
import LinearRegression from './pages/LinearRegressionPage';

function App() {
  const [openA, setOpenA] = useState(false);
  const [openB, setOpenB] = useState(false);
  const [openML, setOpenML] = useState(false);

  const menuRefA = useRef();
  const menuRefB = useRef();
  const menuRefML = useRef();

  useEffect(() => {
    const handler = (e) => {
      if (menuRefA.current && !menuRefA.current.contains(e.target)) {
        setOpenA(false);
      }
      if (menuRefB.current && !menuRefB.current.contains(e.target)) {
        setOpenB(false);
      }
      if (menuRefML.current && !menuRefML.current.contains(e.target)) {
        setOpenML(false);
      }
    };

    document.addEventListener('mousedown', handler);

    return () => {
      document.removeEventListener('mousedown', handler);
    };
  }, []);

  return (
    <div className="App">
      <div className="header-container">
        <header className="header">
          <Link to="/" className="title">visualize|DSA|</Link>
          <nav className="nav">
            <div className="nav-item" ref={menuRefA}>
              <a onClick={() => setOpenA(!openA)}>Data Structure Visualizer</a>
              <div className={`dropdown-menu ${openA ? 'active' : 'inactive'}`}>
                <ul>
                  <DropdownItem text="Linked List" link="/apple" />
                  <DropdownItem text="Binary Tree" link="/apricot" />
                  <DropdownItem text="Hashtable" link="/Hashtable" />
                  <DropdownItem text="Hashmap" link="/Hashmap" />
                </ul>
              </div>
            </div>
            <div className="nav-item" ref={menuRefB}>
              <a onClick={() => setOpenB(!openB)}>Sorting Algorithms</a>
              <div className={`dropdown-menu ${openB ? 'active' : 'inactive'}`}>
                <ul>
                  <DropdownItem text="Selection Sort" link="/ball" />
                  <DropdownItem text="Quick Sort" link="/banana" />
                  <DropdownItem text="Merge Sort" link="/MergeSort" />
                  <DropdownItem text="Bubble Sort" link="/BubbleSort" />
                  <DropdownItem text="Radix Sort" link="/RadixSort" />
                </ul>
              </div>
            </div>
            <div className="nav-item" ref={menuRefML}>
              <a onClick={() => setOpenML(!openML)}>Machine Learning Visualizer</a>
              <div className={`dropdown-menu ${openML ? 'active' : 'inactive'}`}>
                <ul>
                  <DropdownItem text="Linear Regression" link="/LinearRegression" />
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
        <Route path="/Hashtable" element={<Hashtable />} />
        <Route path="/Hashmap" element={<Hashmap />} />
        <Route path="/MergeSort" element={<MergeSort />} />
        <Route path="/BubbleSort" element={<BubbleSort />} />
        <Route path="/RadixSort" element={<RadixSort />} />
        <Route path="/LinearRegression" element={<LinearRegression />} />
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
