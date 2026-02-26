import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { ArrowLeft, SquareStack, Tag } from "lucide-react";

import api from "../services/config";

import styles from "./ProductDetailsPage.module.css";
import Loading from "../components/Loading";

function ProductDetailsPage() {
  const [productDetails, setProductDetails] = useState(null);
  const { id } = useParams();

  const navigate = useNavigate();

  useEffect(() => {
    const getProductDetails = async () => {
      try {
        setProductDetails(await api.get(`/products/${id}`));
      } catch (error) {
        console.log(error.message);
      }
    };
    getProductDetails();
  }, [id]);
  return (
    <div className={styles.container}>
      {productDetails ? (
        <>
          <div className={styles.image}>
            <img src={productDetails.image} alt={productDetails.title} />
          </div>
          <div className={styles.info}>
            <h3>{productDetails.title}</h3>
            <p className={styles.description}>{productDetails.description}</p>
            <p className={styles.category}>
              <SquareStack className={styles.icon} />
              {productDetails.category}
            </p>
            <div className={styles.productActions}>
              <p>
                <Tag className={styles.icon} /> {productDetails.price} $
              </p>
              <button onClick={() => navigate("/products")}>
                <ArrowLeft className={styles.icon} />
                Back to shop
              </button>
            </div>
          </div>
        </>
      ) : (
        <Loading />
      )}
    </div>
  );
}

export default ProductDetailsPage;
