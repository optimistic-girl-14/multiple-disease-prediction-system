import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyBPbPesW6Z2CdZIfwWXh7jEkHzCJ3PW8ms",
    authDomain: "disease-ebdb1.firebaseapp.com",
    projectId: "disease-ebdb1",
    storageBucket: "disease-ebdb1.appspot.com",
    messagingSenderId: "13510016774",
    appId: "1:13510016774:web:1476caebf5ea8c1aaba887"
  };

 export const app = initializeApp(firebaseConfig);