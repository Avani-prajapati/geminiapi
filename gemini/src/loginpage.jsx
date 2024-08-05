import './loginpage.css';
import Header from "./header.jsx"

export default function loginpage(){
    return(
        
        <div className='log mt-5 pt-4 vh-100 container-fluid w-100'>
      <Header></Header>
      <div className=' backimg align d-flex row p-3 justify-content-between' id='login'>
        <div className='col-md-6 col-12 imgg text-center'>
            <img src='./geminiimage/login image.webp' style={{height:400}}></img>
        </div>
    <form  className='formm col-md-6 col-12 px-5 mt-sm-2 mt-md-0 text-white font-monospace '>
    <h2 className='text-center'>Login</h2>
      
        <div className="mb-3">
        <label for="exampleInputPhone" class="form-label">Mobile number</label>
        <input type="text" class="form-control" id="exampleInputPhone" aria-describedby="emailHelp"/>
        
        </div>
        <div className="mb-3">
        <label for="exampleInputPassword1" class="form-label">Password</label>
        <input type="password" class="form-control" id="exampleInputPassword1"/>
        </div>
        <div className='text-center m-4'>
        <button type="submit" class="btn btn-success ">Submit</button> 
        </div>
        <div>
            <h5 className='text-center'> Not register yet<a href='/register'> REGISTER NOW</a></h5>
        </div>
    </form>
</div>
</div>

    )
}