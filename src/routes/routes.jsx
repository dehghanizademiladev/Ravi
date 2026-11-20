import { createBrowserRouter, redirect } from "react-router";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home"
import Blog from "../pages/Blog"
import Profile from "../pages/Profile"
import Book from "../pages/Book";
import Login from "../pages/Login"
import AboutUS from "../pages/AboutUS";
import BestSeller from "../pages/BestSeller";
import Contact from "../pages/Contact";
import AuthLayout from "../layouts/AuthLayout";
import * as AuthService from "../services/auth.service" 
import CMSlayoout from "../layouts/CMSlayoout";
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

    {
        path:"/dashboard",
        element:<CMSlayoout/>,
        children:[
            {
                path:"moderator",
                loader:async()=>{
                    try{
                        const {response}=await AuthService.getMe()
                        
                        if (response.user.roles.includes("ADMIN")){
                            return redirect("/forbidden")
                        }

                        return response.user
                    }
                    catch(err){
                        return redirect("Auth")
                    }
                },
                children:[
                    {index:true,loader:()=> redirect("home")},
                    {path:"home",element:<div>HOME PAGE</div>},
                    {path:"orders"},
                    {path:"books"},
                    {path:"offs"}
                ]
            }
        ]
    }
    

])