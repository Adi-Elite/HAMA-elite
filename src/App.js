import './App.css';
import'./components/SignIn.css'
import React from 'react';
import{BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import SignIn from './components/SignIn.js';
import {Header} from "./components/Header.js";
import {Navbar} from "./components/Navbar.js";
import {Footer} from './components/Footer.js';

function App() {
  return (
    <div>
        <Header/>
        <Navbar/>
         <SignIn/>
        <Footer/>
    </div>
  );
}

export default App;