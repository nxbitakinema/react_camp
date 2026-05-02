import { BrowserRouter, Routes, Route, Outlet } from "react-router";
import Home from "../pages/Home";
import About from "../pages/About";
import Dashboard from "../pages/admin/Dashboard";
import Manage from "../pages/admin/Manage";
import Notfound from "../pages/Notfound";
import Layout from "../layouts/Layout";
import LayoutAdmin from "../layouts/LayoutAdmin";
import Camping from "@/pages/admin/Camping";

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>

                {/* public  page  not  login */}
                <Route element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="about" element={<About />} />
                </Route>


                {/* private  page  request !! login */}
                <Route path="admin" element={ <LayoutAdmin /> } >  
                    <Route index            element={   <Dashboard />  } />
                    <Route path="manage"    element={   <Manage />     } />
                    <Route path="camping"   element={   <Camping />    } />
                </Route>
                

                {/* page not found */}
                <Route path="*" element={  <Notfound />  } />

            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes