import { useContext } from "react";

import ProductsContext from "./ProductsContext";

const useProducts = () => {
  const products = useContext(ProductsContext);

  if (!products) {
    throw new Error("useProducts must be used inside ProductsProvider");
  }
  return products;
};

export default useProducts;
