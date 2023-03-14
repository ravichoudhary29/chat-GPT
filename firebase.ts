import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAQlbf55TJw7tt4wlerMmN0AbQDwFLn20g",
  authDomain: "chatgpt-messenger-yt-92882.firebaseapp.com",
  projectId: "chatgpt-messenger-yt-92882",
  storageBucket: "chatgpt-messenger-yt-92882.appspot.com",
  messagingSenderId: "212277301828",
  appId: "1:212277301828:web:7b46cb2fdfe6dfc53f2211",
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
