import './App.css';
import ActionAreaCard from './components/card/ActionAreaCard';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
    <ActionAreaCard></ActionAreaCard>
    </ThemeProvider>
  );
}

export default App;
