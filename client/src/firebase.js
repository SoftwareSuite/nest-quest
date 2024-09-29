// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "nest-quest-9ba85.firebaseapp.com",
  projectId: "nest-quest-9ba85",
  storageBucket: "nest-quest-9ba85.appspot.com",
  messagingSenderId: "710067670254",
  appId: "1:710067670254:web:6895b8041a7a4c11cc37ff"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);