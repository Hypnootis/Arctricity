import { initializeApp, cert } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";
import { readFileSync } from "fs";

// eslint still doesn't support importing JSON >:(, so this workaround is necessary
const fileURL = new URL("./ServiceAccountKey.json", import.meta.url);
const firebaseConfig = JSON.parse(readFileSync(fileURL));

// Note! This code requires a service account key!
// One can be gotten in Project Settings -> Service accounts -> Generate new private key
// Then save the config to this same folder as "ServiceAccountKey.json"

initializeApp({
    credential: cert(firebaseConfig),
    databaseURL: "https://springproject2023.firebaseio.com"
});

const db = getFirestore();

async function queryDatabase(month, day, hour, minute) {
    // "arguments" is an array-like object of all the arguments,
    // But doesn't actually support functions like .map() ;(
    const date = [...arguments];
    
        // The query needs trailing zeroes, and since
        // The function mainly accepts ints to make it easier to loop,
        // This requires a quick adjustment    
    const converted_date = date.map((item) => {
        if (item < 10) {
            return `0${item}`;
        } return item.toString();
    });

    const timeframe = `2023_${converted_date[0]}_${converted_date[1]}_${converted_date[2]}${converted_date[3]}`;
    const query = db.collection("Data")
    .where("__name__", ">=", timeframe)
    .where("__name__", "<=", timeframe + '\uf8ff')
    .limit(1);
    // The magic char here matches all characters that come after it
    // Necessary since we can't really predict the seconds in the doc ID

    const doc = await query.get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            return doc;
        });
    });
}

export { queryDatabase };