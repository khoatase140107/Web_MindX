import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import CheckOutPage from "./pages/CheckoutPage/CheckOutPage";
import FoodContextProvider from "./context/FoodContext";
import React, { useState, useEffect } from "react";
import axios from "axios";
import CartContextProvider from "./context/CartContext";
function App() {
  const [allFood, setAllFood] = useState(null);
  const [cart, setCart] = useState(null);
  useEffect(() => {
    getAllFoodFromAPI();
  }, []);

  const getAllFoodFromAPI = async () => {
    try {
      const response = await axios.get(
        `https://625a91bf0ab4013f94a2d9a8.mockapi.io/meals`
      );
      if (response.status === 200) {
        setAllFood(response.data.slice(0, 4));
        console.log(response.data.slice(0, 4))
        setCart([0, 0, 0, 0]);
      }
    } catch (err) {
      console.error(err);
    }
  };

  const addToCart = (index, number) => {
    const newCart = [...cart];
    newCart[index] += Number(number);
    setCart([...newCart]);
  };
  return (
    <div className="App">
      <BrowserRouter>
        <FoodContextProvider
          value={{ allFood: allFood, cart: cart, addToCart }}
        >
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/checkout" element={<CheckOutPage />} />
          </Routes>
        </FoodContextProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
