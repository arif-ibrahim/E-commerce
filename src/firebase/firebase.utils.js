import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const config = {
    apiKey: "AIzaSyDJa3r73tM-6a43LATkiKOJJCex7Gj3y5o",
    authDomain: "ecommere-db.firebaseapp.com",
    databaseURL: "https://ecommere-db.firebaseio.com",
    projectId: "ecommere-db",
    storageBucket: "ecommere-db.appspot.com",
    messagingSenderId: "530548978594",
    appId: "1:530548978594:web:cb9f636287e1fe6fbdb8fb",
    measurementId: "G-D2RPB8J82Q"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({prompt: 'select_account'});
export const signInWithPopup = () => auth.signInWithPopup(provider);

export default firebase;
