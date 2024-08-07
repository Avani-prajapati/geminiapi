import './App.css'
import Navbar from './Navbar'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Home from "./Home.jsx"
import Logout2 from './Logout2.jsx'
import Loginpage from './loginpage.jsx'
import Page2 from './page2.jsx'



function App() {
  return (<>
    <Navbar></Navbar>
    <BrowserRouter>
      <Routes>
         <Route path='/' element={<Home/>}></Route>
         <Route path='/logout' element={<Logout2></Logout2>}></Route>
         <Route path='/login' element={<Loginpage/>}></Route> 
         <Route path='/register' element={<Page2></Page2>}></Route>
      </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
