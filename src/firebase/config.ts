import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDU-84Mpw59EvVwgK-pi4YAHDV2n83Eeoo",
  authDomain: "hybridprog-finals.firebaseapp.com",
  projectId: "hybridprog-finals",
  storageBucket: "hybridprog-finals.firebasestorage.app",
  messagingSenderId: "181267474102",
  appId: "1:181267474102:web:9f6b555d0861ef9ba62817"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
export const db = getFirestore(app);
