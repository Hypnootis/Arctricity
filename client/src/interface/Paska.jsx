import {Text, Button, Alert} from "react-native";

export const PressableText = props => {
    return (
        <Button
            onPress={() => Alert.alert("You pressed the text!", "Perseen suti")}
            title={props.text}>
            </Button>
    );
}

