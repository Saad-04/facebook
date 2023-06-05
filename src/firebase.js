
import {initializeApp} from 'firebase/app';
import {getFirestore} from 'firebase/firestore'
import {getAuth,GoogleAuthProvider} from 'firebase/auth';

// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
  apiKey: "AIzaSyC5WEmeN8Rwa3W5bDdeht3UErynjIukGCQ",
  authDomain: "fir-tut-aa3d5.firebaseapp.com",
  databaseURL: "https://fir-tut-aa3d5-default-rtdb.firebaseio.com",
  projectId: "fir-tut-aa3d5",
  storageBucket: "fir-tut-aa3d5.appspot.com",
  messagingSenderId: "877111186262",
  appId: "1:877111186262:web:e05cb0065f1b16ad79fcf7"
};

const app =initializeApp(firebaseConfig)
const db = getFirestore(app);
const auth = getAuth(app);


export {auth}
export default db;
