import { useEffect, useState } from "react";
import { useSearchParams } from "react-router";

import SearchBar from "../components/SearchBar";
import useProducts from "../context/products/useProducts";
import ProductCard from "../components/ProductCard";
import Categories from "../components/Categories";
import Loading from "../components/Loading";

import styles from "./ProductsPage.module.css";

function ProductsPage() {
  const products = useProducts();
  const [searchParams, setSearchParams] = useSearchParams();
  const searchQuery = searchParams.get("search")?.toLowerCase();
  const categoryQuery = searchParams.get("category")?.toLowerCase();

  const [search, setSearch] = useState(searchQuery ?? "");

  useEffect(() => {
    const newValue = searchQuery ?? "";
    if (search !== newValue) {
      setSearch(newValue);
    }
  }, [searchQuery]);

  let filteredProducts = products;

  if (searchQuery) {
    filteredProducts = filteredProducts.filter((product) =>
      product.title.toLowerCase().includes(searchQuery),
    );
  }

  if (categoryQuery) {
    filteredProducts = filteredProducts.filter(
      (product) => product.category.toLowerCase() === categoryQuery,
    );
  }

  const handleSearch = () => {
    const normalized = search.toLowerCase().trim();

    if (!normalized) {
      searchParams.delete("search");
      setSearchParams(searchParams);
      return;
    }

    searchParams.set("search", normalized);
    setSearchParams(searchParams);
  };

  const handleCategories = (category) => {
    const normalized = category.toLowerCase().trim();

    if (normalized === "all") {
      searchParams.delete("category");
      setSearchParams(searchParams);
      return;
    }

    searchParams.set("category", normalized);
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
        {!products.length ? (
          <Loading />
        ) : (
          <div className={styles.productContainer}>
            {!filteredProducts.length && !!products.length && (
              <p>there is no product</p>
            )}
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} data={product} />
            ))}
          </div>
        )}
        <div className={styles.category}>
          <aside>
            <Categories
              handleCategories={handleCategories}
              categoryQuery={categoryQuery}
            />
          </aside>
        </div>
      </div>
    </>
  );
}

export default ProductsPage;
