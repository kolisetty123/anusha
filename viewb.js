import React from "react";
import axios from "axios";
import { useState } from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Contact from "./contact1.js";


const Viewb=()=>{
    let n=useNavigate()
        const[mdata,setData]=useState([])
        var getdata=async(a)=>{
            a.preventDefault()
            let mynewdata=await axios.get("http://localhost:8080/star1/gm1");
            setData(mynewdata.data)
        }
    
    
    <Contact/>
    
    
    return(
        
        <div>
            <button onClick={getdata}>get data</button>
            <table>
                <tr >
                    <th>username</th>
                    <th>moviename</th>
                    <th>theatername</th>
                    <th>date</th>
                    <th>time</th>
                    <th>noofseats</th>
                    <th>number</th>
                    
                </tr>
                {
                    mdata.map((k)=>{
                        return <tr>
                        <td>{k.username}</td>
                        <td>{k.moviename}</td>
                        <td>{k.theatername}</td>
                        <td>{k.date}</td>
                        <td>{k.time}</td>
                        <td>{k.noofseats}</td>
                        <td>{k.number}</td>
                        </tr>
                    })
                }
            </table>
        </div>
    )
            
            }
            export default Viewb;