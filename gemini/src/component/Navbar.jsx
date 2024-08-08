import { userContext } from "../CreateContext.js";
import "../css/Navbar.css"
import { useContext } from "react";


export default  function Navbar(){
  const  user = useContext(userContext)
  console.log(user.name);
    return(
   
      <nav className="navbar navbar-expand-lg fixed-top navbar-light border-bottom">
      <div className="container-fluid text-break">
        <a className="navbar-brand fs-3 text-white" href="#">
            Trees </a>
        <button className="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon text-center"></span>
        </button>
        <div className="collapse navbar-collapse " id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 fs-4 text-center nav-ul ">
            <li className="nav-item ">
              <a className="nav-link mx-3 mt-2" aria-current="page" href="/home">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link  mx-3 mt-2 " href="/logout">Log Out</a>
            </li>      
            <li className="nav-item">
              <a className="nav-link mx-3 mt-2" href="#test">Contact-Info</a>
            </li>      
            <li className="nav-item text-white">
              {/* <a className="nav-link mx-3" href="/login">login</a> */}
              {user.name?<img src="../geminiimage/user logo.png" className=" img-fluid bg-white rounded-4" style={{height:'2rem'}} ></img>:<></>}
              <div>{user.name}</div>
            </li>      
        
          </ul>
        </div>
      </div>
    </nav>
    )
}