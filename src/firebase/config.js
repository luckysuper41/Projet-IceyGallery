import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyCcNfZusEOM2n3LAEq7Phkx95WkRn-ZDRc",
  authDomain: "projet-gallery.firebaseapp.com",
  databaseURL: "https://projet-gallery.firebaseio.com",
  projectId: "projet-gallery",
  storageBucket: "projet-gallery.appspot.com",
  messagingSenderId: "351051766254",
  appId: "1:351051766254:web:f81878936ec21519dc96ff"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };