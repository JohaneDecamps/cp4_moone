import { useOutletContext, Link } from "react-router-dom";
import axios from "axios";

import "./LogoutPage.css"

export default function Logoutpage() {
  const { currentUser, setCurrentUser } = useOutletContext();

  const logout = async () => {
    try {
      await axios.get("http://localhost:3310/api/auth/logout", {
        withCredentials: true,
      });
      setCurrentUser(null);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div className="logoutPage">
      {currentUser == null ? (
        <section  className="logout-auth" >
          <h1> Vous n'etes pas connecté </h1>
          <Link to="/login" className="button-connexion"> Se Connecter </Link>
        </section>
      ) : (
        <section className="logout-auth">
          <h1> Etes-vous sûr de vouloir vous deconnecter ? </h1>

          <button className="button-deconnexion" type="button" onClick={logout}>
            Se deconnecter
          </button>
          <Link to="/" id="button-backhome"> Revenir à l'acceuil </Link>
        </section>
      )}
    </div>
  );
}
