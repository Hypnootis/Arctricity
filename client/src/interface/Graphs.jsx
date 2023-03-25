import React from "react";
import { Card, Title, Paragraph } from "react-native-paper";
import { View, Text } from "react-native";
import { styling } from "./MyTheme";

const data_file= require('./test_data.json');
const data = data_file.test;

export const Graphs = () => {
    return (
        <View>
            <Text style={{ color: 'white', fontSize: 20, textAlign: 'center' }}>Status as of:{'\n'}{data.time}</Text>
            <Card>
                <Card.Content style={styling.cards}>
                    <Title>This could have a cool graph</Title>
                    <Paragraph>Mesa</Paragraph>
                </Card.Content>
                <Card.Cover source={require("../../assets/mesa.jpeg")} />
            </Card>
            <Card>
                <Card.Content style={styling.cards}>
                    <Title>This could be another cool graph</Title>
                    <Paragraph>Muice & Mope</Paragraph>
                </Card.Content>
                <Card.Cover source={require("../../assets/tummat.jpeg")} />
            </Card>

    </View>
    );
}