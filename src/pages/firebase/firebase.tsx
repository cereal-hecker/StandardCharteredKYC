import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const serviceAccount={
    apiKey: import.meta.env.VITE_APIKEY,
    authDomain: import.meta.env.VITE_AUTHDOMAIN,
    projectId: import.meta.env.VITE_PROJECTID,
    storageBucket: import.meta.env.VITE_STORAGEBUCKET,
    messagingSenderId: import.meta.env.VITE_MESSAGINGSENDERID,
    appId: import.meta.env.VITE_APPID
  };

const app = initializeApp(serviceAccount);
const auth = getAuth(app)

export { app, auth };