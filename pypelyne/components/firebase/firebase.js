import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyAYX7Pf-vc9uSvQaDXkd0vY0BCpWKI0JjA",
    authDomain: "pypelyne-31fde.firebaseapp.com",
    projectId: "pypelyne-31fde",
    storageBucket: "pypelyne-31fde.appspot.com",
    messagingSenderId: "23163432724",
    appId: "1:23163432724:web:d5012b9049f89b8cc99c01",
    measurementId: "G-LRNLGG39E7"
  };
let app = '';

if (!firebase.apps.length) {
    app = firebase.initializeApp(firebaseConfig);
}else {
    app = firebase.app();
}

const auth = app.auth();
const db = app.firestore();

export {
    auth,
    db
}