// Import the functions you need from the SDKs you need
// import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDfizUOx2c67ZeKhbSIf5Eq7DAxJ2GhazE",
  authDomain: "notam-c0a1a.firebaseapp.com",
  projectId: "notam-c0a1a",
  storageBucket: "notam-c0a1a.appspot.com",
  messagingSenderId: "217368992784",
  appId: "1:217368992784:web:f12c9aac0e4b599ba33e95"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
  let email;
  let password;
  const emailInput= document.getElementById("email")
  const passwordInput= document.getElementById("password")
  const signUpButton= document.getElementById("SignUp")

  emailInput.addEventListener("change",handleEmailChange);
  passwordInput.addEventListener("change",handlePasswordchange)
  signUpButton.addEventListener("click",handleSignUp)

  function handleEmailChange (e){
      e.preventDefault()
          email=e.target.value

      }
  function handlePasswordchange(e){
  e.preventDefault()
  password=e.target.value
  }
function handleLogin (e){
  e.preventDefault()
  loginUser(email,password);
  console.log(email,password)
}
function handleSignUp (e){
  e.preventDefault()
  signUpWithEmailPassword(email,password);
}



// Protect sensitive routes
firebase.auth().onAuthStateChanged((user) => {
if (user) {
  // User is signed in
  // Allow access to protected routes
} else {
  // User is signed out
  // Redirect to login page
}
});
// Signup function
function signUpWithEmailPassword(email, password) {
 firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // User account created successfully
      const user = userCredential.user;
      console.log(`User account created successfully: ${user.email}`);
      window.location.href = "./login.html"
      // You can redirect the user to another page or perform any other action here
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error(`Error creating user account: ${errorCode} ${errorMessage}`);
      // Handle error
    });
}
 
