const CartItem = ({ item }) => {
    let name = item.item.name.substring(0,20)
  return (
    <div className="single-cart-item">
      <img src={item.item.image} alt="not available" className="cart-image" />

      <div className="single-item-details">
        <h4>{name}...</h4>
        <p>$ {item.item.price}</p>
        <p>{item.quantity}</p>
      </div>
    </div>
  );
};

export default CartItem;
