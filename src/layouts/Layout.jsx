import { Outlet } from "react-router"

const Layout = () => {
  return (
    <div>
        layout  main  navbar

         {/*  Outlet  ไม่ใช่หน้าเป็นตัวโชว์ content ในหน้านั้นๆ */}
        <Outlet />    
    </div>
  )
}
export default Layout