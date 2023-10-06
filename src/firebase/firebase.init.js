// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_APIKEY,
  authDomain: import.meta.env.VITE_AUTHDOMAIN,
  projectId: import.meta.env.VITE_PROJECTID,
  storageBucket: import.meta.env.VITE_STORAGEBUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGINGSENDERID,
  appId: import.meta.env.VITE_APPID
};
// console.log('inside',import.meta.env.VITE_APIKEY);

// const firebaseConfig = {
//   apiKey: "AIzaSyDwqZ_l6t1Sen4KWMXkqj8g4He7muxZQh0",
//   authDomain: "react-travel-web-253ef.firebaseapp.com",
//   projectId: "react-travel-web-253ef",
//   storageBucket: "react-travel-web-253ef.appspot.com",
//   messagingSenderId: "987612685414",
//   appId: "1:987612685414:web:b6245ff5db2b61a0ba39a7"
// };
// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
