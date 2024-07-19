import { Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import { ToastContainer} from "react-toastify";
import fetchAuth from "./utils/auth";


import NavBar from "./components/navbar/NavBar";
import "./App.css";

export default function App() {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    fetchAuth().then((response) => setCurrentUser(response));
  }, []);

  return (
    <main>
      <NavBar user={currentUser} />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition:Bounce
      />
      <Outlet context={{ currentUser, setCurrentUser }} />
    </main>
  );
}
