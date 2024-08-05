import "./Navbar.css"
export default function Navbar(){
    return(
   
      <nav className="navbar navbar-expand-lg fixed-top navbar-light border-bottom">
      <div className="container-fluid text-break">
        <a className="navbar-brand fs-3 text-white" href="#">
            Trees </a>
        <button className="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon text-center"></span>
        </button>
        <div className="collapse navbar-collapse " id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 fs-4 text-center nav-ul">
            <li className="nav-item ">
              <a className="nav-link active  mx-3" aria-current="page" href="/">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link  mx-3 " href="/logout">Log Out</a>
            </li>      
            <li className="nav-item">
              <a className="nav-link mx-3" href="#test">Contact-Info</a>
            </li>      
            <li className="nav-item">
              <a className="nav-link mx-3" href="/login">login</a>
            </li>      
        
          </ul>
        </div>
      </div>
    </nav>
    )
}