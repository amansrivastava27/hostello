// app/lib/firebaseConfig.ts
import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCZ-5gw_U-T0qPhKpDaYeo6gsdvooJdxnA",
    authDomain: "hostello-4545d.firebaseapp.com",
    projectId: "hostello-4545d",
    storageBucket: "hostello-4545d.firebasestorage.app",
    messagingSenderId: "1037297456409",
    appId: "1:1037297456409:web:b76b5fd70c8be0bb09e188",
    measurementId: "G-N3L1X67HMB"
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);
export default app;
