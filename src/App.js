import "./App.css";

import { createTheme, ThemeProvider } from '@mui/material/styles';

import Header from './components/Header/Header';
import LangProvider from "./components/LangProvider/LangProvider";
import CatalogPage from "./pages/CatalogPage/CatalogPage";

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 320,
      sm: 480,
      md: 768,
      lg: 1024,
      xl: 1440,
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <LangProvider>
        <div className="App">
          <Header />
          <CatalogPage />
        </div>
      </LangProvider>
    </ThemeProvider>
  );
}

export default App;
