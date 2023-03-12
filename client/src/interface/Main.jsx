import { View, Text, StyleSheet } from "react-native";
import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from "@react-navigation/stack";

import { style } from "./MyTheme";
import { HomeScreen, DetailsScreen } from "./HomeScreen";
import { Kuvat } from "./Kuvat";



import { NavBar } from "./Nav";
import { PressableText } from "./Paska";

const Stack = createStackNavigator();

const styles = StyleSheet.create({
    container: { 
        alignItems: "center",
        justifyContent: "center"
    }
});

export const Main = () => {
    return (
        <NavigationContainer theme={style}>
            <Stack.Navigator 
                initialRouteName="Home"
                screenOptions={{
                    header: (props) => <NavBar {...props}/>
                }}>
                <Stack.Screen name="Home" component={HomeScreen}/>
                <Stack.Screen name="Rotat" component={DetailsScreen}/>
                <Stack.Screen name="Kuvat" component={Kuvat} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};
