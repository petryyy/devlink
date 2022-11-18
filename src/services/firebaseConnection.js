import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'


const firebaseConfig = {
  apiKey: "AIzaSyBIcQWuN1xIKZPv-IcMMpUwxuISPCE7OH4",
  authDomain: "devlinks-146f6.firebaseapp.com",
  projectId: "devlinks-146f6",
  storageBucket: "devlinks-146f6.appspot.com",
  messagingSenderId: "812175096557",
  appId: "1:812175096557:web:4b71bf1524fd622004eae4",
  measurementId: "G-PV0FBDLZ30"
};

const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);

export {db, auth};