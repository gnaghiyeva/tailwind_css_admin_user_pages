import AdminLogin from "../pages/Admin/AdminLogin";
import AdminRoot from "../pages/Admin/AdminRoot";
import Dashboard from "../pages/Admin/Dashboard/Dashboard";
import Home from "../pages/Main/Home/Home";
import MainRoot from "../pages/Main/MainRoot";
import UserLogin from "../pages/Main/UserLogin";

export const ROUTES = [
    {
        path:'/',
        element:<MainRoot/>,
        children:[
            {
                path:'/login',
                element:<UserLogin/>
            },
            {
                path:'',
                element:<Home/>
            }
        ]
    },

    {
        path:'/admin',
        element:<AdminRoot/>,
        children:[
            {
                path:'login',
                element:<AdminLogin/>
            },
            {
                path:'',
                element:<Dashboard/>
            }
        ]
    }
]