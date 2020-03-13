import firebase from 'firebase';
const config = {
  apiKey: 'AIzaSyAm7pXbfxnrzFX2qbdi-glNNX9HqTdEFjg',
  authDomain: 'digi-dopple.firebaseapp.com',
  databaseURL: 'https://digi-dopple.firebaseio.com',
  projectId: 'digi-dopple',
  storageBucket: 'digi-dopple.appspot.com',
  messagingSenderId: '645014981531',
  appId: '1:645014981531:web:acd73607bb3fc6c1e92f3e'
};
firebase.initializeApp(config);

export const googleProvider = new firebase.auth.GoogleAuthProvider();
export const firebaseAuth = firebase.auth;
export const db = firebase.firestore();
