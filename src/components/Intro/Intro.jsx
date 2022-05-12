import "./Intro.css";
import { Link } from "react-scroll";
// import Me from "../../img/me.png";

const Intro = () => {
  return (
    <div className="i">
      <div className="i-center">
        <div className="i-center-wrapper">
          <h2 className="i-intro">Hello, My name is</h2>
          <h1 className="i-name">Dennis Khaperskov</h1>
          <div className="i-title">
            <div className="i-title-wrapper">
              <div className="i-title-item">Web Developing</div>
              <div className="i-title-item">UI/UX Design</div>
              <div className="i-title-item">Front End</div>
              <div className="i-title-item">Back End</div>
              <div className="i-title-item">Full Stack</div>
            </div>
          </div>
          <p className="i-desc">
            I am a Full-Stack Web Developer Specializing in the MERN stack!
          </p>
          <div className="i-scroll-container">
            <div className="i-scroll-click">
              <Link
                activeClass="active"
                to="a"
                spy={true}
                smooth={true}
                className="navbar-item1"
              >
                <svg
                  width="30px"
                  height="30px"
                  viewBox="0 0 30 30"
                  id="_22_-_Down"
                  data-name="22 - Down"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    id="Path_209"
                    data-name="Path 209"
                    d="M16,1A15,15,0,1,0,31,16,15.007,15.007,0,0,0,16,1Zm0,2A13,13,0,1,1,3,16,13.006,13.006,0,0,1,16,3Z"
                    transform="translate(-1 -1)"
                  />
                  <path
                    id="Path_210"
                    data-name="Path 210"
                    d="M21.293,12.293,16,17.586l-5.293-5.293a1,1,0,0,0-1.414,1.414l6,6a1,1,0,0,0,1.414,0l6-6a1,1,0,1,0-1.414-1.414Z"
                    transform="translate(-1 -1)"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
