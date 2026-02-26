import { useEffect, useState } from "react";
import { useSearchParams } from "react-router";

import SearchBar from "../components/SearchBar";
import useProducts from "../context/products/useProducts";
import ProductCard from "../components/ProductCard";
import Categories from "../components/Categories";

import styles from "./ProductsPage.module.css";

function ProductsPage() {
  const products = useProducts();
  const [searchParams, setSearchParams] = useSearchParams();
  const searchQuery = searchParams.get("search")?.toLowerCase();

  const [search, setSearch] = useState(searchQuery ?? "");

  useEffect(() => {
    const newValue = searchQuery ?? "";
    if (search !== newValue) {
      setSearch(newValue);
    }
  }, [searchQuery]);

  const filteredProducts = !searchQuery
    ? products
    : products.filter((product) =>
        product.title.toLowerCase().includes(searchQuery),
      );

  const handleSearch = () => {
    const normalized = search.toLowerCase().trim();

    if (!normalized) {
      searchParams.delete("search");
      setSearchParams(searchParams);
      return;
    }

    searchParams.append("search", normalized);
    setSearchParams(searchParams);
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
