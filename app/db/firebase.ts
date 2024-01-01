// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDknvy3pZ5d3s-bv6oJ9zJ2rR1IsXKklAs",
  authDomain: "zephotos-1160c.firebaseapp.com",
  projectId: "zephotos-1160c",
  storageBucket: "zephotos-1160c.appspot.com",
  messagingSenderId: "509173381235",
  appId: "1:509173381235:web:c2067e220e124447735206",
  measurementId: "G-7BLJ9YKFG2"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
console.log(analytics);
