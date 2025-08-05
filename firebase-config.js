// firebase-config.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

// Cấu hình dự án Firebase của bạn
const firebaseConfig = {
    apiKey: "AIzaSyCgJYCKOeHmh57ro5vQ4JWJX-szldH-UeA",
    authDomain: "pdlvt-9aae7.firebaseapp.com",
    projectId: "pdlvt-9aae7",
    storageBucket: "pdlvt-9aae7.firebasestorage.app",
    messagingSenderId: "373888053638",
    appId: "1:373888053638:web:e50174ab1ab789bfe53c07",
    measurementId: "G-25P00B0M3Q"
};

// Khởi tạo Firebase và Firestore
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
