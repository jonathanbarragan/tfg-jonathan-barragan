// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAjIfJlWQqfQqmX7cdsw9iNbnPHDrbQBjw",
  authDomain: "tfg-jonathan.firebaseapp.com",
  projectId: "tfg-jonathan",
  storageBucket: "tfg-jonathan.appspot.com",
  messagingSenderId: "594523978989",
  appId: "1:594523978989:web:2d9a59d72c95302d59a0e4",
  measurementId: "G-TWY2B57NZP"
};

// Initialize Firebase
const appFirebase = initializeApp(firebaseConfig);
const analytics = getAnalytics(appFirebase);

export default appFirebase;
