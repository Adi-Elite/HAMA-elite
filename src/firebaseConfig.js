import firebase from 'firebase'
import 'firebase/auth'
import 'firebase/app'

 export const  firebaseConfig = {
    apiKey: process.env.REACT_API_KEY,
    authDomain: process.env.REACT_AUTHDOMAIN,
    projectId: process.env.REACT_PROJECT_ID,
    storageBucket: process.env.REACT_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_MESSAGINGSENDER_ID,
    appId: process.env.REACT_APPID,
    measurementId: process.env.REACT_MEASUREMENT_ID
  };

 firebase.initializeApp({
  apiKey: "AIzaSyBMcLdE7Q8I8TdXn9WvNMovNs2Y9FRNj78",
  authDomain: "hotelassociationofmountabu.firebaseapp.com",
  projectId: "hotelassociationofmountabu",
  storageBucket: "hotelassociationofmountabu.appspot.com",
  messagingSenderId: "1078870082328",
  appId: "1:1078870082328:web:ea5e689f2b28ffd5d1546d",
  measurementId: "G-5SR936M2F5"
});
export const analytics = firebase.analytics();
export const auth= firebase.auth();
export const firestorage = firebase.storage();