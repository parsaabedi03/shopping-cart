import { useEffect, useState } from "react";

import SearchBar from "../components/SearchBar";
import useProducts from "../context/products/useProducts";
import ProductCard from "../components/ProductCard";
import Categories from "../components/Categories";

import styles from "./ProductsPage.module.css";

function ProductsPage() {
  const products = useProducts();
  const [search, setSearch] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    setFilteredProducts(products);
  }, [products]);

  const handleSearch = () => {
    const normalized = search.toLowerCase().trim();

    if (!normalized) {
      setFilteredProducts(products);
      return;
    }

    const newProducts = products.filter((product) =>
      product.title.toLowerCase().includes(normalized),
    );

    setFilteredProducts(newProducts);
  };

  return (
    <>
      <div>
        <SearchBar
          search={search}
          setSearch={setSearch}
          handleSearch={handleSearch}
        />
      </div>
      <div className={styles.container}>
        <div className={styles.productContainer}>
          {!filteredProducts.length && <p>is Loading ...</p>}
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} data={product} />
          ))}
        </div>
        <div className={styles.category}>
          <aside>
            <Categories />
          </aside>
        </div>
      </div>
    </>
  );
}

export default ProductsPage;
