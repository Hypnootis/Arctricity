import { View, Text, StyleSheet, Settings } from "react-native";
import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from "@react-navigation/stack";

import { Theme } from "./MyTheme";
import { HomeScreen, TempsScreen, EnergyScreen, AboutScreen, ForecastScreen } from "./HomeScreen";
import { NavBar } from "./Nav";

const Stack = createStackNavigator();

export const Main = () => {
    return (
        <NavigationContainer theme={Theme}>
            <Stack.Navigator 
                initialRouteName="Home"
                screenOptions={{
                    header: (props) => <NavBar {...props}/>
                }}>
                <Stack.Screen name="Home" component={HomeScreen}/>
                <Stack.Screen name="About" component={AboutScreen}/>
                <Stack.Screen name="Forecast" component={ForecastScreen} />
                <Stack.Screen name="Temps" component={TempsScreen} />
                <Stack.Screen name="Energy" component={EnergyScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};
