import { Handbag, LayoutList, Minus, Plus, Trash2 } from "lucide-react";
import { Link } from "react-router";

import { shortenText } from "../helper/helper";

import styles from "./Card.module.css";

function Card({ data }) {
  const { id, image, title, price } = data;

  return (
    <div className={styles.card}>
      <img src={image} alt={title} />
      <div className={styles.info}>
        <p className={styles.productTitle}>{shortenText(title)}</p>
        <p className={styles.productPrice}>{price} $</p>
      </div>
      <div className={styles.actions}>
        <Link to={`/products/${id}`}>
          <LayoutList className={styles.prodcutDetails} />
        </Link>
        <div className={styles.buttons}>
          <button style={{ display: "none" }}>
            <Minus className={styles.icons} />
          </button>
          <button style={{ display: "none" }}>
            <Plus className={styles.icons} />
          </button>
          <button style={{ display: "none" }}>
            <Trash2 className={styles.icons} />
          </button>
          <button>
            <Handbag className={styles.icons} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;
