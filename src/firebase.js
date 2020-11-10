import firebase from "firebase"
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBZAA08mByubtI1D4CUoZThJNELum9YrnE",
    authDomain: "heatmann-58b1b.firebaseapp.com",
    databaseURL: "https://heatmann-58b1b.firebaseio.com",
    projectId: "heatmann-58b1b",
    storageBucket: "heatmann-58b1b.appspot.com",
    messagingSenderId: "186954442268",
    appId: "1:186954442268:web:8ef2e2edbacabfa2d861d9",
    measurementId: "G-255NS2EL0F"
  };
  firebase.initializeApp(firebaseConfig);

  export const firestore = firebase.firestore();
  export default firebase;