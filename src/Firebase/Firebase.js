import * as firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyAkdayOMSAiQCDOiz7FwGLSvvF3St5vb4A",
  authDomain: "react-blog-8f10e.firebaseapp.com",
  databaseURL: "https://react-blog-8f10e-default-rtdb.firebaseio.com",
  projectId: "react-blog-8f10e",
  storageBucket: "react-blog-8f10e.appspot.com",
  messagingSenderId: "73339943549",
  appId: "1:73339943549:web:274a8d895a5aa27c0c8f14",
  measurementId: "G-M29PE8R8BY"
  };
  // Initialize Firebase
  var fireDb = firebase.initializeApp(firebaseConfig);

  export default fireDb.database().ref();