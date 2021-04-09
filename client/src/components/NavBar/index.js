import "./navbar.css";
import logo from "../../assets/logo.svg";
import moon from "../../assets/icon-moon.svg";
import avatar from "../../assets/image-avatar.jpg";

import Dropdown from "../Dropdown";

const NavBar = (props) => {
  const handleLogout = (e) => {
    e.preventDefault();

    props.handleLogout();
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <img src={logo} alt="Logo" />
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
            <a href="#">Your Invoices</a>
            <a href="#">Profile</a>
            <a href="#" onClick={(e) => handleLogout(e)}>
              Logout
            </a>
          </Dropdown>
        </div>
      ) : (
        <div>
          <a href="">Login</a>
          <a href="">Register</a>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
