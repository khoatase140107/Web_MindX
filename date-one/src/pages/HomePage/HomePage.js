import React, { useState, useEffect } from "react";
import CartComponet from "../../components/CartComponet";
import ItemsFoodComponent from "../../components/ItemsFoodComponent";
import { useFoodContext } from "../../context/FoodContext";
import "./style/style.css";

export default function HomePage() {
  const foodCtx = useFoodContext();
  const {allFood} = foodCtx;
  
  return (
    <div className="homePage">
      <div className="headerHomePage">
        <h1 className="nameFood">ReactMeals</h1>
        <CartComponet />
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
              return <ItemsFoodComponent food={item} index={index} />;
            })}
          </div>
        </div>
      ) : null}
    </div>
  );
}
