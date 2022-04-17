// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCCnCkws6C4P_Qm6W-joOEcDZ_YaJFn594",
    authDomain: "art-by-mahdi-ki.firebaseapp.com",
    projectId: "art-by-mahdi-ki",
    storageBucket: "art-by-mahdi-ki.appspot.com",
    messagingSenderId: "232527961175",
    appId: "1:232527961175:web:59754cb1f72da1890c1712"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export default auth;