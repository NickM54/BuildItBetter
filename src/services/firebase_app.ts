import { initializeApp, type FirebaseOptions } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { GoogleAuthProvider } from "firebase/auth";

const firebaseConfig: FirebaseOptions = {
  apiKey: "AIzaSyAGcJHbc594f6ce56aTROY3XQojHJJLmTo",
  authDomain: "build-it-better-c97cd.firebaseapp.com",
  projectId: "build-it-better-c97cd",
  storageBucket: "build-it-better-c97cd.firebasestorage.app",
  messagingSenderId: "50216009079",
  appId: "1:50216009079:web:568aeabe9b1a9059263572",
  measurementId: "G-4381V0NDR1",
};

export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const googleAuthProvider = new GoogleAuthProvider();

export * as FirebaseAuthService from "firebase/auth";
