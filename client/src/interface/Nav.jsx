import { Appbar, Menu } from "react-native-paper";
import React from "react";

export const NavBar = ({navigation, back}) => {
    const [visible, setVisible] = React.useState(false);
    const openMenu = () => setVisible(true);
    const closeMenu = () => setVisible(false);


    
    return (
        <Appbar.Header>
            {back ? <Appbar.BackAction onPress={navigation.goBack}/> : null}
            <Appbar.Content title="Arctricity DEMO" />
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
    );
};



