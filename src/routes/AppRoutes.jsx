import { BrowserRouter, Routes, Route, Outlet } from "react-router";
import Home from "../pages/Home";
import About from "../pages/About";
import Dashboard from "../pages/admin/Dashboard";
import Manage from "../pages/admin/Manage";
import Notfound from "../pages/Notfound";
import Layout from "../layouts/Layout";
import LayoutAdmin from "../layouts/LayoutAdmin";

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>

                {/* test  public  page  not  login */}
                <Route element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="about" element={<About />} />
                </Route>


                {/* test  private  page  request !! login  +  รูปแบบ path group  */}
                <Route path="admin" element={ <LayoutAdmin /> } >  
                    <Route index            element={   <Dashboard />  } />
                    <Route path="manage"   element={   <Manage />  } />
                </Route>
                

                {/* test  page not found */}
                <Route path="*" element={  <Notfound />  } />

            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes