import React from "react";
import {View, Text, Button, StyleSheet } from "react-native";

import { MyData } from "./Data";
import { Diagnostics } from "./Diagnostics";
import { styling } from "./MyTheme";
import { Graphs } from "./Graphs";


export const HomeScreen = ({navigation}) => {
    return (
        <View style={styling.buttons}>
            <Button
                title="Temperature data"
                onPress={() => navigation.navigate("Table")}
                />
            <Button 
                title="Diagnostics"
                onPress={() => navigation.navigate("Diagnostics")}
            />
            <Button 
                title="Graphs"
                onPress={() => navigation.navigate("Graphs")}
            />

        </View>
    );
}

export const TableScreen = () => {
    return (
        <View style={styling.container}>
           <MyData/> 
        </View>
    );
}

export const DiagnosticsScreen = () => {
    return (
        <View style={styling.container}>
            <Diagnostics />
        </View>
    );
}

export const GraphsScreen = () => {
    return (
        <View style={styling.cards}>
            <Graphs />
        </View>
    );
}