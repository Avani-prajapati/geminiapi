export default function RecentData(){
return(
<div className=" container-fluid  d-flex row justify-content-start w-100 p-2 recent shodow ">
  <h2>Your recent exploration</h2>
 <div className=" d-flex col-lg-6 col-12 text-center gap-2  p-3 ">
    <div className="p-2">
    <img src="./geminiimage/slide2tree.jpg" className=" img-thumbnail img-fluid  " ></img>
    </div>
    <div className=" p-3">
 <img src="./geminiimage/slide2soil.jpg" className=" img-thumbnail img-fluid " ></img>

    </div>
     {/* <div className="p-2">
    <img src="./geminiimage/slide2tree.jpg" className=" img-thumbnail img-fluid " ></img>
    </div> */}
    <div className="mt-2  align-content-center fs-5">
        <h1 >
            +
        </h1>
      <h6 className=" dis">
        expolre more
      </h6>
    </div>

 </div>
 {/* <div className="col-lg-6 col-12  d-flex text-center gap-4 justify-content-center p-3 h-25 align-content-center">
    <div className=" p-3">
 <img src="./geminiimage/slide2soil.jpg" className=" img-thumbnail img-fluid " ></img>

    </div>
    <div className="p-3">
 <img src="./geminiimage/slide2soil.jpg" className=" img-thumbnail img-fluid " ></img>

    </div>
    <div className="mt-2">
        <h1 className=" text-success">
            +
        </h1>
      <h6>
        expolre   more
      </h6>
    </div> */}
   
 
 {/* </div> */}

</div>
)

}