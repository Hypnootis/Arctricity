import React from "react";
import { Card, SegmentedButtons, Divider } from "react-native-paper";
import { View, Text, Dimensions, ScrollView } from "react-native";
import { styling } from "./MyTheme";
import { LineChart } from "react-native-chart-kit";

const spring = require('../data_files/apr16.json');
const winter = require("../data_files/mar2.json");

const hours = ["00", "01", "02", "03", "04", "05", "06", "07", "08", "09",
               "10", "11", "12", "13", "14", "15", "16", "17", "18", "19",
               "20", "21", "22", "23"];

let winter_out_temps = [];
let winter_watertank_lower = [];

let spring_out_temps = [];
let spring_watertank_lower = [];

for (data in spring) {
  spring_out_temps.push(spring[data].temp_out / 10);
  spring_watertank_lower.push(spring[data].temp_watertank_lower / 10);
}
for (data in winter) {
  winter_out_temps.push(winter[data]["temp_out: row[1]"] / 10);
  winter_watertank_lower.push(winter[data].temp_watertank_lower / 10);
}

let currentHours = [...hours.filter((value, index) => {
  return (index % 3 === 0);
})];

export const Temps = (props) => {
    let temps_out = [];
    let watertank_lower = [];
    let date = "";
    let interval = 3;

    if (props.timeState === "Spring") {
      temps_out = [...spring_out_temps];
      watertank_lower = [...spring_watertank_lower];
      date = "April 16th 2023";
    } else {
      temps_out = [...winter_out_temps];
      watertank_lower = [...winter_watertank_lower];
      date = "March 2nd 2023"
    }

    const [timeValue, setTimeValue] = React.useState("3hour"); 

    if (timeValue === "3hour") {
      currentHours = hours;
      interval = 3;
      currentHours = hours.filter((value, index) => {
        return (index % 3 === 0);
      });
    } else if (timeValue === "6hour") {
      currentHours = hours;
      interval = 6;
      currentHours = hours.filter((value, index) => {
        return (index % 6 === 0);
      });
    } else {
      interval = 1;
      currentHours = hours;
    }

    return (
        <View>
            <ScrollView>
            <Text style={{ color: 'white', fontSize: 20, textAlign: 'center' }}>Viewing historical data from:{'\n' + date}</Text>
            <Divider bold={true}/>
            <Text style={{color: "white", fontSize: 15, textAlign: "center"}}>Time interval</Text>
            <SegmentedButtons 
              value={timeValue}
              onValueChange={setTimeValue}
              buttons={[
                {
                  value: "1hour",
                  label: "1h"
                },
                {
                  value: "3hour",
                  label: "3h"
                },
                {
                  value: "6hour",
                  label: "6h"
                }
              ]}
              />
            <Card>
                <Card.Content style={styling.cards}>
                    <LineChart
    data={{
      labels: [...currentHours],
      datasets: [
        {
          data: [...temps_out],
        },
        {
          data: [-10], // min value for chart
          withDots: false
        },
        {
          data: [10], // max value for chart
          withDots: false
        }
      ],
      legend: ["Outside temperature (°C)"]
    }}
    width={Dimensions.get("window").width} // from react-native
    height={Dimensions.get("window").height / 2}
    yAxisInterval={interval} // optional, defaults to 1
    yAxisSuffix="°C"
    withDots={false}
    chartConfig={{
      backgroundColor: "#333134",
      backgroundGradientFrom: "#2b0871",
      backgroundGradientTo: "#160438",
      decimalPlaces: 1, // optional, defaults to 2dp
      color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
      labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
      style: {
        borderRadius: 16
      }
    }}
    bezier
    style={{
      marginVertical: 8,
      borderRadius: 16
    }}
  />
                </Card.Content>
            </Card>
            <Card>
                <Card.Content style={styling.cards}>
                <LineChart
    data={{
      labels: [...currentHours],
      datasets: [
        {
          data: [...watertank_lower],
        },
        {
          data: [30], // min value for chart
          withDots: false
        },
        {
          data: [40], // max value for chart
          withDots: false
        }
      ],
      legend: ["Watertank_lower temperature (°C)"]
    }}
    width={Dimensions.get("window").width} // from react-native
    height={Dimensions.get("window").height / 2}
    yAxisInterval={interval} // optional, defaults to 1
    yAxisSuffix="°C"
    withDots={false}
    chartConfig={{
      backgroundColor: "#333134",
      backgroundGradientFrom: "#2b0871",
      backgroundGradientTo: "#160438",
      decimalPlaces: 1, // optional, defaults to 2dp
      color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
      labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
      style: {
        borderRadius: 16
      }
    }}
    bezier
    style={{
      marginVertical: 8,
      borderRadius: 16
    }}
  />
                </Card.Content>
            </Card>
    </ScrollView>
    </View>
    );
}