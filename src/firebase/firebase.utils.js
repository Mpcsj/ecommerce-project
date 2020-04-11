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

export const createUserProfileDocument = async(userAuth,addionalData)=>{
  if(!userAuth)return;

  const userRef = firestore.doc(`users/${userAuth.uid}`)
  const snapShot = await userRef.get()
  // console.log("teste: ",snapShot)
  if(!snapShot.exists){
    // insert on db
    const {displayName,email} = userAuth
    const createdAt = new Date()
    try{
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...addionalData
      })
    }catch(err){
      console.log('Error creating user: ',err.message)
    }
  }
  return userRef
}
firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()


const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({'prompt':'select_account'})
export const signInWithGoogle = ()=>auth.signInWithPopup(provider)


export default firebase