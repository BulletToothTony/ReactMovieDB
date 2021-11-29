// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import firebase from 'firebase';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCeO9pa2k8JkJdYfTeo7eyXIw0SUppLXgM",
  authDomain: "moviedb-9f0bb.firebaseapp.com",
  databaseURL: "https://moviedb-9f0bb-default-rtdb.firebaseio.com",
  projectId: "moviedb-9f0bb",
  storageBucket: "moviedb-9f0bb.appspot.com",
  messagingSenderId: "970512269012",
  appId: "1:970512269012:web:53490fb14508e9871d8541"
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
firebase.initializeApp(firebaseConfig);

export default firebase;