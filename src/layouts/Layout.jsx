import { Outlet } from "react-router";
import Navbar from "../components/navbar/Navbar";

const Layout = () => {
  return (
    <div>
      <Navbar />

      {/*  Outlet  ไม่ใช่หน้าเป็นตัวโชว์ content ในหน้านั้นๆ */}
      <Outlet />
    </div>
  );
};
export default Layout;
