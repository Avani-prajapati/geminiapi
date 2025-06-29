// import { userContext } from "../CreateContext.js";
// import "../css/Navbar.css"
// import { useContext } from "react";


// export default  function Navbar(){
//   const  user = useContext(userContext)
//   console.log(user.name);
//     return(
   
//       <nav className="navbar navbar-expand-lg fixed-top navbar-light border-bottom">
//       <div className="container-fluid text-break">
//         <a className="navbar-brand fs-3 text-white" href="#">
//             Gr<img src="/geminiimage/slide2soil.jpg" style={{margin:4,height:50,width:50,border:"1px solid black",borderRadius:'50%'}}></img>w Together </a>
//         <button className="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//           <span className="navbar-toggler-icon text-center"></span>
//         </button>
//         <div className="collapse navbar-collapse " id="navbarSupportedContent">
//           <ul className="navbar-nav ms-auto mb-2 mb-lg-0 fs-4 text-center nav-ul ">
//             <li className="nav-item ">
//               <a className="nav-link mx-3 mt-2" aria-current="page" href="/home">Home</a>
//             </li>
//             <li className="nav-item">
//               <a className="nav-link  mx-3 mt-2 " href="/logout">Log Out</a>
//             </li>      
//             <li className="nav-item">
//               <a className="nav-link mx-3 mt-2" href="#explore">Explore</a>
//             </li>      
//             <li className="nav-item mx-2 text-white">
//               {user.name?<img src="../geminiimage/user logo.png" className=" img-fluid bg-white rounded-4" style={{height:'2rem'}} ></img>:<></>}
//               <div>{user.name}</div>
//             </li>      
        
//           </ul>
//         </div>
//       </div>
//     </nav>
//     )
// }


import { userContext } from "../CreateContext.js";
import "../css/Navbar.css";
import { useContext } from "react";

export default function Navbar() {
  const user = useContext(userContext);
  return (
    <nav className="navbar navbar-expand-lg fixed-top navbar-dark bg-success shadow-sm py-2 px-3 rounded-bottom">
      <div className="container-fluid">
        {/* Logo + Brand */}
        <a className="navbar-brand d-flex align-items-center fs-3 fw-bold text-white" href="/home">
          Gr
          <img
            src="/geminiimage/slide2soil.jpg"
            alt="Logo"
            style={{
              margin: "0 6px",
              height: "45px",
              width: "45px",
              borderRadius: "50%",
              border: "2px solid white",
            }}
          />
          w Together
        </a>

        {/* Toggle for small screens */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Nav Links */}
        <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
          <div className="navbar-nav fs-5 d-flex align-items-center gap-3 text-center">
            <a className="nav-link text-white hover-underline" href="/home">
              Home
            </a>
            <a className="nav-link text-white hover-underline" href="/logout">
              Log Out
            </a>
            <a className="nav-link text-white hover-underline" href="#explore">
              Explore
            </a>

            {/* Profile Display */}
            {user.name && (
              <div className="d-flex align-items-center text-white ms-2">
                <img
                  src="../geminiimage/user logo.png"
                  alt="User"
                  className="bg-white rounded-circle me-2"
                  style={{ height: "35px", width: "35px", objectFit: "cover" }}
                />
                <span className="fw-semibold">{user.name}</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
