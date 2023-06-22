import React from  "react";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Home from "./home.js";
import Contact from "./contact1.js";
import Login from "./login.js";
import Signup from "./signup.js";
import Delb from "./delb.js";
import Viewb from "./viewb.js";


const Path=()=>
{
    return(
        <BrowserRouter>
        <Routes>
            <Route path="Viewb" element={<Viewb/>}></Route>
            <Route path="/Delb" element={<Delb/>}></Route>
            
            <Route path="/Home" element={<Home/>}></Route>
            <Route path="/Contact" element={<Contact/>}></Route>
           < Route path="/Login" element={<Login/>}></Route>
           <Route path="/Signup" element={<Signup/>}></Route>
           
        </Routes>
        </BrowserRouter>
    )
}
export default Path;