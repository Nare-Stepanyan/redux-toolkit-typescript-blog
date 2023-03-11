import React from "react";
import { useAppDispatch, useAppSelector } from "app/hooks";
import { RootState } from "app/store";
import { Link, useNavigate } from "react-router-dom";
import { Nav, Navbar } from "react-bootstrap";
import { logout } from "redux/features/authSlice";
import headerlogo from "assets/images/headerlogo.png";
import styles from "./header.module.scss";

const Header = () => {
  const { isLoggedIn } = useAppSelector((state: RootState) => state.auth);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { pathname } = window.location;

  const handleLogout = () => {
    dispatch(logout(false));
    navigate("/login");
  };

  return (
    <div className={`${styles.wrapper} pv-30`}>
      {isLoggedIn && (
        <Navbar expand="md" className={styles.navbar}>
          <Navbar.Brand>
            <Link to="/">
              <img src={headerlogo} alt="logo" />
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse
            id="basic-navbar-nav"
            className="justify-content-end align-items-center"
          >
            <Nav className={`${styles.links} d-flex align-items-md-center`}>
              <Link to="/" className="mr-30">
                Products
              </Link>
              <Link to="/" className="mr-30">
                Services
              </Link>
              <Link to="/" className="mr-30">
                Contact
              </Link>
              <Link to="/profile" className="mr-30">
                Profile
              </Link>
              <Link to="#" className="pr-0">
                <button className="pv-15" onClick={handleLogout}>
                  Logout
                </button>
              </Link>
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
