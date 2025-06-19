import React, { Suspense, useEffect, useState } from "react"
import ReactDOM from "react-dom/client"
import { createBrowserRouter , RouterProvider , Outlet } from "react-router-dom"
import Header from "./Components/Header.js"
import Body from "./Components/Body.js"
import Contact from "./Components/Contact.js"
import About from "./Components/About.js"
import Error from "./Components/Error.js"
import RestaurantMenu from "./Components/RestaurantMenu.js"
import Usercontext from "./Utils/Usercontext.js"
import Cart from "./Components/Cart.js"
import {Provider} from "react-redux"
// import Groceries from "./Components/Groceries.js"
import { lazy } from "react"
import User from "./Components/User.js"
import appStore from "./Utils/appStore.js"

const Groceries = lazy(()=>import("./Components/Groceries.js"))

const Applayout = ()=>{
    const [userName,setUserName]=useState()

        useEffect(()=>{
    // Make an api call to send username and password
    const data ={
        name:"Chandan Tiwari "
    }
         setUserName(data.name)
    },[])
    return (
        <Provider store={appStore} >
        <Usercontext.Provider value={{loggedInUser:userName,setUserName}}>
        <div className="root-level">  
            <Header/>
            <Outlet />
        </div>
        </Usercontext.Provider>
        </Provider>
    )
}
const appRouter = createBrowserRouter([{
    path:'/',
    element:<Applayout />,
    children:[{
    path:'/',
    element:<Body />
    },{
     path:'/about',
     element:<About />
    },
    {
    path:'/contact',
    element:<Contact />
},
{
    path:"/grocery",
    element: <Suspense fallback={<h1>Loading....👍</h1>}>  <Groceries /> </Suspense>
},
{
    path:'/restaurant/:resId',
    element:<RestaurantMenu />
},
{
    path:'/cart',
    element:<Cart/>
}
],
    errorElement:<Error />,
} 

])
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<RouterProvider router={appRouter} />)

