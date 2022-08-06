import { createContext, useContext } from "react";

const CartContext = createContext();

const CartContextProvider = (props) => {
  const { value } = props;
  return (
    <CartContext.Provider value={value}>{props.children}</CartContext.Provider>
  );
};

export const useCartContext = () => {
  const cartCtx = useContext(CartContext);
  return cartCtx;
};

export default CartContextProvider;
