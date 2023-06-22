import React from "react";
import {useNavigate} from 'react-router-dom';
import Button from '@mui/material/Button';
import "./background.css";

const Home=()=>
{
    let n=useNavigate();
    function goHome(){
        n('/')
    }
    function Contact(){
        n('/contact')
    }
   return(
        <div>
            <div id="body">
            <header>
            
            </header>
            <section>
            <center style={{paddingTop:100}}>
             <h1 style={{fontSize:40}}>MOVIE TICKET BOOKING</h1>
            <Button variant="contained" href='/Contact'>next</Button>
             
            </center>
            
            
            </section>
        </div>
        </div>
    )
}
export default Home;