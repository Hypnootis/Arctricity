import { initializeApp } from "firebase/app";
import { getFirestore, getDocs, doc, collection, query, where } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDGnSle1ZEp6p-qp74ksFFYzGfh9g_Ouzo",
    authDomain: "springproject2023.firebaseapp.com",
    projectId: "springproject2023",
    storageBucket: "springproject2023.appspot.com",
    messagingSenderId: "594280156857",
    appId: "1:594280156857:web:02254e064aa1083ae21568",
}

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

/*
const docRef = doc(db, "Data", "2023_01_19_185851");
const docSnap = await getDoc(docRef);

if (docSnap.exists()) {
    console.log("Document data:", docSnap.data());
} else {
    console.log("No such document!");
}

*/

const docsRef = collection(db, "Data");

const q = query(docsRef, where("time", "==", "Wed Mar 01 2023 12:18:49 GMT+0200 (GMT+02:00)"));

const querySnapshot = await getDocs(q);
querySnapshot.forEach((doc) => {
    console.log(doc.id, " => ", doc.data());
});