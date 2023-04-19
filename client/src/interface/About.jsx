import React from "react";
import { View, Text, Image } from "react-native";

import { styling } from "./MyTheme";

const aboutText = `
    This project has been developed with love by Tuomas Pasanen, Tom Cordruwisch, Janne Vänskä and Houda Banyny
    as a 2nd year semester-long project for the Lapland UAS machine learning and data engineering -study programme.

    The initial premise was accessing a customer's personal geothermal heating system inside their home,
    and providing visualization and forecasting for data that was gathered via various sensors.    

    The project has been an exercise in group work, software development techniques, marketing, communication,
    and various different technologies for all of us, and we are happy to have you holding our glorious product!
`;


export const About = () => {


    
    return (
        <View style={styling.container}>
            <Image 
                source={require("../../assets/logo.jpeg")}
                style={{width: "80%", height: "40%"}}
            />
            <Text style={{color: "white"}}>{aboutText}</Text>
        </View>
    );
};



