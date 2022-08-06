import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AuthenContextProvider from "./Context/AuthenContext";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import PrivateRoute from "./components/PrivateRoute";
function App() {
  return (
    <div className="App">
      <Router>
        <AuthenContextProvider>
          <Routes>
            <Route
              path="/"
              element={<PrivateRoute component={<HomePage />} />}
            />
            <Route path="/login" element={<LoginPage />} />
          </Routes>
        </AuthenContextProvider>
      </Router>
    </div>
  );
}

export default App;
