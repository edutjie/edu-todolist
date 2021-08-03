import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCrvMlC7XMDQ4zKTzxrfilcRrSBig_DdVs",
  authDomain: "todo-list-c2ca2.firebaseapp.com",
  databaseURL:
    "https://todo-list-c2ca2-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "todo-list-c2ca2",
  storageBucket: "todo-list-c2ca2.appspot.com",
  messagingSenderId: "967581609608",
  appId: "1:967581609608:web:3968997155b7791109793d",
});

const db = firebaseApp.firestore();

export default db;