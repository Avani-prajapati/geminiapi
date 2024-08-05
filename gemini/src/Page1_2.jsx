import './Page1_2.css'
export default function page1_2(){
    return(
        <div className=" bgcolor d-flex flex-column px-5 py-5 gap-4">
            <div className=" d-flex row px-5" >
                <div className=" h-50 w-50 col-md-6 col-12 ">
                <h2 className="py-3">Importance of trees</h2>
                <h5>Trees improve air quality and regulate climate by absorbing carbon dioxide and providing oxygen. They also support biodiversity and prevent soil erosion by stabilizing the ground with their roots.</h5>
                </div>
                <div></div>
            </div>
            <div className=" d-flex flex-row justify-content-between px-5">
                <div ></div>
                <div className=" h-50 w-50  col-md-6 col-12 " >
                <h2 className="py-3">Analysis of soil</h2>
                <h5>To analyze soil at home, collect a composite sample and use a pH test kit or meter to determine acidity. Test soil texture with the jar method or feel test, and use a nutrient test kit to check for essential nutrients. Adjust soil amendments based on these results for optimal plant growth.
</h5>
                </div>
               
            </div>
            <div className=" d-flex flex-column px-5">
                <div className=" h-50 w-50  col-md-6 col-12 ">
                <h2 className="py-3">We should not cut the trees</h2>
                <h5>Avoiding tree cutting is crucial for maintaining environmental balance, preserving wildlife habitats, and preventing soil erosion. Trees play a vital role in air quality and climate regulation, so protecting them supports a healthier planet for all.</h5>
                </div>
                <div></div>
            </div>
            <hr></hr>
           
            
        </div>
    )
}