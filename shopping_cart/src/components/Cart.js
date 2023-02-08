import CartItem from "./CartItem";

const Cart = ({ showCart, setShowCart, cart }) => {
  return (
    <div
      className={
        showCart ? "cart-details-container show" : "cart-details-container"
      }
      onClick={() => setShowCart(false)}
    >
      <div className={showCart ? "inner-cart display" : "inner-cart"}>
        <h1>Your shopping cart</h1>
        <div className="cart-items-container">
          {cart.items.map((item, id) => {
            return <CartItem key={id} item={item} />;
          })}
        </div>
        <h2 className="total-cart">
          Total: <span>$0.00</span>
        </h2>

        <button className="cart-btn green">Checkout</button>
        <button className="cart-btn red" onClick={() => setShowCart(false)}>
          Close
        </button>
      </div>
    </div>
  );
};

export default Cart;
