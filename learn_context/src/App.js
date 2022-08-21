import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import PrivateRoute from "./components/PrivateRoute";
import AuthenState from "./Context/AuthenContext/AuthenState";
import Chart from "./components/Chart";
function App() {
  return (
    <div className="App">
      <Router>
        <AuthenState>
          <Routes>
            <Route
              path="/"
              element={<PrivateRoute component={<HomePage />} />}
            />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/chart" element={<Chart />} />
          </Routes>
        </AuthenState>
      </Router>
    </div>
  );
}

export default App;
