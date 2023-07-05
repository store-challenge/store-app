import "./App.css";
import CatalogPage from "./pages/CatalogPage/CatalogPage";
import Footer from "./components/Footer/Footer"


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
