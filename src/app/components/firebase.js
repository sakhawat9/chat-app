import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDSUVBErNBLg73_XCNMlEbD6dnIZBS4fuw",
    authDomain: "chat-app-581d9.firebaseapp.com",
    projectId: "chat-app-581d9",
    storageBucket: "chat-app-581d9.appspot.com",
    messagingSenderId: "703115759976",
    appId: "1:703115759976:web:3fffce5fe3b52834ed06dd"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {auth, provider, db}