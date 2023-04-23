import { Appbar, Menu } from "react-native-paper";
import { Image, ImageBackground, View } from "react-native";
import { React, useState } from "react";

import { styling } from "./MyTheme"
import { About } from "./About";
import { Home } from "./Home";
import { Temps } from "./Temps";
import { Energy } from "./Energy";
import { Forecast } from "./Forecast";
import { Settings } from "./Settings";

const background = require("../../assets/star-background.jpg");

export const NavBar = ({ navigation, back }) => {
    const [visible, setVisible] = useState(false);
    const openMenu = () => setVisible(true);
    const closeMenu = () => setVisible(false);
    const timeStates = "Spring";

    return (
        <ImageBackground
            source={background}>
        <Appbar.Header
            dark={true}
            mode="center-aligned"
            style={{ backgroundColor: "transparent" }}>
            {back ? <Appbar.BackAction onPress={() => navigation.navigate("Home")}/> : null}
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
                        <Menu.Item onPress={() => {navigation.navigate("Temps");}} 
                        title="Temperatures" />
                        <Menu.Item onPress={() => {navigation.navigate("Energy");}} 
                        title="Energy" />
                        <Menu.Item onPress={() => {navigation.navigate("Forecast");}} 
                        title="Forecast" />
                        <Menu.Item onPress={() => {navigation.navigate("Settings");}} 
                        title="Settings" />
                        <Menu.Item onPress={() => {navigation.navigate("About");}} 
                        title="About" />
                    </Menu>
            ) : null}
            
        </Appbar.Header>
        </ImageBackground>
    );
};


export const EnergyScreen = ({ route }) => {
    return (
        <ImageBackground
        source={background}>
        <View style={styling.cards}>
            <Energy />
        </View>
        </ImageBackground>
    );
}

export const TempsScreen = ({ route }) => {
    return (
        <ImageBackground
        source={background}>
        <View style={styling.cards}>
            <Temps />
        </View>
        </ImageBackground>
    );
}

export const ForecastScreen = ({ route }) => {
    return (
        <ImageBackground
        source={background}>
        <View style={styling.container}>
            <Forecast />
        </View>
        </ImageBackground>
    );
}
export const SettingsScreen = ({ route }) => {
    return (
        <ImageBackground
        source={background}>
        <View style={styling.container}>
            <Settings />
        </View>
        </ImageBackground>
    )
}

export const HomeScreen = ({ route }) => {
    return (
        <ImageBackground
        source={background}>
    <View style={styling.container}>
        <Home  />
    </View>
    </ImageBackground>
    )
}

export const AboutScreen = () => {
    return (
        <ImageBackground
        source={background}>
        <View style={styling.container}>
            <About />
        </View>
        </ImageBackground>
    )
}



