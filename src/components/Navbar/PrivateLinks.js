import { NavLink } from "react-router-dom";

const PrivateLinks = () => {
  return (
    <ul id="nav-mobile" className="right hide-on-med-and-down">
      <li>
        <NavLink to="/signup" activeClassName="active--link">
          Sign Up
        </NavLink>
      </li>
      <li>
        <NavLink to="/login" activeClassName="active--link">
          Log In
        </NavLink>
      </li>
    </ul>
  );
};

export default PrivateLinks;
