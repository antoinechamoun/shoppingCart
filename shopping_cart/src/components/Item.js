const Item = ({ item, cart, setCart }) => {
  const { name, image, price } = item;

  const addToCart = () => {
    let total = cart.total + item.price;
    let quantity = cart.quantity + 1;
    let found = cart.items.find((item) => item.item.name === name);

    let newCart = cart.items.map((singleItem) => {
      if (singleItem.item.name === name) {
        let newQuantity = singleItem.quantity + 1;
        return { ...singleItem, quantity: newQuantity };
      }
      return singleItem;
    });

    if (found) {
      setCart({ items: newCart, total, quantity });
    } else {
      setCart({
        items: [...cart.items, { item: item, quantity: 1 }],
        total: total,
        quantity: quantity,
      });
    }
  };

  return (
    <div className="single-item">
      <img src={image} alt="not available" className="item-image" />
      <div className="item-details">
        <h3>{name}</h3>
        <p>$ {price}</p>
      </div>
      <div className="btn-container">
        <button className="add-btn" onClick={() => addToCart()}>
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default Item;
