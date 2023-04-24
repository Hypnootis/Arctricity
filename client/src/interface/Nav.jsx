import { Appbar, Menu } from "react-native-paper";
import { Image, ImageBackground, View } from "react-native";
import { React, useState, useEffect } from "react";

import { styling } from "../styles/MyTheme"
import { About } from "./About";
import { Home } from "./Home";
import { Temps } from "./Temps";
import { Energy } from "./Energy";
import { Forecast } from "./Forecast";
import { timeStates } from "../api/states.mjs";
// import { Settings } from "./Settings";

const background = require("../../assets/star-background.jpg");



export const NavBar = ({ navigation, back, route, timeState }) => {
    const [visible, setVisible] = useState(false);
    const openMenu = () => setVisible(true);
    const closeMenu = () => setVisible(false);

    return (
        <ImageBackground
            source={background}>
        <Appbar.Header
            dark={true}
            mode="center-aligned"
            style={{ backgroundColor: "transparent" }}>
            {back ? <Appbar.BackAction onPress={() => {navigation.navigate("Home", {timeState: timeState});}}/> : null}
            <Appbar.Content title={
                <Image source={require("../../assets/arctricity-logo.png")}
                    style={styling.appbar_image}
                />
            }
            style={{
                alignItems: "center",
            }}
            />
            {!back ? (
                <Menu
                    visible={visible}
                    onDismiss={closeMenu}
                    anchor={
                        <Appbar.Action icon="menu" color="white" onPress={openMenu} />
                    }>
                        <Menu.Item onPress={() => {navigation.navigate("Temps", {timeState: timeState});}} 
                        title="Temperatures" />
                        <Menu.Item onPress={() => {navigation.navigate("Energy");}} 
                        title="Energy" />
                        <Menu.Item onPress={() => {navigation.navigate("Forecast");}} 
                        title="Forecast" />
                        <Menu.Item onPress={() => {navigation.navigate("Settings", {timeState: timeState});}} 
                        title="Settings" />
                        <Menu.Item onPress={() => {navigation.navigate("About");}} 
                        title="About" />
                        <Menu.Item 
                        title={timeState}
                        />
                    </Menu>
            ) : null}
            
        </Appbar.Header>
        </ImageBackground>
    );
};
