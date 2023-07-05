import "./App.css";

import { createTheme, ThemeProvider } from '@mui/material/styles';

import Header from './components/Header/Header';
import LangProvider from "./providers/LangProvider";
import CatalogPage from "./pages/CatalogPage/CatalogPage";
import Footer from "./components/Footer/Footer"

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
          <Footer />
        </div>
      </LangProvider>
    </ThemeProvider>
  );
}

export default App;
