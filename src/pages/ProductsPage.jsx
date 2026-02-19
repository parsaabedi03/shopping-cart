import SearchBar from "../components/SearchBar";
import useProducts from "../context/products/useProducts";
import Card from "../components/Card";

import styles from "./ProductsPage.module.css";

function ProductsPage() {
  const products = useProducts();
  return (
    <>
      <div>
        <SearchBar />
      </div>
      <div className={styles.container}>
        <div className={styles.productContainer}>
          {!products.length && <p>is Loading ...</p>}
          {products.map((product) => (
            <Card key={product.id} data={product} />
          ))}
        </div>
        <div className={styles.category}>
          <aside><p>this is category</p></aside>
        </div>
      </div>
    </>
  );
}

export default ProductsPage;
