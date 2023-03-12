import React from "react";
import { Card, Title, Paragraph } from "react-native-paper";

import { style } from "./MyTheme";

export const Kuvat = () => {
    return (
        <Card>
            <Card.Content style={style.cards}>
                <Title>Mesa muu</Title>
                <Paragraph>Fiilin de heis</Paragraph>
            </Card.Content>
            <Card.Cover source={require("../../assets/mesa.jpeg")} />
        </Card>
    );
}