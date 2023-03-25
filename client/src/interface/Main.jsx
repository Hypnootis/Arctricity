import { View, Text, StyleSheet } from "react-native";
import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from "@react-navigation/stack";

import { Theme } from "./MyTheme";
import { HomeScreen, GraphsScreen, DiagnosticsScreen, TableScreen } from "./HomeScreen";
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
                <Stack.Screen name="Table" component={TableScreen}/>
                <Stack.Screen name="Diagnostics" component={DiagnosticsScreen} />
                <Stack.Screen name="Graphs" component={GraphsScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};
