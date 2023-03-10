import { StyleSheet, Text, View } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';

import { PressableText } from "./src/interface/Nav";

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: "tomato",
    secondary: "yellow"
  }
};

const App = () => {
  return (
    <PaperProvider theme={theme}>
      <View style={style.container}>
        <PressableText/>
      </View>
    </PaperProvider>
  );
}

export default App;