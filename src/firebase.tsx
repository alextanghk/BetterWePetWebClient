import firebase from "firebase";

const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_PROJECT_ID+".firebaseapp.com",
    databaseURL: process.env.REACT_APP_FIREBASE_PROJECT_ID+".firebaseio.com",
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_PROJECT_ID+".appspot.com",
    messagingSenderId: process.env.REACT_APP_FIREBASE_SENDER,
    appId: process.env.REACT_APP_FIREBASE_APP_ID,
    measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT
  };

const app = firebase.apps.length > 0 ? firebase.apps[0] : firebase.initializeApp(firebaseConfig);

export default app;