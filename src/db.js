import firebase from "firebase/app"
import "firebase/database"
import "firebase/auth"
import "firebase/storage"
const firebaseConfig = {
    apiKey: "AIzaSyAbZeRuVnsti5YOtpThojt4uUQU4G6BQT8",
    authDomain: "nous-chat-16022.firebaseapp.com",
    projectId: "nous-chat-16022",
    storageBucket: "nous-chat-16022.appspot.com",
    messagingSenderId: "1027413858364",
    appId: "1:1027413858364:web:03927e470ef1526e7ccb39",
    databaseURL: "https://nous-chat-16022-default-rtdb.europe-west1.firebasedatabase.app/"
};
const db = firebase.initializeApp(firebaseConfig);
export default db;