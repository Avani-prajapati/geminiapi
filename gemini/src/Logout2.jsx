import Cookie from "js-cookie"
import Home from "./Home"
export default function Logout2(){
  function logout(){
    Cookie.remove('token');
  }
 logout();

    return(
        <Home></Home>
    )
}