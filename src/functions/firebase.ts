import { initializeApp } from "firebase/app";
import { getStorage } from 'firebase/storage';

const firebaseConfig = {

    apiKey: "AIzaSyCfwT5I0g2j2rYMutymZU5jePvAQfwtpS8",

    authDomain: "boxinclubovalle.firebaseapp.com",

    projectId: "boxinclubovalle",

    storageBucket: "boxinclubovalle.appspot.com",

    messagingSenderId: "561885107088",

    appId: "1:561885107088:web:d27862309b7bc0ac611915",

    measurementId: "G-00FE6R4ZR4"


};
const app = initializeApp(firebaseConfig);
const storage = getStorage(app)
export default storage