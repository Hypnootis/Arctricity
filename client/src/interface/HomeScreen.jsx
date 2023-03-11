import React from "react";
import {View, Text, Button, StyleSheet } from "react-native";

import { MyData } from "./Data";

export const HomeScreen = ({navigation}) => {
    return (
        <View style={style.container}>
            <Text>Pissi</Text>
            <Button
                title="Pyppy"
                onPress={() => navigation.navigate("Details")}
                />
        </View>
    );
}

export const DetailsScreen = () => {
    return (
        <View style={style.container}>
           <MyData style={style.table}/> 
        </View>
    );
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "gray"
    },
    // TODO: Set datatable text color to black
    table: {
        text: "black"
    }
});