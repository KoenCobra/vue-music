import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyCPpWwJAmIRJ38pWsZfyj6jfGZd9r7b9os',
  authDomain: 'vuemusic-2f874.firebaseapp.com',
  projectId: 'vuemusic-2f874',
  storageBucket: 'vuemusic-2f874.appspot.com',
  messagingSenderId: '403580657837',
  appId: '1:403580657837:web:bf7205127e516d7dbba624'
}
firebase.initializeApp(firebaseConfig)
const auth = firebase.auth()
const db = firebase.firestore()

export { auth, db }
