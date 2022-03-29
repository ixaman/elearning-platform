import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebasae.config";

const initializeAuthentication = () => {
    initializeApp(firebaseConfig);
}

export default initializeAuthentication;