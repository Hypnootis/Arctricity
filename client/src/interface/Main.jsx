import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from "@react-navigation/stack";

import { Theme } from "../styles/MyTheme";
import { NavBar } from "./Nav";
import { Settings } from "./Settings";
import { timeStates } from "../api/states.mjs";
import { Home } from "./Home";
import { Temps } from "./Temps";
import { Energy } from "./Energy";
import { About } from "./About";
import { Forecast } from "./Forecast";

const Stack = createStackNavigator();

export const Main = () => {
    return (
        <NavigationContainer theme={Theme}>
            <Stack.Navigator 
                initialRouteName="Home"
                screenOptions={{
                    header: ({navigation, back, route, timeState}) => <NavBar timeState={timeState} navigation={navigation} back={back} route={route}/>
                }}>
                <Stack.Screen name="Home" component={Home}/>
                <Stack.Screen name="About" component={About}/>
                <Stack.Screen name="Forecast" component={Forecast} />
                <Stack.Screen name="Temps" component={Temps} />
                <Stack.Screen name="Energy" component={Energy} />
                <Stack.Screen name="Settings" component={Settings} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};
