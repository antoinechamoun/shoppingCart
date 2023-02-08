import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from "./components/Cart";
import Header from "./components/Header";
import About from "./pages/About";
import Home from "./pages/Home";
import Store from "./pages/Store";

function App() {
  const [showCart, setShowCart] = useState(false);
  const items = [
    {
      name: "ORIGINAL FLAVOUR SLICES VEGAN CHEESE",
      image:
        "https://cdn.shopify.com/s/files/1/0463/5816/7716/products/350830011597047408_825x_crop_center.png?v=1603895571",
      price: 14,
    },
    {
      name: "ORIGINAL FLAVOUR SLICES VEGAN CHEDDAR CHEESE",
      image:
        "https://cdn.shopify.com/s/files/1/0463/5816/7716/products/350830021597047870_825x_crop_center.png?v=1603895609",
      price: 13,
    },
    {
      name: "ORIGINAL FLAVOUR SLICES VEGAN Butter CHEESE",
      image:
        "https://cdn.shopify.com/s/files/1/0463/5816/7716/products/014340101595316366_825x_crop_center.png?v=1603889612",
      price: 14,
    },
    {
      name: "BAKED POTATO CHIPS HONEY MUSTARD 65% LESS FAT",
      image:
        "https://cdn.shopify.com/s/files/1/0463/5816/7716/products/Snips-Baked-Potato-chips-Honey-Mustard_825x_crop_center.png?v=1628575081",
      price: 2,
    },
    {
      name: "SKIMMED MILK POWDER 0% FAT 800GRS",
      image:
        "https://cdn.shopify.com/s/files/1/0463/5816/7716/products/skimmed-milk-powder-0-fat-01001071_e3206a77-fed7-4a1a-b7df-6eeb1d9da53b_1024x1024.png?v=1605811220",
      price: 12,
    },
    {
      name: "ELLE&VIRE, MASCARPONE Vegeterian 1L",
      image:
        "https://cdn.shopify.com/s/files/1/0463/5816/7716/products/mascarpone-01401198_825x_crop_center.png?v=1603889559",
      price: 23,
    },
  ];
  const [cart, setCart] = useState({
    items: [],
    total: 0,
    quantity: 0,
  });
  return (
    <BrowserRouter>
      <Header setShowCart={setShowCart} cart={cart} />
      <Cart
        showCart={showCart}
        setShowCart={setShowCart}
        cart={cart}
        setCart={setCart}
      />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/store"
          element={<Store items={items} cart={cart} setCart={setCart} />}
        />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
