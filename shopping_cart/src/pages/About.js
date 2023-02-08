import Contact from "../components/Contact";
const About = () => {
  const contact = [
    {
      image: "https://cdn-icons-png.flaticon.com/512/25/25231.png",
      url: "https://github.com/antoinechamoun",
    },
    {
      image: "https://cdn-icons-png.flaticon.com/512/59/59439.png",
      url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    },
    {
      image:
        "https://image.similarpng.com/very-thumbnail/2021/01/Messenger-icon-illustration-on-transparent-background-PNG.png",
      url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    },
    {
      image:
        "https://www.citypng.com/public/uploads/preview/-51614117422ddshgpwbbp.png",
      url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    },
    {
      image:
        "https://www.clipartmax.com/png/middle/286-2863446_instagram-facebook-twitter-pinterest-vector-instagram-icon-svg.png",
      url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    },
  ];
  return (
    <div className="contact-details">
      {contact.map((contact, id) => {
        return <Contact contact={contact} key={id} />;
      })}
    </div>
  );
};

export default About;
