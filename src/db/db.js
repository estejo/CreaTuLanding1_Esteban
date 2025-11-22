
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyD1qYxOGlDdksiIo4eBBMDszPDuU9nodCI",
    authDomain: "ecommerce-lib-2025.firebaseapp.com",
    projectId: "ecommerce-lib-2025",
    storageBucket: "ecommerce-lib-2025.firebasestorage.app",
    messagingSenderId: "176441741549",
    appId: "1:176441741549:web:d9fb71ee68c2744c477ce4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore();

