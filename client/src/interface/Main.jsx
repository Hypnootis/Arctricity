import "react-native-gesture-handler";
import React, { createContext, useState } from "react";
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
import { TimeContext } from "../api/TimeContext.mjs";

const Stack = createStackNavigator();

export const Main = () => {
    
    const [currentState, setCurrentState] = useState(timeStates.RealTime);
    const value = { currentState, setCurrentState };

    return (
        <TimeContext.Provider value={value}>
        <NavigationContainer theme={Theme}>
            <Stack.Navigator 
                initialRouteName="Home"
                screenOptions={{
                    header: (props) => <NavBar {...props}/>
                }}>
                <Stack.Screen name="Home" component={Home}/>
                <Stack.Screen name="About" component={About}/>
                <Stack.Screen name="Forecast" component={Forecast} />
                <Stack.Screen name="Temps" component={Temps} />
                <Stack.Screen name="Energy" component={Energy} />
                <Stack.Screen name="Settings" component={Settings} />
            </Stack.Navigator>
        </NavigationContainer>
    </TimeContext.Provider>
    );
};
