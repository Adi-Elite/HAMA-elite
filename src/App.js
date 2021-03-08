import './App.css';
import'./components/SignIn.css'
import React from 'react';
import{BrowserRouter as Router,Route,Switch} from 'react-router-dom';
// import SignIn from './components/SignIn.js';
import {Header} from "./components/Header.js";
import {Navbar} from "./components/Navbar.js";
import {Footer} from './components/Footer.js';
import { Aboutus } from './components/Aboutus.js';
import {FirestoreProvider} from '@react-firebase/firestore';
import { firebaseConfig }from "./firebaseConfig.js";
import firebase from "firebase/app";
 



function App() {
  return (

    <FirestoreProvider {...firebaseConfig} firebase={firebase}>
       <div>
        <Header/>
        <Navbar/>
        <Aboutus/>
         {/* <SignIn/> */}
        <Footer/>
    </div>
    </FirestoreProvider>
   
  );
}

export default App;
