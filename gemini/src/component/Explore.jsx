import { useState } from "react"
import { useNavigate } from 'react-router-dom';
import Page3 from "./page3.jsx";

export default function Explore(){

    return(
        <div className="container-fluid d-flex row justify-content-between bg-gradient position-sticky  p-3 h-25 my-3 explore " >
               <div className="col col-12 col-lg-6 mb-2 p-4  ca">
               <div className=" card_ p-3 text-center " >
               <a href="/farming">
                <img src="../geminiimage/grow tree.png" className=" img-fluid" alt="..." />
                </a>
                <br></br>
                <h3 className="font-monospace">Dont know how to start farming let's understand </h3>
               </div>
             </div> 
             <div className="col col-12 col-lg-6 mb-2 p-4 ca">
               <div className=" card_ text-center font-monospace  p-3" >
               <a href="/tree">
                <img  src="../geminiimage/explore tree.png" className=" img-fluid" alt="..." />
                </a>
                <br></br>
                <h3>Dont know which tree is this dont worry we are here to help you  </h3>
               </div>
             </div> 
            </div>           
    )
}