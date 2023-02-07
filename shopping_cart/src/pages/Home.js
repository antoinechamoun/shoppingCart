import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home-container">
      <div className="title-container">
        <div>
          <h1 className="homepage-title">Online grocery Store & Delivery</h1>
          <h2 className="homepage-subtitle">Fresh and organic</h2>
        </div>
        <Link to={"/store"} className="shop-btn">
          SHOP NOW
        </Link>
      </div>
      <img
        className="grocery-bg"
        src="/images/grocery1.jpg"
        alt="Not available"
      />
    </div>
  );
};

export default Home;
