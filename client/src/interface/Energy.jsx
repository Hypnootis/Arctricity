import React from "react";
import { Card, SegmentedButtons, Divider } from "react-native-paper";
import { View, Text, Dimensions, ScrollView } from "react-native";
import { styling } from "./MyTheme";
import { LineChart } from "react-native-chart-kit";

const spring = require('../data_files/apr16.json');

const hours = ["00", "01", "02", "03", "04", "05", "06", "07", "08", "09",
               "10", "11", "12", "13", "14", "15", "16", "17", "18", "19",
               "20", "21", "22", "23"];

let spring_energy = [];

for (data in spring) {
  spring_energy.push(spring[data].total_consumption / 1000);
}

let currentHours = [...hours.filter((value, index) => {
  return (index % 3 === 0);
})];

export const Energy = (props) => {
    let consumption = [];
    let date = "";
    let interval = 3;

    if (props.timeState === "Spring") {
      consumption = [...spring_energy];
      date = "April 16th 2023";
    } else {
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
          data: [...consumption],
        },
      ],
      legend: ["Total energy consumption for the day (kw/h)"]
    }}
    width={Dimensions.get("window").width} // from react-native
    height={Dimensions.get("window").height / 2}
    yAxisInterval={interval} // optional, defaults to 1
    yAxisSuffix="kw/h"
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