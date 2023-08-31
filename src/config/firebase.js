import { initializeApp } from "firebase/app";
import {getFirestore} from '@firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyBgYgGaKlhItSKQk7BB_hWcHUCUuEsae-o",
  authDomain: "simple-form-de512.firebaseapp.com",
  projectId: "simple-form-de512",
  storageBucket: "simple-form-de512.appspot.com",
  messagingSenderId: "1060701594352",
  appId: "1:1060701594352:web:77fd29ead4c1fe8d74d835"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore (app);