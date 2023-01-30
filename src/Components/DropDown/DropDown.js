import Dropdown from "react-bootstrap/Dropdown";
import { HiOutlineUserCircle } from "react-icons/hi";
import { Link } from "react-router-dom";

const DropDown = () => {
  return (
    <Dropdown className="ms-2">
      <Dropdown.Toggle id="dropdown-button-dark-example1" variant="">
        <HiOutlineUserCircle className="fs-2 text-secondary"></HiOutlineUserCircle>
      </Dropdown.Toggle>
      <Dropdown.Menu>
        <Link to="/logIn" className="dropdown-item">
          Log In
        </Link>
        <Link to="/signUp" className="dropdown-item">
          Sign Up
        </Link>
        <Dropdown.Divider />
        <Link to="/askedQuestions" className="dropdown-item">
          FAQ
        </Link>
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default DropDown;
