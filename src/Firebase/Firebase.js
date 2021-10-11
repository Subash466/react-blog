import * as firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyCm_LO6Dx8RilApHZ546r_TEx4JG_SoqRA",
  authDomain: "blog-website-2f016.firebaseapp.com",
  databaseURL: "https://blog-website-2f016-default-rtdb.firebaseio.com",
  projectId: "blog-website-2f016",
  storageBucket: "blog-website-2f016.appspot.com",
  messagingSenderId: "1060628970504",
  appId: "1:1060628970504:web:efb9998f7083c0d25365bd",
  measurementId: "G-SGP02W3BX7"
  };
  // Initialize Firebase
  var fireDb = firebase.initializeApp(firebaseConfig);

  export default fireDb.database().ref();