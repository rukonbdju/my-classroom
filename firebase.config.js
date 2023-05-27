// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD49FDojXsq-f-DIosxmzsm8CmeFNyDnpM",
  authDomain: "my-classroom-bd.firebaseapp.com",
  projectId: "my-classroom-bd",
  storageBucket: "my-classroom-bd.appspot.com",
  messagingSenderId: "734815403873",
  appId: "1:734815403873:web:36d1060c95fb62a2f14f20",
  measurementId: "G-4BT9W9M4Y2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app)
const analytics = getAnalytics(app);
export default auth;