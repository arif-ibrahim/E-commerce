import firebase from 'firebase/app';
import 'firebase/firestore';

const firestore = firebase.firestore();

firestore.collection('users').doc('O4LFRazCveJDggZCXRuT').collection('cartItems').doc('KJIAJiHZ0iJBHKUKL3zB');
firestore.doc('/users/O4LFRazCveJDggZCXRuT/cartItems/KJIAJiHZ0iJBHKUKL3zB');
firestore.collection('/users/O4LFRazCveJDggZCXRuT/cartItems');