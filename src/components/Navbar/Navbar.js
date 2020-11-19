import { Link } from "react-router-dom";

import PrivateLinks from "./PrivateLinks";
import PublicLinks from "./PublicLinks";

const Navbar = (props) => {
  return (
    <nav>
      <div className="container nav-wrapper">
        <Link to="/" className="brand-logo">
          Chat
        </Link>
        <PublicLinks />
        <PrivateLinks />
      </div>
    </nav>
  );
};

export default Navbar;
