export default function Explore(){
    return(
        <div className="container-fluid d-flex row justify-content-between bg-gradient  p-3 h-25 my-3 explore ">
           <h1 className="text-center">Start exploring</h1>
               <div className="col col-12 col-sm-6 mb-2 p-4 font-monospace ca">
               <div className=" card_ p-3 text-center " >
                <img src="/geminiimage/grow tree.png" className=" "  alt="..."/>
                <br></br>
                <h3>Dont know how to start farming let's understand </h3>
               </div>
             </div> 
             <div className="col col-12 col-sm-6 mb-2 p-4 font-monospace ca">
               <div className=" card_ text-center  p-3" >
                <img src="/geminiimage/explore tree.png" className="" alt="..." />
                <br></br>
                <h3>Dont know which tree is this dont worry we are here to help you  </h3>
               </div>
             </div> 
            </div>           
        
    )
}