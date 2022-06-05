import "./About.css";
// import Award from "../../img/award.png";

const About = () => {
  return (
    <div className="a">
      <div className="a-center">
        <h1 className="a-title">About Me</h1>
        <h2 className="a-sub">Howdy!</h2>
        <p className="a-desc">
          My name is Dennis Khaperskov, and I am a recent graduate from Florida
          SouthWestern State College and the University of Central Florida's
          Full Stack Web Development Bootcamp. I enjoy working with React apps
          and MongoDB Databases.
        </p>
        <button
          onClick={() =>
            window.open(
              "https://docs.google.com/document/d/1j8MZ70quA3liKtEEYbVVCoZ9nufc5MiR_P2yVh37XZA/edit?usp=sharing",
              "_blank"
            )
          }
        >
          Resume
        </button>
      </div>
    </div>
  );
};

export default About;
