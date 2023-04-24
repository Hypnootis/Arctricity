import React from "react";
import { Card, SegmentedButtons, Divider } from "react-native-paper";
import { View, Text, Dimensions, ScrollView } from "react-native";
import { styling } from "../styles/MyTheme";
import { LineChart } from "react-native-chart-kit";

const formula = `if temperature <= -10:
  if compressor_has_been_on_for_past_minutes > 10:
    temp_difference = temp_watertank_lower[current] - temp_watertank_lower[10_minutes_before]
    heating_rate = temp_difference / 10
    if heating_rate < 10:
      ahi_value = 100
    else:
      ahi_value = 400 / (3*(-1 - heating_rate/3)² - 100 / 3)

      if ahi_value < 0:
      ahi_value = 0

`

export const Forecast = (props) => {
    let date = "";
     if (props.timeState === "Spring") {
      date = "April 16th 2023";
    } else {
      date = "March 2nd 2023"
    }

    return (
        <View style={styling.container}>
            <ScrollView>
            <Text style={{ color: 'white', fontSize: 20, textAlign: 'center' }}>Viewing historical data from:{'\n' + date}</Text>
              <Card style={{marginBottom: 5}}>
              <Card.Content>
                <Text style={{color: "white"}}>Here would also be some weather forecasting for the next few days</Text>
              </Card.Content>
            </Card>
            <Card>
              <Card.Content>
              <Text style={{color: "white"}}>AHI goes here, according to this formula:</Text>
              <View style={styling.snippet}>
                <Text>{formula}</Text>
              </View>
              </Card.Content>
            </Card>
    </ScrollView>
    </View>
    );
}