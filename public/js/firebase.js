// Insert this script at the bottom of the HTML, but before you use any Firebase services 

// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.1/firebase-app.js";
import {initializeAppCheck, ReCaptchaEnterpriseProvider } from "https://www.gstatic.com/firebasejs/10.5.1/firebase-app-check.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.5.1/firebase-analytics.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCGsB7Ur7uYQ798I5ZFdjjOJZsWa9Jiy0A",
    authDomain: "portfolio-e3163.firebaseapp.com",
    projectId: "portfolio-e3163",
    storageBucket: "portfolio-e3163.appspot.com",
    messagingSenderId: "692697166818",
    appId: "1:692697166818:web:5823dc544103c3ac9a7fbb",
    measurementId: "G-RR0606F1Q7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const appCheck = initializeAppCheck(app, {
    provider: new ReCaptchaEnterpriseProvider("6LcrrtIoAAAAAID8-qWF0chcOUEjOx2rY6YNYBSF"),
    isTokenAutoRefreshedEnabled: true,
});

const analytics = getAnalytics(app);
