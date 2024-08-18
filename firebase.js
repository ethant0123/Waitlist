// firebase.js
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCmH0wfB6B9WHFPlyB9j3plSef7-dvobk4",
  authDomain: "waitlistsyncup.firebaseapp.com",
  projectId: "waitlistsyncup",
  storageBucket: "waitlistsyncup.appspot.com",
  messagingSenderId: "157669903338",
  appId: "1:157669903338:web:ee810a9564aba5056f8093",
  measurementId: "G-1JRGH3HLMW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

export { firestore, collection, addDoc };