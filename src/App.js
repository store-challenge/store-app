import './App.css';
import { useMediaQuery } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { RoutesLinks } from './constant/constant';
import LangProvider from './providers/LangProvider';
import Header from './components/Header/Header';
import CatalogPage from './pages/CatalogPage/CatalogPage';
import CategoryPage from './pages/CategoryPage/CategoryPage';
import SubcategoryPage from './pages/SubcategoryPage/SubcategoryPage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
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
  const desktop = useMediaQuery(theme.breakpoints.up('xl'));
  return (
    <ThemeProvider theme={theme}>
      <LangProvider>
        <div className="App">
          <BrowserRouter>
            <Header desktop={desktop} />
            <Routes>
              <Route path={RoutesLinks.HOMEPAGE} element={<CatalogPage desktop={desktop} />} />
              <Route path={RoutesLinks.CATEGORY_PAGE} element={<CategoryPage desktop={desktop} />} />
              <Route path={RoutesLinks.SUBCATEGORY_PAGE} element={<SubcategoryPage desktop={desktop} />} />
              <Route path="*" element={<NotFoundPage desktop={desktop} />} />
            </Routes>
            <Footer />
          </BrowserRouter>
        </div>
      </LangProvider>
    </ThemeProvider>
  );
}

export default App;
