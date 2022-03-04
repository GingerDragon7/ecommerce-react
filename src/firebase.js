import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDkUNZuFTQT7o8BT5j78VrG3egZ82BgIeY",
    authDomain: "web-shopping-d8198.firebaseapp.com",
    projectId: "web-shopping-d8198",
    storageBucket: "web-shopping-d8198.appspot.com",
    messagingSenderId: "9698948380029",
    appId: "1:698948380029:web:a3fc6b7eabee3071271814",
    measurementId: "G-HKH811GX2B"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

export { db, auth };

