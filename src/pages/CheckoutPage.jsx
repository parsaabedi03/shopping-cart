import { CircleCheckBig, Hash, Receipt } from "lucide-react";

import useCart from "../context/cart/useCart";

import styles from "./CheckoutPage.module.css";
import CartItem from "../components/CartItem";

function CheckoutPage() {
  const { state, dispatch } = useCart();

  const total = state.data.reduce(
    (acc, cur) => (acc += cur.price * cur.quantity),
    0,
  );

  const quantity = state.data.reduce((acc, cur) => (acc += cur.quantity), 0);

  return (
    <div className={styles.container}>
      {state.data.length ? (
        <>
          <div className={styles.cartSummary}>
            <p>
              <Receipt className={styles.icon} />
              Totoal: <span>{total.toFixed(2)} $</span>
            </p>
            <p>
              <Hash className={styles.icon} />
              Quantity: <span>{quantity}</span>
            </p>
            <p>
              <CircleCheckBig className={styles.icon} />
              Status: <span>{!state.status ? "pending ..." : ""}</span>
            </p>
            <button
              className={styles.checkoutbutton}
              onClick={() => dispatch({ type: "CHECKOUT" })}
            >
              Checkout
            </button>
          </div>
          <div className={styles.cartItems}>
            {state.data.map((item) => (
              <CartItem key={item.id} data={item} dispatch={dispatch} />
            ))}
          </div>
        </>
      ) : (
        <p>There is no product here</p>
      )}
    </div>
  );
}

export default CheckoutPage;
