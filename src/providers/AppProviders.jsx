import CartProvider from "../context/cart/CartProvider";
import ProductsProvider from "../context/products/ProductsProvider";

function AppProviders({ children }) {
  return (
    <ProductsProvider>
      <CartProvider>{children}</CartProvider>
    </ProductsProvider>
  );
}

export default AppProviders;
