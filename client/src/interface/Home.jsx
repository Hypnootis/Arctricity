import { React } from "react";
import {View, Text } from "react-native";
import { Divider } from "react-native-paper";

import { styling } from "./MyTheme";


export const Home = ( props ) => {

    const ahi = 87;
    const energy = 12;
    const temp = 3.2;
    const time = "5:00 AM";
    const averageElectricity = 10.1;

    return (
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
    );
}
