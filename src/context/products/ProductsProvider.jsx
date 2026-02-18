import { useEffect, useState } from "react";

import api from "../../services/config.js";
import ProductsContext from "./ProductsContext.jsx";

function ProductsProvider({ children }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProdcuts = async () => {
      try {
        setProducts(await api.get("products"));
      } catch (error) {
        console.log(error.message);
      }
    };
    getProdcuts();
  }, []);

  return (
    <ProductsContext.Provider value={products}>
      {children}
    </ProductsContext.Provider>
  );
}

export default ProductsProvider;
