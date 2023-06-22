import React from "react";
import axios from "axios";
import { useState } from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
const Delb=()=>{
    let n=useNavigate();
   
    const [lusername,setlusername]=useState("")
    
 const delet = async(e)=>{
 e.preventDefault();
 
let result=await axios.delete("http://localhost:8080/star1/deletes1/"+lusername);
 alert(result.data);
 let r=result.data;
       if(r=="Deleted"){
n('/or')
       }
 

}
return(
    <div className="f">
             
          <section>
            <center  style={{paddingTop:200}}>
                <div style={{backgroundColor:"blanchedalmond",height:250,width:400 }}>
            <h1 style={{fontSize:40}} >cancel booking </h1>
        
        username:
        <input style={{fontSize:20}}  type="text" onChange={e=>setlusername(e.target.value)} ></input><br/>
       
        <Button onClick={delet}>ok</Button><br/>
        
        
        </div>
        </center>
        </section>
        </div>
)

}
export default Delb;