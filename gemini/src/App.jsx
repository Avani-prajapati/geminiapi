import './css/App.css'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Home from "./Home.jsx"
import Logout2 from './component/Logout2.jsx'
import Loginpage from './component/loginpage.jsx'
import Page2 from './component/page2.jsx'
import Page3 from './component/page3.jsx'
import Page4 from './component/page4.jsx'
import { userContext} from './CreateContext.js'
import Cookie from "js-cookie"
import { useState ,useEffect} from 'react'
import axios from "axios"

function App() {
  const [user,setUser] = useState({});
  
  useEffect(() => {
    axios.post("http://localhost:8080/home",{'token':Cookie.get('token')})
     .then(res=> {console.log(res.data)
       setUser(res.data);
     })
  },[]);

  
  return (<>

  <userContext.Provider value={user}>
    <BrowserRouter>
      <Routes>
         <Route path='/home' element={<Home/>}></Route>
         <Route path='/logout' element={<Logout2></Logout2>}></Route>
         <Route path='/' element={<Loginpage/>}></Route> 
         <Route path='/register' element={<Page2></Page2>}></Route>
         <Route path='/farming' element={<Page3></Page3>}></Route>
         <Route path='/tree' element={<Page4></Page4>}></Route>
       </Routes>
      </BrowserRouter>
     </userContext.Provider>

    </>
    
  )
}

export default App
