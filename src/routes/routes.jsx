import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home"
import Blog from "../pages/Blog"
import Profile from "../pages/Profile"
import Book from "../pages/Book";
import Login from "../pages/Login"
import BookDetails from "../pages/BookDetails"
import AboutUS from "../pages/AboutUS";
import BestSeller from "../pages/BestSeller";
import Contact from "../pages/Contact";
import AuthLayout from "../layouts/AuthLayout";
export const router=createBrowserRouter([
    {
        path:"/",
        element:(
            <MainLayout/>
        ),
        children:[
            {
                index:true,
                element:<Home/>
            },
            {
                path:"/blog",
                element:<Blog/>
            },
            {
                path:"/pofile",
                element:<Profile/>
            },
            {
                path:"/book/:bookName",
                element:<Book/>
            },
            {
                path:"/aboutUs",
                element:<AboutUS/>
            },
            {
                path:"/bestSeller",
                element:<BestSeller/>
            },
            {
                path:"/contact",
                element:<Contact/>
            },{
                path:"auth",
                element:<AuthLayout/>,
                children:[
                    {index:true,element:<Login/>}
                ]
            }
        ]
    },
    

])