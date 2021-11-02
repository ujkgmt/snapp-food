import React from 'react';
import { render } from 'react-dom'

import App from "./App"


// import { initializeApp } from "firebase/app";
// const firebaseConfig = {
//   apiKey: "AIzaSyDgferxTSQfMsY6E9A_T8IHJ12fZYa8TvA",
//   authDomain: "snapp-food-e8aac.firebaseapp.com",
//   projectId: "snapp-food-e8aac",
//   storageBucket: "snapp-food-e8aac.appspot.com",
//   messagingSenderId: "302924554422",
//   appId: "1:302924554422:web:e972de9d52ae653750c617"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);



render(<App/>, document.getElementById("root"))