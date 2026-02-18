import SearchBar from "../components/SearchBar";
import useProducts from "../context/products/useProducts";

function ProductsPage() {
  const products = useProducts();
  console.log(products);
  return (
    <div>
      <SearchBar />
    </div>
  );
}

export default ProductsPage;
