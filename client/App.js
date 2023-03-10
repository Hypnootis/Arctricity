import "react-native-gesture-handler";
import { Provider as PaperProvider, MD3DarkTheme as DefaultTheme } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from "@react-navigation/stack";

import { Main } from "./src/interface/Main";

const App = () => {
  return (
    <PaperProvider>
      <Main/>
    </PaperProvider>
  );
}

export default App;