import { useReducer } from "react";
import CartContext from "./CartContext";

const initialState = {
  data: [],
  total: 0,
  status: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      return {
        ...state,
        data: [...state.data, { ...action.payload, quantity: 1 }],
      };
    case "REMOVE":
      return {
        ...state,
        data: state.data.filter((item) => item.id !== action.payload),
      };
    case "INCREASE":
      return {
        ...state,
        data: state.data.map((item) =>
          item.id === action.payload
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        ),
      };
    case "DECREASE":
      return {
        ...state,
        data: state.data.map((item) =>
          item.id === action.payload
            ? { ...item, quantity: item.quantity - 1 }
            : item,
        ),
      };
    default:
      throw new Error("Invalid Action");
  }
};

function CartProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
}

export default CartProvider;
