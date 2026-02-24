import { Handbag, LayoutList, Minus, Plus, Trash2 } from "lucide-react";
import { Link } from "react-router";

import { shortenText } from "../helper/helper";

import styles from "./Card.module.css";
import useCart from "../context/cart/useCart";

function Card({ data }) {
  const { id, image, title, price } = data;
  const { state, dispatch } = useCart();

  const getQuantity = state.data.find((item) => item.id === id);

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
          <button
            className={getQuantity?.quantity >= 2 ? "" : styles.dNone}
            onClick={() => dispatch({ type: "DECREASE", payload: id })}
          >
            <Minus className={styles.icons} />
          </button>
          <button
            className={getQuantity?.quantity !== 1 ? styles.dNone : ""}
            onClick={() => dispatch({ type: "REMOVE", payload: id })}
          >
            <Trash2 className={styles.icons} />
          </button>

          {getQuantity?.quantity >= 1 && <span>{getQuantity.quantity}</span>}

          <button
            className={getQuantity?.quantity >= 1 ? "" : styles.dNone}
            onClick={() => dispatch({ type: "INCREASE", payload: id })}
          >
            <Plus className={styles.icons} />
          </button>
          <button
            className={getQuantity?.quantity >= 1 ? styles.dNone : ""}
            onClick={() => dispatch({ type: "ADD", payload: data })}
          >
            <Handbag className={styles.icons} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;
