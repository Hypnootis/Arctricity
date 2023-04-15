import { initializeApp } from "firebase/app";
import { getFirestore, getDocs, getDoc, getDocFromServer, collection, query, where, limit, doc } from "firebase/firestore";

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
// TODO: Create function to query for a specified time range
let timeframe = "Apr 01 2023 17:"; // Query string

/*
function weekdayName(day, month) {
    let baseDate = new Date(Date.UTC(2023, month, day));
    return baseDate.toLocaleDateString("en-US", {weekday: "short"});
}

function formatTime(day, month, hour) {
    let date = new Date(day, month, hour);
    return date; 
}
*/

//console.log(formatTime(1, 4, 12));

async function getDocument(db, id) {
    const snap = await getDocFromServer(doc(db, "Data", id));
    if (snap.exists()) {
        console.log("Document data: ", snap.data());
    } else {
        return Promise.reject(Error("No such document: Data.${id}"));
    }
}
getDocument(db, "2023_04_12_18" + '\uf8ff');


/*

const docsRef = collection(db, "Data");
 // Time-range query
const q = query(docsRef, where("time", ">=", timeframe),
    where("time", "<=", timeframe + '\uf8ff'), limit(9));

const querySnapshot = await getDocs(q);
querySnapshot.forEach((doc) => {
    console.log(doc.id, " => ", doc.data());
});
/*
// Single doc query
/*
const q = query(docsRef, where("time", "==", "Wed Mar 01 2023 12:09:47 GMT+0200 (GMT+02:00)"), limit(1));
let docs = [];

try {
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach(doc => {
    docs.push(doc.data());
    });
    console.log(docs);
}
catch(error) {
    console.log(error);
}
*/