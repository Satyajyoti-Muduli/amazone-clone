// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyBPttjEBAAvKoAYvUjgF_M7STFmaGiAkgU",
    authDomain: "e-challenge-96d8f.firebaseapp.com",
    databaseURL: "https://e-challenge-96d8f.firebaseio.com",
    projectId: "e-challenge-96d8f",
    storageBucket: "e-challenge-96d8f.appspot.com",
    messagingSenderId: "857540728529",
    appId: "1:857540728529:web:e6709fa0418b5b07b717f0",
    measurementId: "G-C6ZB4HRN6G"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export  {db, auth};