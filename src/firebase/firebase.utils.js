import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyCIinM99hGSCRoQcJavgCh3CZkdacJbHDQ",
    authDomain: "ecommerce-study-reactjs.firebaseapp.com",
    databaseURL: "https://ecommerce-study-reactjs.firebaseio.com",
    projectId: "ecommerce-study-reactjs",
    storageBucket: "ecommerce-study-reactjs.appspot.com",
    messagingSenderId: "379179451150",
    appId: "1:379179451150:web:bf1f6476cee33b0b098d5f",
    measurementId: "G-TMVW48V0JQ"
  };
firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()


const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({'prompt':'select_account'})
export const signInWithGoogle = ()=>auth.signInWithPopup(provider)


export default firebase