import "./navbar.css";
import logo from "../../assets/logo.svg";
import moon from "../../assets/icon-moon.svg";
import avatar from "../../assets/image-avatar.jpg";

import { Link } from "react-router-dom";
import Dropdown from "../Dropdown";

const NavBar = (props) => {
  const handleLogout = (e) => {
    e.preventDefault();

    props.handleLogout();
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/">
          <img src={logo} alt="Logo" />
        </Link>
      </div>
      <div className="theme-toggle">
        <img src={moon} alt="" />
      </div>
      {props.user ? (
        <div className="flex avatar-container">
          <div className="avatar">
            <img src={avatar} alt="" />
          </div>
          <Dropdown
            dropdownState={{
              closed: true,
            }}
          >
            <Link to="/dashboard">Invoices</Link>
            <Link to="/profile">Profile</Link>
            <button onClick={(e) => handleLogout(e)}>Logout</button>
          </Dropdown>
        </div>
      ) : (
        <div>
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
