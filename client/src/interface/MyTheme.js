import { MD3DarkTheme } from "react-native-paper";

export const Theme = {
    ...MD3DarkTheme,
    colors: {
        ...MD3DarkTheme.colors
    }
}

export const styling = {
    container: {
        height: "100%", 
    },
    cards: {
        alignItems: "center",
    },
    buttons: {
        height: "100%",
        justifyContent: "space-around",
        alignItems: "center"
    },
    table: {
    }
}