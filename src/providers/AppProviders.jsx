import ProductsProvider from "../context/products/ProductsProvider";

function AppProviders({ children }) {
  return <ProductsProvider>{children}</ProductsProvider>;
}

export default AppProviders;
