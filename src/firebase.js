import firebase from "firebase/app";
import "firebase/auth";
import "firebase/storage";
import "firebase/firestore";

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
    apiKey: "AIzaSyDhgEcQton2pdR22TyGyjeJu4pE7zmIpdE",
    authDomain: "fitboxx-gym.firebaseapp.com",
    projectId: "fitboxx-gym",
    storageBucket: "fitboxx-gym.appspot.com",
    messagingSenderId: "242855437154",
    appId: "1:242855437154:web:996948da2284a9b19d423b",
    measurementId: "G-3CQ5NTZKGB"
};

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const storage = firebase.storage();
const db = firebase.firestore();
export {storage,db};
