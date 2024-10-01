import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
const firebaseConfig = {
  apiKey: "AIzaSyDQevrEjAKa2HMJKI9zcKHz4G5ympj_Yvs",
  authDomain: "aprycot-restro.firebaseapp.com",
  projectId: "aprycot-restro",
  storageBucket: "aprycot-restro.appspot.com",
  messagingSenderId: "797649598173",
  appId: "1:797649598173:web:66f8334f14ec252c5d8d34",
  measurementId: "G-9BKKSP3YS7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

