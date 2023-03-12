import React from "react";
import { Card, Title, Paragraph } from "react-native-paper";
import { View } from "react-native";

import { styling } from "./MyTheme";

export const Graphs = () => {
    return (
        <View>
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