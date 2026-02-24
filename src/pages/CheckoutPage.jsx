import useCart from "../context/cart/useCart";

function CheckoutPage() {
  const { state, dispatch } = useCart();
  return <div>CheckoutPage</div>;
}

export default CheckoutPage;
