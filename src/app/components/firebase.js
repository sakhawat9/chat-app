import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAwFc8II1LR2OmjTsLJGIiCJdEe130gc0A",
  authDomain: "chat-app-team-78.firebaseapp.com",
  databaseURL: "https://chat-app-team-78-default-rtdb.firebaseio.com",
  projectId: "chat-app-team-78",
  storageBucket: "chat-app-team-78.appspot.com",
  messagingSenderId: "1001273283066",
  appId: "1:1001273283066:web:f1947e71cb03e0887e9443",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider, db };
