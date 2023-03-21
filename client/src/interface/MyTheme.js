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
        height: "100%"
    },
    buttonsContainer: {
        height: "100%",
        width: "50%",
        alignItems: "center",
        justifyContent: "space-evenly",
    },
    mainContainer: {
        flexDirection: "row",
        height: "100%",
    },
    button1: {
    backgroundColor: "red"
    }
}