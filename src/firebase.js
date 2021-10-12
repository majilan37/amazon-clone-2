import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'


const firebaseConfig = {
  apiKey: "AIzaSyBpEmXQ5HElISZGk3yd-BuxwJgDE5tyWdE",
  authDomain: "react-clone-f1d2c.firebaseapp.com",
  projectId: "react-clone-f1d2c",
  storageBucket: "react-clone-f1d2c.appspot.com",
  messagingSenderId: "406368904061",
  appId: "1:406368904061:web:720ae5b87b690ab7436214"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const db = getFirestore(app)

export {auth, db} 