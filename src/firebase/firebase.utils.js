import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const config = {
    apiKey: "AIzaSyD6lLXNFSwM4brVrgauo2PsAF9wEYK0-eg",
    authDomain: "e-commerce-8b3c2.firebaseapp.com",
    databaseURL: "https://e-commerce-8b3c2.firebaseio.com",
    projectId: "e-commerce-8b3c2",
    storageBucket: "e-commerce-8b3c2.appspot.com",
    messagingSenderId: "429204338772",
    appId: "1:429204338772:web:0cce837a78bfe75044d5c1",
    measurementId: "G-ZB71WTJ3ZM"
  };


export const createUserProfileDocument = async (userAuth, additionalData) => {
  if(!userAuth) return;

    const userRef = await firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if(!snapShot.exists){
      const { displayName, email } = userAuth;
      const createdAt = new Date();
      
      try {
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData
        })
      } catch (error) {
        console.log('error creating user', error.message);
        
      }
    }

    return userRef;
    
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({prompt: 'select_account'});
export const signInWithPopup = () => auth.signInWithPopup(provider);

export default firebase;
