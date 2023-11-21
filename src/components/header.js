import { Link } from "react-router-dom";
import "./styles/header.css";
import "bootstrap/dist/css/bootstrap.min.css";

export function Header() {
  return (
    <div className="header">
      <nav>
        <h3>
          Ulla<span className="acsent-color">s</span>
        </h3>
        <div>
          <ul className="menu-list">
            <li>
              <Link className="menu-links" to="/">
                Home
              </Link>
            </li>
            <li>
              <Link className="menu-links" to="/projects">
                Projects
              </Link>
            </li>
            <li>
              <Link className="menu-links" to="/aboutme">
                About Me
              </Link>
            </li>
            <li>
              <Link className="menu-links" to="/contact">
                Contact
              </Link>
            </li>
          </ul>
          <div className="sidebar-open">hi</div>
        </div>
      </nav>
    </div>
  );
}
