const CartItem = ({ item, cart, setCart }) => {
  let name = item.item.name.substring(0, 20);

  const handleQuantity = (e) => {
    e.stopPropagation();
    let newQuantity;
    let newPrice;
    if (e.currentTarget.textContent === "-") {
      const newCart = cart.items.map((singleItem) => {
        if (singleItem.item.name === item.item.name) {
          newQuantity = singleItem.quantity - 1;
          newPrice = singleItem.price;
          return { ...singleItem, quantity: newQuantity };
        } else {
          return singleItem;
        }
      });

      setCart({
        items: newCart,
        total: cart.total - newPrice,
        quantity: cart.quantity - 1,
      });
    } else {
      const newCart = cart.items.map((singleItem) => {
        if (singleItem.item.name === item.item.name) {
          newQuantity = singleItem.quantity + 1;
          newPrice = singleItem.price;
          return { ...singleItem, quantity: newQuantity };
        } else {
          return singleItem;
        }
      });

      setCart({
        items: newCart,
        total: cart.total + newPrice,
        quantity: cart.quantity + 1,
      });
    }
  };

  if (item.quantity === 0) {
    return "";
  } else {
    return (
      <div className="single-cart-item">
        <img src={item.item.image} alt="not available" className="cart-image" />

        <div className="single-item-details">
          <h4>{name}...</h4>
          <p>$ {item.item.price}</p>
          <div className="quantity-item">
            <button className="quantity-btn" onClick={(e) => handleQuantity(e)}>
              -
            </button>
            <p>{item.quantity}</p>
            <button className="quantity-btn" onClick={(e) => handleQuantity(e)}>
              +
            </button>
          </div>
        </div>
      </div>
    );
  }
};

export default CartItem;
