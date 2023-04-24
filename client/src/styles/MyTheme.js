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
        alignSelf: "center",
        justifyContent: "center",
        backgroundColor: "transparent",
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
        width: "100%",
        height: "55%"
    },
    statusContainer: {
        width: "100%",
        height: "50%",
        alignItems: "center",
        backgroundColor: "rgba(57, 108, 110, 0.5)",
        fontSize: 10,
        borderRadius: 20
    }, 
    statusRight: {
        marginRight: "5%"
    },
    statusLeft: {
        marginLeft: "5%"
    },
    statusItems: {
        flexDirection: "row",
        width: "100%",
        justifyContent: "space-between",
    },
    statusText: {
        color: "white",
        fontSize: 16,
    },
    statusHeader: {
        fontSize: 20,
        color: "white"
    },
    ahiText: {
        fontSize: 25,
        color: "red"
    },
    customerText: {
        fontSize: 40,
        color: "white",
        alignSelf: "center",
        marginBottom: "10%",
        textAlign: "center"
    },
}