




  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyAmYyWUsr-061kUSm1ZSggwf4d4o6MyquY",
    authDomain: "dayatva-login.firebaseapp.com",
    databaseURL: "https://dayatva-login.firebaseio.com",
    projectId: "dayatva-login",
    storageBucket: "dayatva-login.appspot.com",
    messagingSenderId: "1044929614132",
    appId: "1:1044929614132:web:ee0acfe735f037f9539561",
    measurementId: "G-84P4XZ94D7"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  const auth = firebase.auth();



  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      // User is signed in.
      
    } else {
      // No user is signed in.
      
    }
  });

  function login(){
    var email = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // ...
      location.replace("https://www.w3schools.com")
      // ...
      window.alert("Error :" + errorMessage)
    });
    }