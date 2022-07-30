import axios from "axios";
import React, { useState, useEffect } from "react";
import CartComponet from "../../components/CartComponet";
import ItemsFoodComponent from "../../components/ItemsFoodComponent";
import "./style/style.css";

export default function HomePage() {
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
        setCart([0, 0, 0, 0]);
      }
    } catch (err) {
      console.error(err);
    }
  };

  const addToCart = (index, number) => {
    const newCart = cart;
    newCart[index] += Number(number);
    
    setCart([...newCart]);
  };

  return (
    <div className="homePage">
      <div className="headerHomePage">
        <h1 className="nameFood">ReactMeals</h1>
        <CartComponet cart={cart} allFood={allFood} addToCart={addToCart} />
      </div>
      <div className="imgHomePage">
        <img
          className="imgPage"
          src="https://bloganchoi.com/wp-content/uploads/2019/12/the-gioi-an-vat-sai-gon.jpg"
          alt="doan"
        />
      </div>
      <div className="homePageInFor">
        <div className="inforHome">
          <h1>Delicous Food, Delivered To You</h1>
          <p>
            Choose your favorite meal from our broad selection of available
            meals and enjoy a delicous lunch or dinner at home
          </p>
          <p>
            All our meals are cooked with high-quality ingredients, just-in-time
            and of course by experienced chefs
          </p>
        </div>
      </div>
      {allFood !== null ? (
        <div className="itemFood">
          <div className="foodInfo">
            {allFood.map((item, index) => {
              return (
                <ItemsFoodComponent
                  food={item}
                  index={index}
                  addToCart={addToCart}
                />
              );
            })}
          </div>
        </div>
      ) : null}
    </div>
  );
}
