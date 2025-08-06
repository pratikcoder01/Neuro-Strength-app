// firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCJQOapzn3LB2SAbXK9JC53LkuluIMFKbs",
  authDomain: "neuro-strength.firebaseapp.com",
  projectId: "neuro-strength",
  storageBucket: "neuro-strength.firebasestorage.app",
  messagingSenderId: "476744172227",
  appId: "1:476744172227:web:776e3d7ec982e787471876",
  measurementId: "G-3W000Y6Z58"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const analytics = getAnalytics(app);

export { auth };
