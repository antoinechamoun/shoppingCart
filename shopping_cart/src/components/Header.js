import { Link } from "react-router-dom";
import { BsCart3 } from "react-icons/bs";
import { useRef } from "react";

const Head = ({setShowCart, cart}) => {
  const storeRef = useRef();
  const aboutRef = useRef();
  const homeRef = useRef();

  const handleClick = (e) => {
    switch (e.target.textContent) {
      case "Home":
        homeRef.current.className = "links links-active";
        storeRef.current.className = aboutRef.current.className = "links";
        break;
      case "Store":
        storeRef.current.className = "links links-active";
        homeRef.current.className = aboutRef.current.className = "links";
        break;
      case "About":
        aboutRef.current.className = "links links-active";
        storeRef.current.className = homeRef.current.className = "links";
        break;

      default:
        break;
    }
  };

  return (
    <nav className="nav-container">
      <h1>
        <Link className="title-link" to={"/"}>
          Grocery Store
        </Link>
      </h1>
      <ul>
        <li>
          <Link
            className="links"
            ref={homeRef}
            onClick={(e) => handleClick(e)}
            to={"/"}
          >
            Home
          </Link>
        </li>
        <li>
          <Link className="links" onClick={(e) => handleClick(e)} ref={storeRef} to={"/store"}>
            Store
          </Link>
        </li>
        <li>
          <Link className="links" onClick={(e) => handleClick(e)} ref={aboutRef} to={"/about"}>
            About
          </Link>
        </li>
      </ul>
      <div className="cart-container">
        <p className="cart-notification">{cart.quantity}</p>
        <BsCart3 className="shopping-icon" onClick={()=>setShowCart(true)}/>
      </div>
    </nav>
  );
};

export default Head;
