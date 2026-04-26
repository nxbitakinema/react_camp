import { BrowserRouter, Routes, Route, Outlet } from "react-router";

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>

                {/* test  public  page  not  login */}
                <Route path="/" element={   <h6>Home</h6>   } />


                {/* test  private  page  request !! login  +  รูปแบบ path group  */}
                <Route path="admin" element={ <> <h1> n a v b a r </h1> <Outlet /> </>} >  
                    <Route index            element={   <h6>admin</h6>   } />
                    <Route path="dashboard" element={   <h6>dashboard</h6>   } />
                    <Route path="manager"   element={   <h6>manager</h6>   } />
                </Route>
                

                {/* test  page not found */}
                <Route path="*" element={   <h6>PAGE  NOT  FOUND</h6>   } />

            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes