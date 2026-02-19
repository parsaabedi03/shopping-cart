import { useEffect, useState } from "react";
import { useParams } from "react-router";
import api from "../services/config";

function ProductDetailsPage() {
  const [productDetails, setProductDetails] = useState([]);
  const { id } = useParams();

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
    <div>
      <h3>{productDetails.title}</h3>
    </div>
  );
}

export default ProductDetailsPage;
