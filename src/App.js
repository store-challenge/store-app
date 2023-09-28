import './App.css';
import { useMediaQuery } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { RoutesLinks } from './constant/constant';
import LangProvider from './providers/LangProvider';
import Loading from './components/Loading/Loading';
import Header from './components/Header/Header';
import Container from './components/Container/Container';
import Footer from './components/Footer/Footer';

const CatalogPage = lazy(() => import('./pages/CatalogPage/CatalogPage' /* webpackChunkName: "CatalogPage" */));

const CategoryPage = lazy(() => import('./pages/CategoryPage/CategoryPage' /* webpackChunkName: "CategoryPage" */));

const SubcategoryPage = lazy(() =>
  import('./pages/SubcategoryPage/SubcategoryPage' /* webpackChunkName: "SubcategoryPage" */),
);

const NotFoundPage = lazy(() => import('./pages/NotFoundPage/NotFoundPage' /* webpackChunkName: "NotFoundPage" */));

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
          <BrowserRouter basename="https://store-challenge.github.io/store-app/">
            <Header desktop={desktop} />
            <Container breakpoint={desktop}>
              <Suspense fallback={<Loading />}>
                <Routes>
                  <Route path={RoutesLinks.HOMEPAGE} element={<CatalogPage desktop={desktop} />} />
                  <Route
                    path={`${RoutesLinks.CATEGORY_PAGE}/:categoryId`}
                    element={<CategoryPage desktop={desktop} />}
                  />
                  <Route
                    path={`${RoutesLinks.SUBCATEGORY_PAGE}/:subcategoryId`}
                    element={<SubcategoryPage desktop={desktop} />}
                  />
                  <Route path="*" element={<NotFoundPage />} />
                </Routes>
              </Suspense>
            </Container>
            <Footer />
          </BrowserRouter>
        </div>
      </LangProvider>
    </ThemeProvider>
  );
}

export default App;
