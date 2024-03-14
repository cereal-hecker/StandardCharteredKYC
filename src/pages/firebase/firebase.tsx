import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const serviceAccount={
    apiKey: "AIzaSyC4D6xDcW3KZfsmlC5-FqA8sUeDYaepnjc",
    authDomain: "standardcharted.firebaseapp.com",
    projectId: "standardcharted",
    storageBucket: "standardcharted.appspot.com",
    messagingSenderId: "221139431476",
    appId: "1:221139431476:web:5ba80ce5b6653b9dd39a61"
  };

const app = initializeApp(serviceAccount);
const auth = getAuth(app)

export { app, auth };