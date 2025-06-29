// export default function RecentData(){

// return(
// <div className=" container-fluid d-flex row bg-success-subtle rounded-5 rounded-3 align-content-center p-3 my-3  gap-3 gap-lg-0 ps-1 shadow w-100 recent ">
// <div className="col-3 d-none d-lg-block">
//      <img src="../geminiimage/HAPPY TREE 2.png" className=" rounded-4 "  ></img>
      
//     </div>
//  <div className=" d-flex flex-column col-lg-6 col-12 justify-content-center text-center gap-2 p-5 ">
//    <h2>Let's start exploring  How to farm/ analys tree</h2>
//  </div>
//  <div className="col-3 text-end d-none d-lg-block">
//      <img src="../geminiimage/HAPPY TREE 2.png" className=" rounded-4 "  ></img>

//     </div>
// </div>
// )

// }

// export default function RecentData() {
//   return (
//     <div className="w-full bg-green-100 shadow-lg rounded-3xl p-4 my-6 flex flex-col lg:flex-row items-center justify-between gap-4 recent">
      
//       {/* Left Image */}
//       <div className="hidden lg:block w-1/5">
//         <img
//           src="../geminiimage/HAPPY TREE 2.png"
//           alt="Tree"
//           className="rounded-xl w-full h-auto object-contain"
//         />
//       </div>

//       {/* Center Text */}
//       <div className="text-center w-full lg:w-3/5 px-4 py-6">
//         <h2 className="text-2xl md:text-3xl font-semibold text-green-800 font-mono">
//           Let's start exploring how to farm or analyze trees!
//         </h2>
//       </div>

//       {/* Right Image */}
//       <div className="hidden lg:block w-1/5 text-end">
//         <img
//           src="../geminiimage/HAPPY TREE 2.png"
//           alt="Tree"
//           className="rounded-xl w-full h-auto object-contain"
//         />
//       </div>
//     </div>
//   );
// }

export default function RecentData() {
  return (
    <div className="container my-5">
      <div className="row align-items-center bg-white border rounded-4 shadow-lg p-4 p-md-5 g-4">

        {/* Left Tree Image */}
        <div className="col-lg-3 text-center d-none d-lg-block">
          <img
            src="../geminiimage/HAPPY TREE 2.png"
            className="img-fluid rounded-4 shadow-sm"
            alt="Tree Illustration Left"
          />
        </div>

        {/* Center Text Content */}
        <div className="col-lg-6 col-12 text-center">
          <h2 className="fw-bold text-success font-monospace mb-3">
            🌿 Discover the Power of Nature
          </h2>
          <p className="text-secondary fs-5">
            Start your journey in farming or tree analysis today — we’re here to guide you step by step.
          </p>
          <a href="#explore" className="btn btn-success btn-lg px-4 mt-3 shadow-sm">
            Get Started
          </a>
        </div>

        {/* Right Tree Image */}
        <div className="col-lg-3 text-center d-none d-lg-block">
          <img
            src="../geminiimage/HAPPY TREE 2.png"
            className="img-fluid rounded-4 shadow-sm"
            alt="Tree Illustration Right"
          />
        </div>

      </div>
    </div>
  );
}



