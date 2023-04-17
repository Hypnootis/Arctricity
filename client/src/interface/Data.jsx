import * as React from "react";
import { ScrollView, View, Text, StyleSheet } from 'react-native';
import { DataTable } from "react-native-paper";
import { styling } from "./MyTheme";

// import firebase from 'firebase/app';
// import 'firebase/firestore';

const data_file= require('../test_data.json');
// const data = data_file.test;

// Initialize Firebase (For future use, couldn't get this part to work yet)
/*const firebaseConfig = {
    apiKey: "AIzaSyDGnSle1ZEp6p-qp74ksFFYzGfh9g_Ouzo",
    authDomain: "springproject2023.firebaseapp.com",
    projectId: "springproject2023",
    storageBucket: "springproject2023.appspot.com",
    messagingSenderId: "594280156857",
    appId: "1:594280156857:web:02254e064aa1083ae21568",
  }

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const docRef = db.collection("data").doc("2023_03_01_120647");

docRef.get().then((doc) => {
  if (doc.exists) {
    const data = doc.data();
    console.log(data);
  } else {
    console.log("No such document!");
  }
}).catch((error) => {
  console.log("Error getting document:", error);
});*/

/*
function temperatureConversion(value) {
  decimal_value = value / 10;
  const num = parseFloat(decimal_value);
  return num.toFixed(1);
}
// Value formatting
const results = {};

// Loop through the key-value pairs in the data object
for (const [key, value] of Object.entries(data)) {
    const result = temperatureConversion(value);
    results[key] = result;
}

const optionsPerPage = [2, 3, 4];
export const MyData = () => {
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
                <DataTable.Title numeric>Value</DataTable.Title>
                <DataTable.Title numeric>Unit</DataTable.Title>
            </DataTable.Header>
             <DataTable.Row>
                <DataTable.Cell>temp_HP_high_limit</DataTable.Cell>
                <DataTable.Cell numeric>{results.temp_HP_high_limit}</DataTable.Cell>
                <DataTable.Cell numeric>°C</DataTable.Cell>
            </DataTable.Row>
            <DataTable.Row>
                <DataTable.Cell>temp_HP_low_limit</DataTable.Cell>
                <DataTable.Cell numeric>{results.temp_HP_low_limit}</DataTable.Cell>
                <DataTable.Cell numeric>°C</DataTable.Cell>
            </DataTable.Row>
            <DataTable.Row>
                <DataTable.Cell>temp_HPcondensation</DataTable.Cell>
                <DataTable.Cell numeric>{results.temp_HPcondensation}</DataTable.Cell>
                <DataTable.Cell numeric>°C</DataTable.Cell>
            </DataTable.Row>
            <DataTable.Row>
                <DataTable.Cell>temp_HPgas_hot</DataTable.Cell>
                <DataTable.Cell numeric>{results.temp_HPgas_hot}</DataTable.Cell>
                <DataTable.Cell numeric>°C</DataTable.Cell>
            </DataTable.Row>
            <DataTable.Row>
                <DataTable.Cell>temp_HPgas_suction</DataTable.Cell>
                <DataTable.Cell numeric>{results.temp_HPgas_suction}</DataTable.Cell>
                <DataTable.Cell numeric>°C</DataTable.Cell>
            </DataTable.Row>
            <DataTable.Row>
                <DataTable.Cell>temp_floorheating_out</DataTable.Cell>
                <DataTable.Cell numeric>{results.temp_floorheating_out}</DataTable.Cell>
                <DataTable.Cell numeric>°C</DataTable.Cell>
            </DataTable.Row>
            <DataTable.Row>
                <DataTable.Cell>temp_floorheating_OUT_target</DataTable.Cell>
                <DataTable.Cell numeric>{results.temp_floorheating_OUT_target}</DataTable.Cell>
                <DataTable.Cell numeric>°C</DataTable.Cell>
            </DataTable.Row>
            <DataTable.Row>
                <DataTable.Cell>temp_floorheating_in</DataTable.Cell>
                <DataTable.Cell numeric>{results.temp_floorheating_in}</DataTable.Cell>
                <DataTable.Cell numeric>°C</DataTable.Cell>
            </DataTable.Row>
            <DataTable.Row>
                <DataTable.Cell>temp_groundwater_in</DataTable.Cell>
                <DataTable.Cell numeric>{results.temp_groundwater_in}</DataTable.Cell>
                <DataTable.Cell numeric>°C</DataTable.Cell>
            </DataTable.Row>
            <DataTable.Row>
                <DataTable.Cell>temp_groundwater_out</DataTable.Cell>
                <DataTable.Cell numeric>{results.temp_groundwater_out}</DataTable.Cell>
                <DataTable.Cell numeric>°C</DataTable.Cell>
            </DataTable.Row>
            <DataTable.Row>
                <DataTable.Cell>temp_hotwater</DataTable.Cell>
                <DataTable.Cell numeric>{results.temp_hotwater}</DataTable.Cell>
                <DataTable.Cell numeric>°C</DataTable.Cell>
            </DataTable.Row>
            <DataTable.Row>
                <DataTable.Cell>temp_in_not_connected</DataTable.Cell>
                <DataTable.Cell numeric>{results.temp_in_not_connected}</DataTable.Cell>
                <DataTable.Cell numeric>°C</DataTable.Cell>
            </DataTable.Row>
            <DataTable.Row>
                <DataTable.Cell>temp_out: row[1]</DataTable.Cell>
                <DataTable.Cell numeric>{results['temp_out: row[1]']}</DataTable.Cell>
                <DataTable.Cell numeric>°C</DataTable.Cell>
            </DataTable.Row>
            <DataTable.Row>
                <DataTable.Cell>temp_watertank_lower</DataTable.Cell>
                <DataTable.Cell numeric>{results.temp_watertank_lower}</DataTable.Cell>
                <DataTable.Cell numeric>°C</DataTable.Cell>
            </DataTable.Row>
            <DataTable.Row>
                <DataTable.Cell>temp_watertank_upper</DataTable.Cell>
                <DataTable.Cell numeric>{results.temp_watertank_upper}</DataTable.Cell>
                <DataTable.Cell numeric>°C</DataTable.Cell>
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