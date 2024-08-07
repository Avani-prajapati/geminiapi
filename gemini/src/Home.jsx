
import Explore from "./Explore";
import Navbar from "./Navbar";
import RecentData from "./RecentData";
import UserDetail from "./UserDetail";
import Page1_2 from "./Page1_2";
import { useRef, useState } from "react";
import Cookie from "js-cookie"
import axios from "axios"
import { useEffect } from "react";

export default function Home(){
   const [name,setName] = useState("");
  // let name = "";

   useEffect(() => {
    axios.post("http://localhost:8080/home",{'token':Cookie.get('token')})
     .then(res=> {console.log(res.data)
       setName(res.data.name);
     })
    },[]);

    return(
     <div className="container-fuild py-3 fs-5 w-100" id="home">
      <div className="container-fluid w-100 receuser m-0">
        <section className="container-fluid m-auto align-content-center w-100 m-0">
            <UserDetail name={name}></UserDetail>
        </section>   
    
        <section className="container-fluid w-100">
            <RecentData></RecentData>
        </section>
      </div>
      <div className="exp">
        <hr className=" text-success"></hr>
        <section className=" ">
          <Explore></Explore>
        </section>
        </div>
        <section  className="last">
          <Page1_2></Page1_2>
        </section>
        
        </div>
      

)
}