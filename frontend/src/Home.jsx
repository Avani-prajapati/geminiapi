import Explore from "./component/Explore";
import Navbar from "./component/Navbar";
import Page1_2 from "./component/Page1_2";
import Welcome from "./component/Welcome";
import RecentData from "./component/RecentData"

export default function Home(){
    return(
    <div className="container-fuild py-3 fs-5 w-100" id="home">
        <Navbar></Navbar>
      <div className="container-fluid   w-100 receuser m-0">
            <Welcome></Welcome>
      </div>
      <div className="exp">
        <section className="ps-4 pt-1">
        <RecentData></RecentData>
        </section>
        <hr className=" text-success"></hr>
        <section className=" " id="explore">
          <Explore ></Explore>
        </section>
      </div>
        <section  className="last">
          <Page1_2></Page1_2>
        </section>
        
        </div>
)
}