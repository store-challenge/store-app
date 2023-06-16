import logo from "./logo.svg";
import "./App.css";
import AuthPage from "./pages/AuthPage/AuthPage";
import AuthProvider from "./components/AuthProvider/AuthProvider";

function App() {
  return (
    <AuthProvider>
      <div className="App">
        <AuthPage />
      </div>
    </AuthProvider>
  )
}

export default App;
