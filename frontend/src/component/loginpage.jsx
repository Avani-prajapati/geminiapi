import '../css/loginpage.css';
import {  useState } from 'react';
import axios from "axios";
import Cookie from "js-cookie"
import { useNavigate } from 'react-router-dom';

export default function loginpage(){
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const nevigate = useNavigate()

   function onsubmit(e){
        setEmail("");
        setPassword("");

        console.log(email)
        console.log(password)

        e.preventDefault();
        axios.post("http://localhost:8080/auth/login",{email:email,password:password})
        .then(res => {console.log(res.data)
            Cookie.set('token',res.data.jwtToken) 
            nevigate('/home')
            window.location.reload()  
        }).catch(err=>alert(err.response.data.message))  
       
    }
   
//     return(
    
//         <div className='log pt-4 pb-5 mt-lg-4 container-fluid w-100'>
//         <div>
//         <h2 className=" text-center text-white py-5 my-4  text-light"> Welcome to soil and tree analyser...!!</h2>
//         </div>
//       <div className=' backimg align d-flex row p-3  justify-content-between' id='login'>
//         <div className='col-lg-6 col-12 imgg text-center'>
//             <img src='./geminiimage/login image.webp' className=' img-fluid' ></img>
//         </div>
//     <form  className='formm col-lg-6 col-12 px-5 mt-sm-2 mt-md-0 text-white font-monospace '>
//     <h2 className='text-center'>Login</h2>
      
//         <div className="mb-3">
//         <label  htmlFor="exampleInputPhone"  className="form-label">Email</label>
//         <input  type="email" className="form-control" value={email} id="exampleInputmail" aria-describedby="emailHelp" onChange={ e => setEmail(e.target.value)} />
       
//         </div>
//         <div className="mb-3">
//         <label htmlFor="exampleInputPassword1" className="form-label" >Password</label>
//         <input type="password" className="form-control" value={password} pattern='.{6,}' title='Must Contain Atleast 6 letters' id="exampleInputPassword1" onChange={ e => setPassword(e.target.value)}/>
//         </div>
//         <div className='text-center m-4'>
//         <button type="submit" className="btn btn-success " onClick={onsubmit} > Login </button> 
//         </div>
//         <div>
//             <h5 className='text-center'> New User? <a href='/register'> Sign Up NOW</a></h5>
//         </div>
//     </form>
// </div>
// </div>


//     )
return (
  <div className="container-fluid bg-light min-vh-100 d-flex justify-content-center align-items-center">
    <div className="row w-100" style={{ maxWidth: '900px' }}>
      <div className="col-12 col-md-8 col-lg-6 mx-auto">
        <div className="card border-0 shadow-sm rounded-4 p-4 p-md-5 bg-white">
          <div className="text-center mb-4">
            <img
              src="./geminiimage/slide2soil.jpg"
              alt="Logo"
              style={{ height: "60px", width: "60px", borderRadius: "50%" }}
            />
            <h3 className="mt-3 fw-bold text-dark">Login to Your Account</h3>
            <p className="text-muted">Access your dashboard and start analyzing!</p>
          </div>

          <form>
            <div className="mb-3">
              <label htmlFor="exampleInputmail" className="form-label fw-semibold">
                Email Address
              </label>
              <input
                type="email"
                className="form-control"
                id="exampleInputmail"
                placeholder="example@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="mb-4">
              <label htmlFor="exampleInputPassword1" className="form-label fw-semibold">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
                placeholder="********"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                pattern=".{6,}"
                title="Must contain at least 6 characters"
                required
              />
            </div>

            <div className="d-grid mb-3">
              <button
                type="submit"
                className="btn btn-dark fw-semibold py-2"
                onClick={onsubmit}
              >
                Sign In
              </button>
            </div>

            <p className="text-center text-muted">
              Don’t have an account?{" "}
              <a href="/register" className="text-decoration-none fw-semibold">
                Sign up
              </a>
            </p>
          </form>
        </div>
      </div>
    </div>
  </div>
);




}