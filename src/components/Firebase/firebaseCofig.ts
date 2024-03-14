import * as firebase from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyC4D6xDcW3KZfsmlC5-FqA8sUeDYaepnjc",
    authDomain: "standardcharted.firebaseapp.com",
    projectId: "standardcharted",
    storageBucket: "standardcharted.appspot.com",
    messagingSenderId: "221139431476",
    appId: "1:221139431476:web:5ba80ce5b6653b9dd39a61"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
export default firebaseApp;