import { Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import fetchAuth from "./utils/auth";

import NavBar from "./components/navbar/NavBar";
import "./App.css";

export default function App() {
const [currentUser, setCurrentUser] = useState(null)

useEffect(() => {
  fetchAuth().then((response) => setCurrentUser(response));
}, []);

  return (
    <main>
      <p>  {currentUser?.firstname} </p>
      <NavBar />
      <Outlet context= {{currentUser, setCurrentUser}} />
    </main>
  );
}
