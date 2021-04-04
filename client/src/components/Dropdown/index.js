import { useState } from "react";
import "./dropdown.css";
const Dropdown = (props) => {
  console.log(props);
  const [dropdownState, setDropdownState] = useState(props.dropdownState);

  const handleToggle = () => {
    setDropdownState({
      closed: !dropdownState.closed,
    });
  };

  return (
    <div className="dropdown-container">
      <button onClick={handleToggle} className="dropdown-toggle"></button>
      <div
        className={`dropdown-items ${
          dropdownState.closed ? "dropdown-hide" : ""
        }`}
      >
        {props.children}
      </div>
    </div>
  );
};

export default Dropdown;
