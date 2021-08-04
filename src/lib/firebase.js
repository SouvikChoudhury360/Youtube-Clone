import firebase from "firebase";

var firebaseConfig = {
    apiKey: "AIzaSyCBNWBWgErz1bnsBdtNg6WiEO_lX-Pb310",
    authDomain: "clone-5a9cb.firebaseapp.com",
    projectId: "clone-5a9cb",
    storageBucket: "clone-5a9cb.appspot.com",
    messagingSenderId: "122072439390",
    appId: "1:122072439390:web:4245ddc6477e6d9065f2cf"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const db = firebase.firestore();
export const storage = firebase.storage();

//auth.login()