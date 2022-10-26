import firebase from "firebase";
import 'firebase/auth';
import 'firebase/firebase';
import 'firebase/storage'


const firebaseConfig = {
    apiKey: "AIzaSyCwZHfMWnn3_Pj-dPwdmmWe8wChb6i9Rog",
    authDomain: "olx-clone-project-a9de3.firebaseapp.com",
    projectId: "olx-clone-project-a9de3",
    storageBucket: "olx-clone-project-a9de3.appspot.com",
    messagingSenderId: "360811777928",
    appId: "1:360811777928:web:ac93cee3e017ba0774f43d",
    measurementId: "G-GY5TGFLPDS"
}

export default firebase.initializeApp(firebaseConfig)