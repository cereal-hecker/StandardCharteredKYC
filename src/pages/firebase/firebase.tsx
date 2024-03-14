import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import serviceAccount from "./serviceAccount.json"

const app = initializeApp(serviceAccount);
const auth = getAuth(app)



export { app, auth };