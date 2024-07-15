import { Outlet } from "react-router-dom";
import NavBar from "./components/navbar/NavBar";
import "./App.css";

export default function App() {
  return (
    <main>
      <NavBar />
      <Outlet />
    </main>
  );
}
