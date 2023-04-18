import { React, useState, useEffect } from "react";
import {View, Text, Button, StyleSheet, ImageBackground, Dimensions } from "react-native";

import { Settings } from "./Settings";
import { styling } from "./MyTheme";
import { Temps } from "./Temps";
import { Energy } from "./Energy";
import { Forecast } from "./Forecast";

export const HomeScreen = ({ navigation }) => {

    const [timeState, setTimeState] = useState("Spring"); // true = recent, false = winter

    function handleTimeState(){
        if (timeState === "Spring") {
            setTimeState("Winter");
        } else {
            setTimeState("Spring");
        }
    };

    return (
        <View style={styling.container}>
            <View style={styling.headerContainer}>
            <Text style={styling.headerText}>Dataset selected: {timeState}</Text>
            <Button 
                title="Toggle dataset for demo"
                onPress={() => handleTimeState()}
                style={styling.buttons}
            />
            </View>
            <View style={styling.innerContainer}>
            <Button
                title="Temperatures"
                onPress={() => navigation.navigate("Temps", {timeState: timeState})}
                />
            <Button 
                title="Energy consumption"
                onPress={() => navigation.navigate("Energy", {timeState: timeState})}
            />
            </View>
            <View style={styling.innerContainer}>
            <Button 
                title="Forecast"
                onPress={() => navigation.navigate("Forecast", {timeState: timeState })}
            />
            <Button 
                title="Settings"
                onPress={() => navigation.navigate("Settings", {timeState: timeState})}
            />
            </View>
        </View>
    );
}

export const SettingsScreen = () => {
    return (
        <View style={styling.container}>
           <Settings /> 
        </View>
    );
}

export const EnergyScreen = ({ route }) => {
    return (
        <View style={styling.container}>
            <Energy timeState={route.params.timeState}/>
        </View>
    );
}

export const TempsScreen = ({ route }) => {
    return (
        <View style={styling.cards}>
            <Temps timeState={route.params.timeState}/>
        </View>
    );
}

export const ForecastScreen = ({ route }) => {
    return (
        <View style={styling.container}>
            <Forecast timeState={route.params.timeState} />
        </View>
    );
}