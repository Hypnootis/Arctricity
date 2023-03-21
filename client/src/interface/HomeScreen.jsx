import React from "react";
import {View, Text, Button, StyleSheet } from "react-native";

import { styling } from "./MyTheme";


export const HomeScreen = ({navigation}) => {
    return (
        <View style={styling.mainContainer}>
            <View style={styling.buttonsContainer}>
                <Button
                    contentStyle={styling.button1}
                    title="Data table screen"
                    onPress={() => navigation.navigate("Table")}
                    mode="contained"
                    />
                <Button 
                    style={styling.buttons}
                    title="Graphs screen"
                    onPress={() => navigation.navigate("Graphs")}
                />
            </View>
            <View style={styling.buttonsContainer}>
                <Button
                    style={styling.buttons}
                    title="Data table screen"
                    onPress={() => navigation.navigate("Table")}
                />
            <Button 
                style={styling.buttons}
                title="Graphs screen"
                onPress={() => navigation.navigate("Graphs")}
            />   
            </View>
        </View>
    );
}
