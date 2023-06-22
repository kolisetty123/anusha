import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import Button from '@mui/material/Button';
import './backcont.css';
import Viewb from "./viewb";

const  Contact=()=>{
    let n=useNavigate();
    const[lusername,setlusername]=useState("");
    const[lmovie,setlmovie]=useState("");
    const[ltheater,setltheater]=useState("");
    const[ldate,setldate]=useState("");
    const[ltime,setltime]=useState("");
    const[lseat,setlseat]=useState("");
    const[lnumber,setlnumber]=useState("");
    const Saved=async(e)=>{
        e.preventDefault();
       alert("saved")
       let mydaa={username:lusername,moviename:lmovie,theatername:ltheater,date:ldate,time:ltime,noofseats:lseat,number:lnumber} 
       await axios.post("http://localhost:8080/star1/st1",mydaa);
       
    }
    const D=()=>{
        n('/Delb')
    }
    const Vb=()=>{
        n('/Viewb')
    }
    
    

    return(
        <div className="f">
            <body >
            <Button  style={{marginLeft:0}}variant="contained" onClick={Vb}>view booking</Button>
            <Button  style={{marginLeft:0}}variant="contained" onClick={D}>cancel booking</Button>   
            <center style={{paddingTop:80}}> 
        <div style={{ fontSize: 40 }}>
<b>  Username:
    <input  type="text" onChange={e=>setlusername(e.target.value)}></input><br/>
                Movie Name:
                <select onChange={e=>setlmovie(e.target.value)}>
                    <option>select</option>
                    <option>Adipurush</option>
                    <option>Virupaksha</option>
                    <option>Agent</option>
                </select><br/>
             
                Theater name:
                <select onChange={e=>setltheater(e.target.value)}>
                    <option>select</option>
                    <option>inox</option>
                    <option>cinehub</option>
                    <option>RAAG</option>
                </select><br/>
           
                Date:
                <input type="date" onChange={e=>setldate(e.target.value)}></input><br/>
               
                Time:
                <input type="time" onChange={e=>setltime(e.target.value)}></input><br/>
               
                No.of.Seats:
                <input type="number" onChange={e=>setlseat(e.target.value)}>
                    
                   </input><br/>
                    Number:
                <input type="number" onChange={e=>setlnumber(e.target.value)}>
                
                    </input> <br/>
                
                <br/>
    <center><b>
                <Button variant="contained" onClick={Saved}>Submit</Button>
               </b> 
</center>

</b>


             </div>
            
             </center>
        </body>    
 </div>
    )
}
export default Contact;

