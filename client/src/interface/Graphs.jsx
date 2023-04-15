import React from "react";
import { Card, Title, Paragraph } from "react-native-paper";
import { View, Text, Dimensions, ScrollView } from "react-native";
import { styling } from "./MyTheme";
import { BarChart, LineChart } from "react-native-chart-kit";

const data_file= require('./test_data.json');
const data = data_file.test;

export const Graphs = () => {
    return (
        <View>
            <ScrollView>
            <Text style={{ color: 'white', fontSize: 20, textAlign: 'center' }}>Status as of:{'\n'}{data.time}</Text>
            <Card>
                <Card.Content style={styling.cards}>
                    <Title>This could have a cool graph</Title>
                    <LineChart
    data={{
      labels: ["January", "February", "March", "April", "May", "June"],
      datasets: [
        {
          data: [
            Math.random() * 100,
            Math.random() * 100,
            Math.random() * 100,
            Math.random() * 100,
            Math.random() * 100,
            Math.random() * 100
          ]
        }
      ]
    }}
    width={Dimensions.get("window").width} // from react-native
    height={220}
    yAxisLabel="$"
    yAxisSuffix="k"
    yAxisInterval={1} // optional, defaults to 1
    chartConfig={{
      backgroundColor: "#e26a00",
      backgroundGradientFrom: "#fb8c00",
      backgroundGradientTo: "#ffa726",
      decimalPlaces: 2, // optional, defaults to 2dp
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