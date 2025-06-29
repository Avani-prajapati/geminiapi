import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";


export default function(){
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const nevigate = useNavigate()

 
   function onsubmit(e){
        e.preventDefault();
        axios.post("http://localhost:8080/auth/signup",{name:name,email:email,password:password})
        .then(res => {console.log(res.data)
            nevigate('/')
        }).catch(err=>{alert(err.response.data.message)})
       console.log(email);
       console.log(password);
       setName("");
       setEmail("");
       setPassword("");
    }
//     return(
//         <div className="log pt-4 pb-5 mt-lg-4 justify-content-center container-fluid w-100">
//             <div>
//         <h2 className=" text-center text-white py-5 my-4  text-light"> Welcome to soil and tree analyser...!!</h2>
//         </div>
//         <div className='align d-flex row p-3 justify-content-between '>
//         <div className='col-md-6 col-12 imgg text-center'>
//             <img src='../geminiimage/login image 2.webp' className="img-fluid"></img>
//         </div>
//     <form  className='formm col-md-6 col-12 px-5 mt-sm-2 mt-md-0 text-white font-monospace '>
//     <h2 className='text-center'>SignUp</h2>
//         <div className="mb-3">
//         <label htmlFor="exampleInputName" className="form-label">Name</label>
//         <input type="text" className="form-control" id="exampleInputName" value={name} onChange={e=>setName(e.target.value)} aria-describedby="emailHelp"/>
//         </div>
//         <div className="mb-3">
//         <label htmlFor="exampleInputPhone" className="form-label">Email</label>
//         <input type="email" className="form-control" id="exampleInputmail" value={email} onChange={e=>setEmail(e.target.value)} aria-describedby="emailHelp"/>
        
//         </div>
//         <div className="mb-3">
//         <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
//         <input type="password" className="form-control" value={password} pattern='.{6,}' title='Must Contain Atleast 6 letters' onChange={e=>setPassword(e.target.value)} id="exampleInputPassword1"/>
//         </div>
//         <div className='text-center m-4'>
//         <button type="submit" className="btn btn-success " onClick={onsubmit}>Submit</button> 
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
              src="../geminiimage/slide2soil.jpg"
              alt="Logo"
              style={{ height: "60px", width: "60px", borderRadius: "50%" }}
            />
            <h3 className="mt-3 fw-bold text-dark">Create Your Account</h3>
            <p className="text-muted">Join the Soil & Tree Analyzer Community</p>
          </div>

          <form>
            <div className="mb-3">
              <label htmlFor="exampleInputName" className="form-label fw-semibold">Name</label>
              <input
                type="text"
                className="form-control"
                id="exampleInputName"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="exampleInputEmail" className="form-label fw-semibold">Email</label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail"
                placeholder="example@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="mb-4">
              <label htmlFor="exampleInputPassword1" className="form-label fw-semibold">Password</label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
                placeholder="At least 6 characters"
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
                Sign Up
              </button>
            </div>

            <p className="text-center text-muted">
              Already have an account?{" "}
              <a href="/" className="text-decoration-none fw-semibold">Login</a>
            </p>
          </form>
        </div>
      </div>
    </div>
  </div>
);

}