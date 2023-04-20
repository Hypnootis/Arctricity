const firebaseConfig = require("./firebaseSDK.json");
const admin = require("firebase-admin");

// eslint still doesn't support importing JSON >:(, so this workaround is necessary
// const fileURL = new URL("./firebaseSDK.json", import.meta.url);
// const firebaseConfig = JSON.parse(readFileSync(fileURL));
// Note! This code requires a service account key!
// One can be gotten in Project Settings -> ourApp
// Then save the config to this same folder as "ServiceAccountKey.json"

admin.initializeApp({
    credential: admin.credential.cert(firebaseConfig),
    databaseURL: "https://springproject2023.firebaseio.com"
});

const db = admin.firestore();

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
    console.log(timeframe);
    const query = db.collection("Data")
    .where("__name__", ">=", timeframe)
    .where("__name__", "<=", timeframe + '\uf8ff').limit(1);
    // The magic char here matches all characters that come after it
    // Necessary since we can't really predict the seconds in the doc ID

    const doc = await query.get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            console.log(doc.data());
        });
    });
}

queryDatabase(1, 19, 18, 58);
