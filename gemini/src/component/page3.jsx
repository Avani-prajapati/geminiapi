import Navbar from './Navbar.jsx';
import '../css/Page3.css'
import { useState,useRef } from 'react';
export default function Page3 (){

    const [image,setImage] = useState("");
    const inputref = useRef(null)

    function handleclick(){
       inputref.current.click();
    }
   
   function handleChange(e){
    const file = e.target.files[0];

    console.log(file)
    setImage(file)
    console.log(file)
    // console.log(URL.createObjectURL(image))
   }
   

    return(
        <div >
            <Navbar></Navbar>  
        <div className='bgg d-flex flex-column flex-wrap mt-5'>
            <div className=' mx-5 mt-5 colorr p-2 ' >
                <h2 className='text-center'>Instructions:</h2>
                <div className=' mx-5 my-3 text-center d-flex flex-column gap-3'>
                <h4 >1. Upload a clear photo of your soil or plant submit the photo</h4>
                <h4>2. Wait for the analysis to compelete.</h4>
                <h4>3. Get tailored advice and information.</h4>
                </div>
            </div>
           
            <div className='alignn text-center align-content-center page3div p-3  m-auto' style={{height:"fit-content",width:"24rem"}}>
               {image?<img src={URL.createObjectURL(image)}  alt='not found image' className=' img-fluid rounded-2  figure-img bg-white'></img>:<img src='https://toppng.com/uploads/preview/scan-to-cloud-icon-upload-image-icon-11553431815ilq9wljvef.png' alt='image loaded' className=' img-fluid rounded-2  figure-img bg-white'></img>} 
             
                </div>
            <div className=' d-flex justify-content-evenly m-4 '>
                <button className=' w-25 p-0  btn btn-success  ' onClick={handleclick}>
                    <input 
                    ref={inputref}
                    type='file' 
                    style={{display:'none'}}
                    onChange={handleChange}
                    ></input>
               
                 Upload</button>
                <button className='w-25 btn btn-success'>Submit</button>

            </div>
            
            <hr></hr>
            <div className=' seccol d-flex flex-column text-center'>
               <div className='mb-4'>
                <img src='../geminiimage/HAPPY TREE 2.png'></img>
                </div>
                <h2 className='colorr'>“SAVE A TREE IT DON'T CHARGE A FEE..!"</h2>
            </div>
        </div>
        </div>
    )

}