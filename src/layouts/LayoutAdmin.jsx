import { Outlet } from "react-router"
import Navbar from "../components/navbar/Navbar"

const LayoutAdmin = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  )
}
export default LayoutAdmin