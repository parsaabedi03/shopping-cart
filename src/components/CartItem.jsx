import { Minus, Plus, Trash2 } from "lucide-react";

import { shortenText } from "../helper/helper";

import styles from "./CartItem.module.css";

function CartItem({ data: { id, image, title, quantity }, dispatch }) {
  return (
    <div className={styles.cartItem}>
      <img src={image} alt={title} />
      <p>{shortenText(title)}</p>
      <div>
        <button
          className={quantity >= 2 ? "" : styles.dNone}
          onClick={() => dispatch({ type: "DECREASE", payload: id })}
        >
          <Minus className={styles.icons} />
        </button>
        <button
          className={quantity !== 1 ? styles.dNone : ""}
          onClick={() => dispatch({ type: "REMOVE", payload: id })}
        >
          <Trash2 className={styles.icons} />
        </button>

        <span>{quantity}</span>

        <button onClick={() => dispatch({ type: "INCREASE", payload: id })}>
          <Plus className={styles.icons} />
        </button>
      </div>
    </div>
  );
}

export default CartItem;
