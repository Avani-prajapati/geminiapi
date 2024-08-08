import Cookie from "js-cookie"
import Loginpage from "./loginpage.jsx"

export default function Logout2(){

  function logout(){
    Cookie.remove('token');
  }
 logout();

    return(
        <Loginpage></Loginpage>
    )
}