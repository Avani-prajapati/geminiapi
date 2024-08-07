import './Page3.css'
export default function Page3 (){
    return(
        <div >
        <div className='bgg d-flex flex-column flex-wrap mt-5'>
            <div className=' mx-5 mt-5 colorr p-2 ' >
                <h2 className='text-center'>Instructions:</h2>
                <div className=' mx-5 my-3 text-center d-flex flex-column gap-3'>
                <h4 >1. Upload a clear photo of your soil or plant submit the photo</h4>
                <h4>2. Wait for the analysis to compelete.</h4>
                <h4>3. Get tailored advice and information.</h4>
                </div>
            </div>
           
            <div className='alignn text-center align-content-center m-auto mt-5 mb-3'><h3>+<h4>upload your image here</h4></h3></div>
            <div className=' d-flex justify-content-evenly m-4 '>
                <button className=' w-25 p-0  btn btn-success  '>
                {/* <img src='/geminiimage/camera.webp ' className='camera mx-2' ></img> */}
                 Upload</button>
                <button className='w-25 btn btn-success'>Submit</button>

            </div>
            
            <hr></hr>
            <div className=' seccol d-flex flex-column text-center'>
               <div className='mb-4'>
                <img src='/geminiimage/HAPPY TREE 2.png'></img>
                </div>
                <h2 className='colorr'>“SAVE A TREE IT DON'T CHARGE A FEE..!"</h2>
            </div>
        </div>
        </div>
    )

}