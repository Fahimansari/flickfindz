// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBxnMRnK5g4CoG4FoP_1dJV2jNV4XuYIxs",
  authDomain: "flickfindz.firebaseapp.com",
  projectId: "flickfindz",
  storageBucket: "flickfindz.appspot.com",
  messagingSenderId: "665817482787",
  appId: "1:665817482787:web:27a14963fbaab7f0365396"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);


const db = getFirestore(app)

export { db };
export const initFirebase = () =>{
    return app;
}