import firebase from "firebase";
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAzfnlE3bbvE4Ci6U5volXURBEu2X89gMA",
    authDomain: "salary-ee70c.firebaseapp.com",
    projectId: "salary-ee70c",
    storageBucket: "salary-ee70c.appspot.com",
    messagingSenderId: "951992582141",
    appId: "1:951992582141:web:3ba0f5e7fb403be9676394"
  };
  
  // Initialize Firebase
  const init =firebase.initializeApp(firebaseConfig);
  export const firebaseAuthentication = init .auth();
