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
        width: "90%",
        alignItems: "center",
        justifyContent: "space-evenly"
    },
    cards: {
        alignItems: "center",
    },
    buttons: {
        height: "100%",
        justifyContent: "space-around",
        alignItems: "center"
    },
    headerText: {
        alignItems: "center",
        color: "white",
        fontSize: 30
    },
    innerContainer: {
        justifyContent: "space-around",
        alignContent: "center",
        alignItems: "center",
        height: "auto",
        gap: 15,
        flexGrow: 2,
        flexDirection: "row"
    },
    headerContainer: {
        flexGrow: 1
    },
    snippet: {
        backgroundColor: "gray",
        marginTop: 3,
        padding: 2
    },
    appbar_image: {
        width: "80%",
        height: "50%"
    }
}