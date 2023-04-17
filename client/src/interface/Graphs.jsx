import React from "react";
import { Card, Title, Paragraph } from "react-native-paper";
import { View, Text, Dimensions, ScrollView } from "react-native";
import { styling } from "./MyTheme";
import { BarChart, LineChart } from "react-native-chart-kit";

const data_file = require('../data_files/test_data.json');

let outside_temps = [];

for (data in data_file) {
  outside_temps.push(data_file[data].avgValues.temp_out);
}


export const Graphs = () => {
    return (
        <View>
            <ScrollView>
            <Text style={{ color: 'white', fontSize: 20, textAlign: 'center' }}>Status as of:{'\n'}{data.time}</Text>
            <Card>
                <Card.Content style={styling.cards}>
                    <Title>Outside temperature</Title>
                    <LineChart
    data={{
      labels: ["14:50", "15:00", "15:10", "15:20", "15:30", "15:40"],
      datasets: [
        {
          data: [
            ...outside_temps
          ]
        }
      ]
    }}
    width={Dimensions.get("window").width} // from react-native
    height={220}
    yAxisInterval={1} // optional, defaults to 1
    yAxisSuffix="°C"
    fromZero="true"
    chartConfig={{
      backgroundColor: "#333134",
      backgroundGradientFrom: "#2b0871",
      backgroundGradientTo: "#160438",
      decimalPlaces: 1, // optional, defaults to 2dp
      color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
      labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
      style: {
        borderRadius: 16
      },
      propsForDots: {
        r: "6",
        strokeWidth: "2",
        stroke: "#ffa726"
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
                    <Title>This could be another cool graph</Title>
                    <Paragraph>Muice & Mope</Paragraph>
                </Card.Content>
                <Card.Cover source={require("../../assets/tummat.jpeg")} />
            </Card>
    </ScrollView>
    </View>
    );
}