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
    const loginButton= document.getElementById("Login")
    
  
    emailInput.addEventListener("change",handleEmailChange);
    passwordInput.addEventListener("change",handlePasswordchange)
    loginButton.addEventListener("click",handleLogin)
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

  }
  
  
  // Add login logic
  function loginUser(email, password) {
  firebase.auth().signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Signed in
      var user = userCredential.user;
      console.log(user)
      // Redirect to dashboard or home page
      window.location.href = "../main.html";
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      // Handle error
    });
  }
 
  // Add logout logic
  function logoutUser() {
  firebase.auth().signOut()
    .then(() => {
      // Sign-out successful
      // Redirect to login page
    })
    .catch((error) => {
      // Handle error
    });
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
 // const ui = new firebaseui.auth.AuthUI(firebase.auth());

// ui.start('#firebaseui-auth-container', {
//   signInSuccessUrl: 'main.html', // Redirect to the main page on successful login
//   signInOptions: [
//     // Add the sign-in providers that you want to support, e.g. Google, Facebook, etc.
//     firebase.auth.GoogleAuthProvider.PROVIDER_ID,
//     firebase.auth.EmailAuthProvider.PROVIDER_ID
//   ],
//   // Additional configuration options go here
// });
