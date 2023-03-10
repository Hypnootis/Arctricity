import { View, Text, StyleSheet } from "react-native";

import { NavBar } from "./Nav";
import { PressableText } from "./Paska";

const styles = StyleSheet.create({
    container: { 
        alignItems: "center",
        justifyContent: "center"
    }
});

export const Main = () => {
    return (
        <View>
            <NavBar/>
            <View style={styles.container}>
                <PressableText text="Paska"/>
                <PressableText text="Kusi"/>
            </View>
        </View>
    );
};
