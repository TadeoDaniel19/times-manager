import { ThemeProvider } from '@mui/material';
import './App.css';
import RootRouter from './router';
import theme from './theme';

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <RootRouter />
      </ThemeProvider>
    </div>
  );
}

export default App;
