import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import avatar from "../../assets/logos/avatar-home.png";
import logout from "../../assets/logos/log-out.png";
import logo from "../../assets/logos/logo.png";
import "./NavBar.css";

export default function NavBar({ user }) {
  return (
    <nav className="navbar">
      <img src={logo} alt="logo" className="logo"/>
      <ul>
        <div className="link-nav">
          <Link to="/"> SAVOIR FAIRE </Link>
          <Link to="/collection"> LA COLLECTION </Link>
          {user === null ? (
            <>
              <Link to="signup"> INSCRIPTION </Link>
              <Link to="login"> CONNEXION </Link>
            </>
          ) : (
            <>
              <Link to="/admin">
                <img src={avatar} alt="avatar" className="avatar" />
              </Link>
              <Link to="/logout">
                <img src={logout} alt="logout" className="logout" />
              </Link>
            </>
          )}
        </div>
      </ul>
    </nav>
  );
}

NavBar.propTypes = {
  user: PropTypes.string.isRequired,
};
