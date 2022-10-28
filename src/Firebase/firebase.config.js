console.log(process.env);
const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID,
    measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID
    // apiKey: "AIzaSyANzh_DMcQyuiwzTWq5NciihyJEMajDGOw",
    // authDomain: "food-delivery-login-15fa8.firebaseapp.com",
    // projectId: "food-delivery-login-15fa8",
    // storageBucket: "food-delivery-login-15fa8.appspot.com",
    // messagingSenderId: "198618936157",
    // appId: "1:198618936157:web:e83df2416f493b29512eb4",
    // measurementId: "G-VRY0VB1J1S"
};

export default firebaseConfig;