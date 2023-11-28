import './App.css';
import { useMediaQuery } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { RoutesLinks } from './constant/constant';
import LangProvider from './providers/LangProvider';
import { CartProvider } from './providers/CartProvider';

import Loading from './components/Loading/Loading';
import Header from './components/Header/Header';
import Container from './components/Container/Container';
import Footer from './components/Footer/Footer';

const CatalogPage = lazy(() => import('./pages/CatalogPage/CatalogPage' /* webpackChunkName: "CatalogPage" */));

const SearchListPage = lazy(() => import('./pages/SearchListPage' /* webpackChunkName: "SearchListPage" */));

const CategoryPage = lazy(() => import('./pages/CategoryPage/CategoryPage' /* webpackChunkName: "CategoryPage" */));

const SubcategoryPage = lazy(() =>
  import('./pages/SubcategoryPage/SubcategoryPage' /* webpackChunkName: "SubcategoryPage" */),
);

const ProductPage = lazy(() => import('./pages/ProductPage/ProductPage' /* webpackChunkName: "ProductPage" */));

const OrderPage = lazy(() => import('./pages/OrderPage' /* webpackChunkName: "OrderPage" */));

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
  const tablet = useMediaQuery(theme.breakpoints.between('640', 'xl'));
  const desktop = useMediaQuery(theme.breakpoints.up('xl'));
  return (
    <ThemeProvider theme={theme}>
      <LangProvider>
        <div className="App">
          <BrowserRouter basename={RoutesLinks.MAINPAGE}>
            <CartProvider>
              <Header desktop={desktop} />
              <Container desktop={desktop} tablet={tablet}>
                <Suspense fallback={<Loading />}>
                  <Routes>
                    <Route path={RoutesLinks.HOMEPAGE} element={<CatalogPage desktop={desktop} />} />
                    <Route path={RoutesLinks.SEARCH} element={<SearchListPage desktop={desktop} />} />
                    <Route
                      path={`${RoutesLinks.CATEGORY_PAGE}/:categoryId`}
                      element={<CategoryPage desktop={desktop} />}
                    />
                    <Route
                      path={`${RoutesLinks.SUBCATEGORY_PAGE}/:subcategoryId`}
                      element={<SubcategoryPage desktop={desktop} />}
                    />
                    <Route path={`${RoutesLinks.PRODUCT_PAGE}/:id`} element={<ProductPage desktop={desktop} />} />
                    <Route path={RoutesLinks.ORDER_PAGE} element={<OrderPage desktop={desktop} />} />
                    <Route path="*" element={<NotFoundPage desktop={desktop} />} />
                  </Routes>
                </Suspense>
              </Container>
              <Footer />
            </CartProvider>
          </BrowserRouter>
        </div>
      </LangProvider>
    </ThemeProvider>
  );
}

export default App;
