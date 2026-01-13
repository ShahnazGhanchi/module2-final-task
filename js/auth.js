





import { auth } from "./firebase.js";
import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

// Button Click Event
document.getElementById('submitLoginBtn').addEventListener('click', (e) => {
    e.preventDefault(); // Form refresh hone se roknay ke liye

    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;

    console.log("Attempting login for:", email);

    // SAHI SYNTAX (v10 modular)
    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            console.log("Success! Logged in as:", user.email);
            alert("Welcome Back!");
            
            // Modal band karein
            const modal = bootstrap.Modal.getInstance(document.getElementById('loginModal'));
            modal.hide();
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.error("Login Failed:", errorCode, errorMessage);
            
            // Helpful alerts
            if (errorCode === 'auth/invalid-credential') {
                alert("Wrong email or password.");
            } else {
                alert(errorMessage);
            }
        });
});