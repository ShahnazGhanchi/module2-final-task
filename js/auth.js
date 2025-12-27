

// Firebase SDK imports
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


import { auth } from "./firebase.js";
import { 
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
  signOut,
  GoogleAuthProvider,
  signInWithPopup
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

// singuppp
const signupForm = document.getElementById("signupForm");
if (signupForm) {
  signupForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      alert(`Account created successfully! Welcome ${name}`);
      // Optionally, redirect to dashboard
      window.location.href = "dashboard.html";
    } catch (error) {
      alert(error.message);
    }
  });
}
// login form
const loginForm = document.getElementById("loginForm");
if (loginForm) {
  loginForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;

    try {
      await signInWithEmailAndPassword(auth, email, password);
      alert("Login successful ✅");
      window.location.href = "dashboard.html";
    } catch (error) {
      alert(error.message);
    }
  });
}
// //google login
const googleLoginBtn = document.getElementById("googleLogin");
if (googleLoginBtn) {
  googleLoginBtn.addEventListener("click", async () => {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
      alert("Login with Google successful ✅");
      window.location.href = "dashboard.html";
    } catch (error) {
      alert(error.message);
    }
  });
}
// forgot 
const forgotForm = document.getElementById("forgotForm");
if (forgotForm) {
  forgotForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const email = document.getElementById("email").value.trim();

    try {
      await sendPasswordResetEmail(auth, email);
      alert("Password reset email sent ✅");
      window.location.href = "login.html";
    } catch (error) {
      alert(error.message);
    }
  });
}
//  log out---------------------------
const logoutBtn = document.getElementById("logoutBtn");
if (logoutBtn) {
  logoutBtn.addEventListener("click", async () => {
    try {
      await signOut(auth);
      alert("Logged out successfully ✅");
      window.location.href = "login.html";
    } catch (error) {
      alert(error.message);
    }
  });
}
// gooogle utton
