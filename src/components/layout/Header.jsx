import React from "react";
import { Link } from "react-scroll";
import "./Header.css";

function Header() {
  return (
    <header>
      <div className="container-nav">
        <div className="titles"></div>
        <nav>
          <ul>
            <li>
              <Link
                activeClass="active"
                to="a"
                spy={true}
                smooth={true}
                className="navbar-item1"
              >
                About Me
              </Link>
            </li>
            <li>
              <Link
                activeClass="active"
                to="pl"
                spy={true}
                smooth={true}
                className="navbar-item1"
              >
                My Work
              </Link>
            </li>
            <li>
              <Link
                activeClass="active"
                to="c"
                spy={true}
                smooth={true}
                className="navbar-item1"
              >
                Contact Me
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
