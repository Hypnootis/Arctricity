import React from "react";
import {View, Text, Button, StyleSheet } from "react-native";

import { MyData } from "./Data";
import { style } from "./MyTheme";
import { Kuvat } from "./Kuvat";


export const HomeScreen = ({navigation}) => {
    return (
        <View style={style.container}>
            <Button
                style={style.buttons}
                title="Rotat"
                onPress={() => navigation.navigate("Rotat")}
                />
            <Button 
                style={style.buttons}
                title="Kuvat"
                onPress={() => navigation.navigate("Kuvat")}
            />
        </View>
    );
}

export const DetailsScreen = () => {
    return (
        <View style={style.container}>
           <MyData/> 
        </View>
    );
}

export const InfoScreen = () => {
    return (
        <View style={style.container}>
            <Kuvat />
        </View>
    );
}

const paska = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    }
});
    /*
    // TODO: Set datatable text color to black
    table: {
        text: "black"
    }
});
*/