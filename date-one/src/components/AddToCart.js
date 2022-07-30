import React from "react";  

export default function AddToCart(props){
    const {addToCart,index,valueCart} = props;
    return(
        <button className="btnAdd" onClick={() => {
            addToCart(index,valueCart);
        }}>
           +Add
        </button>
    )
}