import { Navigate, Route, Routes } from "react-router";
import ProductsPage from "./pages/ProductsPage";
import ProductDetailsPage from "./pages/ProductDetailsPage";
import CheckoutPage from "./pages/CheckoutPage";
import PageNotFound from "./pages/404page";
import Layouts from "./layouts/Layouts";

function App() {
  return (
    <Layouts>
      <Routes>
        <Route index element={<Navigate to="/products" replace />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/products/:id" element={<ProductDetailsPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Layouts>
  );
}

export default App;
