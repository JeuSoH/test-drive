import firebase from "firebase/app";
import "firebase/auth";

const app = firebase.initializeApp({
    apiKey: "AIzaSyCt6mnv5rqXLnVoFWtZw6qDBbx6aii8Et0",
    authDomain: "hackathon-bb241.firebaseapp.com",
    databaseURL: "https://hackathon-bb241.firebaseio.com",
    projectId: "hackathon-bb241",
    storageBucket: "hackathon-bb241.appspot.com",
    messagingSenderId: "723427572597",
});

export default app;