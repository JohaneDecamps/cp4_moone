import { Link } from "react-router-dom";
import avatar from "../../assets/logos/avatar-home.png";

import "./NavBar.css";

export default function NavBar() {
  return (
    <nav className="navbar">
      <ul>
        <div className="link-nav">
        <Link to="/"> SAVOIR FAIRE  </Link>
        <Link to="/collection"> LA COLLECTION </Link>
        
        <Link to="/admin">
          <img src={avatar} alt="avatar" className="avatar" />
        </Link>
        </div>
      </ul>
    </nav>
  );
}
