import { Outlet } from "react-router";
import Navbar from "../components/navbar/Navbar";

const LayoutAdmin = () => {
  return (
    <main className="container">
      <Navbar />
      <Outlet />
    </main>
  );
};
export default LayoutAdmin;
