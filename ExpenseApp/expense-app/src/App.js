import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import routes from "./pages/routes";
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          {routes.map(({ component: Component, path, ...rest }) => {
            return <Route  path={path} element={<Component />}  key={path} {...rest} />;
          })}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
