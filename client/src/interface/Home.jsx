import { React, useContext } from "react";
import {View, Text, ImageBackground } from "react-native";
import { Divider } from "react-native-paper";

import { styling } from "../styles/MyTheme";
import { timeStates } from "../api/states.mjs";
import { TimeContext } from "../api/TimeContext.mjs";

export const Home = ( { navigation, route } ) => {

    const {currentState, setCurrentState} = useContext(TimeContext);


    let ahi = 87;
    let energy = 12;
    let temp = 3.2;
    let time = "5:00 AM";
    let averageElectricity = 10.1;

    if (currentState === timeStates.RealTime) {
        ahi = Math.floor(Math.random() * (40 - 10 + 1) + 10);
        energy = Math.floor(Math.random() * (28 - 3 + 1) + 3);
        temp = Math.floor(Math.random() * (10 - 0 + 1) + 0);
        time = "7:00 AM";
        averageElectricity = Math.floor(Math.random() * (24 - 3 + 1) + 3);
    } else {
        ahi = Math.floor(Math.random() * (93 - 53 + 1) + 53);
        energy = Math.floor(Math.random() * (63 - 18 + 1) + 18);
        temp = -24;
        time = "5:00 AM";
        averageElectricity = Math.floor(Math.random() * (24 - 3 + 1) + 3);
    }

    return (
        <ImageBackground
        source={require("../../assets/star-background.jpg")}
        >
        <View style={styling.container}>
            <Text style={styling.customerText}>Welcome back,
            %Customer%
            </Text>
            <View style={styling.statusContainer}>
                <Text style={styling.statusHeader}>Status</Text>
                <Divider style={{margin: "4%"}}/>
                <Text style={styling.ahiText}>AHI: {ahi}</Text>
                <Divider style={{margin: "1%"}} />
                <Text style={styling.statusText}>Additional heating might be a good idea</Text>
                <Divider style={{margin: "9%"}} />
                <View style={styling.statusItems}>
                    <View style={styling.statusLeft}>
                        <View>
                            <Text style={styling.statusText}>Energy price:</Text>
                            <Text style={styling.statusText}>Outside temperature:</Text>
                        </View>
                    </View>
                    <View style={styling.statusRight}>
                        <Text style={styling.statusText}>{energy}c/kWh</Text>
                        <Text style={styling.statusText}>{temp}° at {time}</Text>
                    </View>  
                </View>
                <Divider style={{margin: "4%"}} />
                <Text style={styling.statusText}>Electricity is {averageElectricity}% cheaper than average</Text>
            </View> 
        </View>
        </ImageBackground>
    );
}
