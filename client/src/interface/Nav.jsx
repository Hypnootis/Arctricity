import { Appbar, Menu } from "react-native-paper";
import { Image, ImageBackground } from "react-native";
import React from "react";

import { styling } from "./MyTheme"

export const NavBar = ({navigation, back}) => {
    const [visible, setVisible] = React.useState(false);
    const openMenu = () => setVisible(true);
    const closeMenu = () => setVisible(false);


    
    return (
        <ImageBackground
            source={require("../../assets/star-background.jpg")}
            style={{width: "100%", opacity: 1}}>
        <Appbar.Header>
            {back ? <Appbar.BackAction onPress={navigation.goBack}/> : null}
            <Appbar.Content title={
                <Image source={require("../../assets/arctricity-logo.png")}
                    style={styling.appbar_image}
                />
            }
            style={{
                alignItems: "center"
            }}
            />
            {!back ? (
                <Menu
                    visible={visible}
                    onDismiss={closeMenu}
                    anchor={
                        <Appbar.Action icon="menu" color="white" onPress={openMenu} />
                    }>
                        <Menu.Item onPress={() => {}} title="Tap me, coward" />
                    </Menu>
            ) : null}
            
        </Appbar.Header>
        </ImageBackground>
    );
};



