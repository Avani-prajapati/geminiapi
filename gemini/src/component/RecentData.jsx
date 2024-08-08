export default function RecentData(){
return(
<div className=" container-fluid d-flex row  bg-body-secondary  rounded-3 align-content-center p-3 my-3 gap-3 gap-lg-0 shadow w-100 recent ">
 <div className=" d-flex col-lg-6 col-12 justify-content-center text-center gap-2  ">
  <div className="row">
    <div className="col-4">
    <img src="../geminiimage/slide2tree.jpg" className="img-fluid img-thumbnail" ></img>
    </div>
     <div className="col-4  ">
    <img src="../geminiimage/slide2tree.jpg" className="img-fluid img-thumbnail" ></img>
    </div>
    <div className="mt-2 col-4  align-content-center fs-5">
        <h1 >
            +
        </h1>
      <h6 className=" dis">
        expolre more
      </h6>
    </div>

   </div>
 </div>
 <div className="col-lg-6 col-12  d-flex text-center justify-content-between gap-2 ">
  <div className="row">
    <div className="col-4 ">
     <img src="../geminiimage/slide2soil.jpg" className="img-fluid img-thumbnail "  ></img>

    </div>
    <div className="col-4">
 <img src="../geminiimage/slide2soil.jpg" className="img-fluid img-thumbnail " ></img>

    </div>
    <div className="mt-2 col-4 align-content-center fs-5">
        <h1 >
            +
        </h1>
      <h6 className="dis">
        expolre   more
      </h6>
    </div> 
   
    </div>
 </div>

</div>
)

}