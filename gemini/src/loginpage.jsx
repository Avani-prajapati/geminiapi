import './loginpage.css';
import Header from "./header.jsx"
import { useState } from 'react';
import axios from "axios";
import Cookie from "js-cookie"
import Home from './Home.jsx';

export default function loginpage(){
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
   

   function onsubmit(e){
        setEmail("");
        setPassword("");

        console.log(email)
        console.log(password)

        e.preventDefault();
        axios.post("http://localhost:8080/auth/login",{email:email,password:password})
        .then(res => {console.log(res.data)
            Cookie.set('token',res.data.jwtToken)
        })  
    }
   
    return(
        <div className='log mt-5 pt-4 pb-5 log container-fluid w-100'>
      <Header></Header>
      <div className=' backimg align d-flex row p-3  justify-content-between' id='login'>
        <div className='col-lg-6 col-12 imgg text-center'>
            <img src='./geminiimage/login image.webp' className=' img-fluid' ></img>
        </div>
    <form  className='formm col-lg-6 col-12 px-5 mt-sm-2 mt-md-0 text-white font-monospace '>
    <h2 className='text-center'>Login</h2>
      
        <div className="mb-3">
        <label  htmlFor="exampleInputPhone"  className="form-label">Email</label>
        <input  type="email" className="form-control" value={email} id="exampleInputmail" aria-describedby="emailHelp" onChange={ e => setEmail(e.target.value)} />
       
        </div>
        <div className="mb-3">
        <label htmlFor="exampleInputPassword1" className="form-label" >Password</label>
        <input type="password" className="form-control" value={password} pattern='.{6,}' title='Must Contain Atleast 6 letters' id="exampleInputPassword1" onChange={ e => setPassword(e.target.value)}/>
        </div>
        <div className='text-center m-4'>
        <button type="submit" className="btn btn-success " onClick={onsubmit} > Login </button> 
        </div>
        <div>
            <h5 className='text-center'> New User? <a href='/register'> REGISTER NOW</a></h5>
        </div>
    </form>
</div>
</div>

    )
}