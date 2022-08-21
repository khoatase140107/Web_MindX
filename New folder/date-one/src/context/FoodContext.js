import { createContext, useContext } from "react";

const FoodContext = createContext();

const FoodContextProvider = (props) => {
  const { value } = props;
  return (
    <FoodContext.Provider value={value}>{props.children}</FoodContext.Provider>
  );
};

export const useFoodContext = () => {
  const foodCtx = useContext(FoodContext);
  return foodCtx
};

export default FoodContextProvider;
