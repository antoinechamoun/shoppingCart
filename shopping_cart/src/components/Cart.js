import { useEffect, useState } from "react";
import CartItem from "./CartItem";

const Cart = ({ showCart, setShowCart, cart, setCart }) => {
  const [total, setTotal] = useState(0);

  const getTotal = () => {
    let total =
      cart.items.length !== 0 &&
      cart.items.reduce((acc, items) => {
        acc = acc + items.item.price * items.quantity;
        return acc;
      }, 0);
    return total;
  };

  useEffect(() => {
    setTotal(getTotal());
    // eslint-disable-next-line
  }, [cart]);

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
          {cart.quantity === 0 ? (
            <h2>Empty card!</h2>
          ) : (
            cart.items.map((item, id) => {
              return (
                <CartItem key={id} item={item} cart={cart} setCart={setCart} />
              );
            })
          )}
        </div>
        <h2 className="total-cart">
          Total: <span>$ {total}</span>
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
