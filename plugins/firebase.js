import firebase from 'firebase'

let app = null;
  
// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyBHO1tmcOz9PiuuZZl9LVPrQLTNKnQs-XY",
  authDomain: "test-login-79e01.firebaseapp.com",
  databaseURL: "https://test-login-79e01.firebaseio.com",
  projectId: "test-login-79e01",
  storageBucket: "test-login-79e01.appspot.com",
  messagingSenderId: "11033163715",
  appId: "1:11033163715:web:239d7131f88490a80aef76"
}

app = firebase.apps.length
  ? firebase.app()
  : firebase.initializeApp(firebaseConfig)


export const db = app.database
