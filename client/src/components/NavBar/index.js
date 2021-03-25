import "./navbar.css";
import logo from "../../assets/logo.svg";
import moon from "../../assets/icon-moon.svg";
import avatar from "../../assets/image-avatar.jpg";
const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>
      <div className="theme-toggle">
        <img src={moon} alt="" />
      </div>
      <div className="avatar">
        <img src={avatar} alt="" />
      </div>
    </nav>
  );
};

export default NavBar;
