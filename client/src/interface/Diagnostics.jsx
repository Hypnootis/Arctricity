import * as React from "react";
import { ScrollView, View, Text, StyleSheet } from 'react-native';
import { DataTable } from "react-native-paper";
import { styling } from "./MyTheme";
//import firebase from 'firebase/app';
//import 'firebase/firestore';
/*
const data_file= require('./test_data.json');
const data = data_file.test;

// Initialize Firebase
/*  const firebaseConfig = {
    apiKey: "AIzaSyDGnSle1ZEp6p-qp74ksFFYzGfh9g_Ouzo",
    authDomain: "springproject2023.firebaseapp.com",
    projectId: "springproject2023",
    storageBucket: "springproject2023.appspot.com",
    messagingSenderId: "594280156857",
    appId: "1:594280156857:web:02254e064aa1083ae21568",
  }

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const docRef = db.collection('data').doc('2023_03_01_120647');

docRef.get().then((doc) => {
  if (doc.exists) {
    const data = doc.data();
    // Do something with the data
  } else {
    console.log("No such document!");
  }})
  .catch((error) => {
    console.log("Error getting document:", error);
});
*/

/*
function binaryToString(value) {
  if (value === 0) {
    return "Off";
  } else {
    return "On";
  }
};

function temperatureConversion(value) {
  decimal_value = value / 10;
  const num = parseFloat(decimal_value);
  return num.toFixed(1);
};

// Value formatting
const results = {};

// Loop through the key-value pairs in the data object
for (const [key, value] of Object.entries(data)) {
  // Check if the value is equal to 0 or 1
  if (value === 0 || value === 1) {
    // Apply your function to the value
    const result = binaryToString(value);
    
    // Store the result under a variable with the same name as the key
    results[key] = result;
  }
}
*/
/*
const optionsPerPage = [2, 3, 4];
export const Diagnostics = () => {
    const [page, setPage] = React.useState(0);
    const [itemsPerPage, setItemsPerPage] = React.useState(optionsPerPage[0]);
    React.useEffect(() => {
        setPage(0);
    }, [itemsPerPage]);

    return (
      <View style={{ flex: 1 }}>
      <ScrollView>
      <Text style={{ color: 'white', fontSize: 20, textAlign: 'center' }}>Status as of:{'\n'}{data.time}</Text>
        <DataTable style={styles.table}>
            <DataTable.Header>
                <DataTable.Title>Field</DataTable.Title>
                <DataTable.Title numeric>Status</DataTable.Title>
            </DataTable.Header>
            <DataTable.Row>
                <DataTable.Cell>HP_compressor_on_off</DataTable.Cell>
                <DataTable.Cell numeric>{results.HP_compressor_on_off}</DataTable.Cell>
            </DataTable.Row>
            <DataTable.Row>
                <DataTable.Cell>electricheater_lower_on_off</DataTable.Cell>
                <DataTable.Cell numeric>{results.electricheater_lower_on_off}</DataTable.Cell>
            </DataTable.Row>
            <DataTable.Row>
                <DataTable.Cell>electricheater_upper_on_off</DataTable.Cell>
                <DataTable.Cell numeric>{results.electricheater_upper_on_off}</DataTable.Cell>
            </DataTable.Row>
            <DataTable.Row>
                <DataTable.Cell>alarm_0</DataTable.Cell>
                <DataTable.Cell numeric>{results.alarm_0}</DataTable.Cell>
            </DataTable.Row>
            <DataTable.Row>
                <DataTable.Cell>alarm_1</DataTable.Cell>
                <DataTable.Cell numeric>{results.alarm_1}</DataTable.Cell>
            </DataTable.Row>
            <DataTable.Row>
                <DataTable.Cell>alarm_2</DataTable.Cell>
                <DataTable.Cell numeric>{results.alarm_2}</DataTable.Cell>
            </DataTable.Row>
            <DataTable.Row>
                <DataTable.Cell>alarm_3</DataTable.Cell>
                <DataTable.Cell numeric>{results.alarm_3}</DataTable.Cell>
            </DataTable.Row>
            <DataTable.Row>
                <DataTable.Cell>alarm_4</DataTable.Cell>
                <DataTable.Cell numeric>{results.alarm_4}</DataTable.Cell>
            </DataTable.Row>
            <DataTable.Row>
                <DataTable.Cell>alarm_5</DataTable.Cell>
                <DataTable.Cell numeric>{results.alarm_5}</DataTable.Cell>
            </DataTable.Row>
            <DataTable.Row>
                <DataTable.Cell>alarm_6</DataTable.Cell>
                <DataTable.Cell numeric>{results.alarm_6}</DataTable.Cell>
            </DataTable.Row>
            <DataTable.Row>
                <DataTable.Cell>alarm_7</DataTable.Cell>
                <DataTable.Cell numeric>{results.alarm_7}</DataTable.Cell>
            </DataTable.Row>
        </DataTable>
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  table: {
    flex: 1,
    width: '100%',
  },
});
*/