import { useState } from "react";

const Item = ({ item, cart, setCart }) => {
  const [found, setFound] = useState(false);
  const addToCart = () => {
    let total = cart.total + item.price;
    let quantity = cart.quantity + 1;
    setFound(false);

    cart.items.map((singleItem) => {
      if (singleItem.item.name === item.name) {
        console.log(2);
        singleItem.quantity += 1;
        setFound(true);
        setCart({ items: [...cart.items], total: total, quantity: quantity });
        return item;
      }
      return item;
    });

    if (!found) {
      console.log(1);
      setCart({
        items: [...cart.items, { item: item, quantity: 1 }],
        total: total,
        quantity: quantity,
      });
    }
  };
  return (
    <div className="single-item">
      <img src={item.image} alt="not available" className="item-image" />
      <div className="item-details">
        <h3>{item.name}</h3>
        <p>$ {item.price}</p>
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
