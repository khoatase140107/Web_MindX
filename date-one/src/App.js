import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import HomePage from './pages/HomePage/HomePage';
import CheckOutPage from './pages/CheckoutPage/CheckOutPage';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route  path='/' element={<HomePage />}/>
          <Route  path='/checkout' element={<CheckOutPage />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
