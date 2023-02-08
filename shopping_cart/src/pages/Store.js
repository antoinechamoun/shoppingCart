import Item from "../components/Item";

const Store = ({ items, cart, setCart }) => {
  return <div className="items-container">
    {items.map((item, id)=>{
        return(
            <Item item={item} cart={cart} setCart={setCart} key={id}/>
        )
    })}
  </div>;
};

export default Store;
