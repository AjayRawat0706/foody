import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
    apiKey: "AIzaSyD6u-gYlql7OVDNLua5znUUYy4c30IPbAM",
    authDomain: "foodapp-1517e.firebaseapp.com",
    databaseURL: "https://foodapp-1517e-default-rtdb.firebaseio.com",
    projectId: "foodapp-1517e",
    storageBucket: "foodapp-1517e.appspot.com",
    messagingSenderId: "734407983539",
    appId: "1:734407983539:web:32fa6b5d7286f86800cbc6"
  };

  const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);
const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, firestore, storage };