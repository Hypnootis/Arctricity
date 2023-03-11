import { Provider as PaperProvider, MD3DarkTheme as DefaultTheme } from 'react-native-paper';

import { Main } from "./src/interface/Main";

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    text: "black"
  }
}

const App = () => {
  return (
    <PaperProvider theme={theme}>
      <Main/>
    </PaperProvider>
  );
}

export default App;