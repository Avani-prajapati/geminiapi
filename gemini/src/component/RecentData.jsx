import { useContext } from "react"
// import { progress } from "../CreateContext"
export default function RecentData(){

return(
<div className=" container-fluid d-flex row bg-success-subtle rounded-5 rounded-3 align-content-center p-3 my-3  gap-3 gap-lg-0 ps-1 shadow w-100 recent ">
<div className="col-3 d-none d-lg-block">
     <img src="../geminiimage/HAPPY TREE 2.png" className=" rounded-4 "  ></img>
      
    </div>
 <div className=" d-flex flex-column col-lg-6 col-12 justify-content-center text-center gap-2 p-5 ">
   <h2>Let's start exploring  How to farm/ analys tree</h2>
 </div>
 <div className="col-3 text-end d-none d-lg-block">
     <img src="../geminiimage/HAPPY TREE 2.png" className=" rounded-4 "  ></img>

    </div>
</div>
)

}