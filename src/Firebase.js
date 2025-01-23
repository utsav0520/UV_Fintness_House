// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore} from 'firebase/firestore'
import { getAuth, GoogleAuthProvider} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD6P7vsGf4xUrUljDvXSskXgAMlMXlHNJw",
  authDomain: "exuberance2k25.firebaseapp.com",
  projectId: "exuberance2k25",
  storageBucket: "exuberance2k25.firebasestorage.app",
  messagingSenderId: "1056961634360",
  appId: "1:1056961634360:web:a95f78c33eceb4dcfec6cd",
  measurementId: "G-DT42GNEN25"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app)
export const provider = new GoogleAuthProvider(app);
export const db = getFirestore(app);