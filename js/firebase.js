import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";


const firebaseConfig = {
  apiKey: "AIzaSyAXMI_KbcydHDdaPkQKoBjmlJSeh2n9Dtw",
  authDomain: "blogging-app-f2221.firebaseapp.com",
  projectId: "blogging-app-f2221",
  storageBucket: "blogging-app-f2221.firebasestorage.app",
  messagingSenderId: "227421805786",
  appId: "1:227421805786:web:afe6afd2d79f58673e59e3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export services
export const auth = getAuth(app);
export const db = getFirestore(app);