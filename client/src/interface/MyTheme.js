import { MD3DarkTheme } from "react-native-paper";

export const style = {
    ...MD3DarkTheme,
    colors: {
        ...MD3DarkTheme.colors
    },
    cards: {
        padding: 20,
    },
    buttons: {
        flex: 1,
        margin: 20,
    },
    container: {
        justifyContent: "center",
        alignItems: "center"
    }

}