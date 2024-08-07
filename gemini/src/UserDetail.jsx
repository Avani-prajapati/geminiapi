export default function UserDetail({name = "UserName"}){
return (
    <div className=" row d-flex justify-content-between text-black text-center opacity-100  pt-5 user">
      <div className="m-0  p-5  profile">
        <div className="d-flex row align-content-center">
          <div className="col">
       <img src="./geminiimage/user logo.png" className=" img-fluid figure-img " style={{height:60}}></img>
       <h5 >{name}</h5>
          </div>
          <div className="col">
          <h2>progress bar</h2>
          </div>
      </div>
       <br></br>
       <h4>Level up your progress by exploring new soils and trees</h4>
      </div>
    </div>
)

}