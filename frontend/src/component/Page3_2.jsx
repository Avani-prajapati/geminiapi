import Navbar from './Navbar.jsx';
import '../css/Page3.css'
import axios from "axios"
import { useState,useRef} from 'react';


export default function Page3_2(){
    console.log("tree");

    const promt ="if there is no image of tree/plant or plant leaf then say there is no tree/plant or tree /plant leaf detected please upload image according to content , else give answer which plant or tree is this ,where it is shawn most which type of soil are suitable for this benefit of growing this tree/plant and disadvantages of tree/plant give detail information of tree remeber your are here to help only tree/plant related image detection only "

    const [image,setImage] = useState("");
    const [file,setFile] = useState(null);
    const [filedata,setFiledata] = useState({
      name:"",
     type:""
     })
   

    const[ans,setAns] = useState(null);
    const [section,setSection] = useState([]); 

    const inputref = useRef(null)

    function handleclick(){
       inputref.current.click();
    }
   
    function handleChange(e){
        setFile(e.target.files);
         setImage(e.target.files[0]);
         setFiledata({name:e.target.files[0].name,type:e.target.files[0].type})
     
     }
   
   function handleSubmit(e){
    console.log(file)
    console.log(filedata)
   e.preventDefault();
   const data = new FormData();


   for(var x = 0;x<file.length;x++){
    data.append('file',file[x])
   }
   axios.post("http://localhost:8080/upload",data)
   .then(res=>{
    console.log(res)
    axios.post("http://localhost:8080/geminians",{filedata,promt})
    .then(res=>{console.log(res.data)
        setAns(res.data);
        const s = res.data.split("\n");
        setSection(s);
    })
  
   })
  }  
  



    return(
        <div >
            <Navbar></Navbar>  
        <div className='bgg d-flex flex-column flex-wrap mt-5'>
            <div className=' mx-5 mt-5 colorr p-2 ' >
                <h2 className='text-center'>Instructions:</h2>
                <div className=' mx-5 my-3 text-center d-flex flex-column gap-3'>
                <h4 >1. Upload a clear photo of your tree or plant submit the photo</h4>
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
                <button className='w-25 btn btn-success' onClick={handleSubmit}>Submit</button>

            </div>
            <div className='bg-success-subtle container p-4 px-5 pb-0 f' style={{height:"fit-content"}}>
                <pre className=' text-wrap'> 
                {section.map((section, index) => (
                   <div key={index}>
                      {section.startsWith('*')|| !isNaN(section.split(' ')[0])||section.startsWith("-")? (
                       <ul>
                       {section.split('\n').map((item) => (
                         item.split("**").map(((part, index) => (
                            <span key={index} className=' fs-5'>
                              {index % 2 === 0 ? part : <b>{part.replaceAll("*","#")}</b>}
                            </span>
                          )))
                         ))}
                       </ul>
                       ) : (
                       <h4>{section}</h4>
                      )}
                  </div>
                ))}
                <h6 className=' text-end'><b>{section?"Build With gemini✨":""}</b></h6>
                 
                </pre>
            </div>
            <hr></hr>
            <div className=' seccol d-flex flex-column p-2 text-center'>
               <div className='mb-4 mt-1'>
                <img src='../geminiimage/HAPPY TREE 2.png'></img>
                </div>
                <h2 className='colorr'>“SAVE A TREE IT DON'T CHARGE A FEE..!"</h2>
            </div>
        </div>
        </div>
    )

}