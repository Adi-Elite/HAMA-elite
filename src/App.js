import './App.css';
import'./components/SignIn.css'
import React from 'react';
import{BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import { FirestoreProvider} from "@react-firebase/firestore";
import firebase from 'firebase'

// import SignIn from './components/SignIn.js';
import {DocumentUpload} from './components/DocumentUpload.js';
import {Joinus} from './components/Joinus.js';
import {Header} from "./components/Header.js";
import {Navbar} from "./components/Navbar.js";
import {Footer} from './components/Footer.js';
import { firebaseConfig } from './firebaseConfig';

function App() {
  return (
    <div>
      <FirestoreProvider firebase={firebase} {...firebaseConfig}>        
        <Header/>
        <Navbar/>
        <DocumentUpload/>
        {/* <Joinus/> */}
        {/* <SignIn/> */}
        <Footer/>
      </FirestoreProvider>
    </div>
    </FirestoreProvider>
   
  );
}

export default App;
