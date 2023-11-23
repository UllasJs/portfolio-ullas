import { Link } from "react-router-dom";
import "./styles/header.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { CgMenuGridO } from "react-icons/cg";
import Offcanvas from "react-bootstrap/Offcanvas";
import { useState } from "react";

export function Header() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
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
          <div className="sidebar-open">
            <CgMenuGridO
              className="menu-btn"
              variant="primary"
              onClick={handleShow}
            />
            <Offcanvas className="canvas-off" show={show} onHide={handleClose}>
              <Offcanvas.Header>
                <Offcanvas.Title className="side-logo">
                  Ulla<span className="acsent-color">s</span>
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <div className="sidebar">
                  <ul className="sidemenu">
                    <li>
                      <Link to="/" className="side-links">
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link to="/projects" className="side-links">
                        Projects
                      </Link>
                    </li>
                    <li>
                      <Link to="/aboutme" className="side-links">
                        About Me
                      </Link>
                    </li>
                    <li>
                      <Link to="/contact" className="side-links">
                        Contacts
                      </Link>
                    </li>
                  </ul>
                </div>
              </Offcanvas.Body>
            </Offcanvas>
          </div>
        </div>
      </nav>
    </div>
  );
}
