import { Link } from "react-router-dom";

const Contact = ({ contact }) => {
  return (
    <div >
      <Link to={contact.url}>
        <img src={contact.image} alt="not available" className="contact-detail"/>
      </Link>
    </div>
  );
};

export default Contact;
