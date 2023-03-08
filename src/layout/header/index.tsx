import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Nav, Navbar } from "react-bootstrap";
import headerlogo from "assets/images/headerlogo.png";
import styles from "./header.module.scss";

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const { pathname } = window.location;

  return (
    <div className={`${styles.wrapper} pv-30`}>
      {isLoggedIn && (
        <Navbar expand="md" className={styles.navbar}>
          <Navbar.Brand href="/">
            <img src={headerlogo} alt="logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse
            id="basic-navbar-nav"
            className="justify-content-end align-items-center"
          >
            <Nav className={`${styles.links} d-flex align-items-md-center`}>
              <Nav.Link href="#" className="mr-30">
                Products
              </Nav.Link>
              <Nav.Link href="#" className="mr-30">
                Services
              </Nav.Link>
              <Nav.Link href="#" className="mr-30">
                Contact
              </Nav.Link>
              <Nav.Link href="/profile" className="mr-30">
                Profile
              </Nav.Link>
              <Nav.Link href="/login" className="pr-0">
                <button className="pv-15">Logout</button>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      )}
      {pathname === "/login" && !isLoggedIn && (
        <div className={styles.wrapper}>
          <div>
            <img src={headerlogo} alt="logo" />
          </div>
          <div className={styles.links}>
            <Link to="/register" className="ml-30">
              <button className="pv-15">Register</button>
            </Link>
          </div>
        </div>
      )}
      {pathname === "/register" && !isLoggedIn && (
        <div className={styles.wrapper}>
          <div>
            <img src={headerlogo} alt="logo" />
          </div>
          <div className={styles.links}>
            <Link to="/login" className="ml-30">
              <button className="pv-15">Sign in</button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
