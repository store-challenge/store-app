import './App.css';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LangProvider from './providers/LangProvider';
import Header from './components/Header/Header';
import CatalogPage from './pages/CatalogPage/CatalogPage';
import CategoryPage from './pages/CategoryPage/CategoryPage';
import Footer from './components/Footer/Footer';

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 320,
      sm: 480,
      md: 768,
      lg: 1024,
      xl: 1280,
      xxl: 1440,
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <LangProvider>
        <div className="App">
          <BrowserRouter>
            <Header />
            <Routes>
              <Route path="/" element={<CatalogPage />} />
              <Route path="/category" element={<CategoryPage />} />
            </Routes>
            <Footer />
          </BrowserRouter>
        </div>
      </LangProvider>
    </ThemeProvider>
  );
}

export default App;
