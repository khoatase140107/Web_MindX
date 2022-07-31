import React, { useState } from "react";
import AddToCart from "./AddToCart";

export default function ItemsFoodComponent(props) {
  const { food, addToCart, index } = props;
  const [valueCart,setValueCart] = useState(1);
  
  const onChangeHandler = (e) => {
    const {  value } = e.target;
    setValueCart(+value);
  };

  return (
    <div className="ItemsFoodComponent" key={index}>
      <img className="imgFood" src={food.image} alt="doan" />
      <div className="inforFood">
        <h1 className="nameFoodInfo">{food.name}</h1>
        <p className="desFood">{food.description}</p>
        <p className="priceFood">${food.price}</p>
      </div>
      <div className="addCart">
        <div className="amount">
          <h1 className="amountTitle">Amount</h1>
          <input
            className="amountAdd"
            type="number"
            name="amount"
            onChange={onChangeHandler}
            value={valueCart}
          />
        </div>
        <AddToCart addToCart={addToCart} index={index} valueCart={valueCart} />
      </div>
    </div>
  );
}
