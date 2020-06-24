import firebase from 'firebase/app';
import 'firebase/firestore';

var firebaseConfig = {
    apiKey: "AIzaSyB4nGL5ZgUkEw4p2rlBBPd8WXCvgGm7aJA",
    authDomain: "borntoubibhack.firebaseapp.com",
    databaseURL: "https://borntoubibhack.firebaseio.com",
    projectId: "borntoubibhack",
    storageBucket: "borntoubibhack.appspot.com",
    messagingSenderId: "888278817126",
    appId: "1:888278817126:web:357bd7463975204a0890a7"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

export default firebase;