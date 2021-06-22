import firebase from 'firebase/app';

import 'firebase/auth';
import 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyDtwob6JCescfG02pt6emW4ScIljOOFX6k",
    authDomain: "letmeask-f4e3f.firebaseapp.com",
    databaseURL: "https://letmeask-f4e3f-default-rtdb.firebaseio.com",
    projectId: "letmeask-f4e3f",
    storageBucket: "letmeask-f4e3f.appspot.com",
    messagingSenderId: "963131579307",
    appId: "1:963131579307:web:8823422d18943089c350ee"
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const database = firebase.database();

export { firebase, auth, database };