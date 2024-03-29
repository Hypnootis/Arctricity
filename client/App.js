import { Provider as PaperProvider } from 'react-native-paper';

import { Main } from "./src/interface/Main";
import { Theme } from './src/styles/MyTheme';

const App = () => {
  return (
    <PaperProvider theme={Theme}>
      <Main/>
    </PaperProvider>
  );
}

export default App;