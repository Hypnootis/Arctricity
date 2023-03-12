import React from "react";
import {View, Text, Button, StyleSheet } from "react-native";

import { MyData } from "./Data";
import { styling } from "./MyTheme";
import { Graphs } from "./Graphs";


export const HomeScreen = ({navigation}) => {
    return (
        <View style={styling.buttons}>
            <Button
                title="Data table screen"
                onPress={() => navigation.navigate("Table")}
                />
            <Button 
                title="Graphs screen"
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

export const GraphsScreen = () => {
    return (
        <View style={styling.cards}>
            <Graphs />
        </View>
    );
}