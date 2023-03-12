import { Provider as PaperProvider, DefaultTheme } from 'react-native-paper';

import { Main } from "./src/interface/Main";
import { style } from './src/interface/MyTheme';

const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
  }
}

const App = () => {
  return (
    <PaperProvider theme={style}>
      <Main/>
    </PaperProvider>
  );
}

export default App;