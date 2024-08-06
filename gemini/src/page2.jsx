import { useState } from "react";
import Header from "./header";
import axios from "axios";


export default function(){
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
 
   function onsubmit(e){
        e.preventDefault();
        axios.post("http://localhost:8080/auth/signup",{name:name,email:email,password:password})
        .then(res => {console.log(res.data)
        })
       console.log(email);
       console.log(password);
       setName("");
       setEmail("");
       setPassword("");
    }
    return(
        <div className="log mt-5 pt-5 pb-4 container-fluid w-100">
            <Header></Header>
        <div className='align d-flex row p-3 justify-content-between '>
        <div className='col-md-6 col-12 imgg text-center'>
            <img src='./signin22.png' ></img>
        </div>
    <form  className='formm col-md-6 col-12 px-5 mt-sm-2 mt-md-0 text-white font-monospace '>
    <h2 className='text-center'>Register</h2>
        <div className="mb-3">
        <label htmlFor="exampleInputName" className="form-label">Name</label>
        <input type="text" className="form-control" id="exampleInputName" value={name} onChange={e=>setName(e.target.value)} aria-describedby="emailHelp"/>
        </div>
        <div className="mb-3">
        <label htmlFor="exampleInputPhone" className="form-label">Email</label>
        <input type="text" className="form-control" id="exampleInputPhone" value={email} onChange={e=>setEmail(e.target.value)} aria-describedby="emailHelp"/>
        
        </div>
        <div className="mb-3">
        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
        <input type="password" className="form-control" value={password} onChange={e=>setPassword(e.target.value)} id="exampleInputPassword1"/>
        </div>
        <div className='text-center m-4'>
        <button type="submit" className="btn btn-success " onClick={onsubmit}>Submit</button> 
        </div>
        
    </form>
</div>

</div>
    )
}