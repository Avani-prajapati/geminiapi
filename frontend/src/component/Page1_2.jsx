// import '../css/Page1_2.css'
// export default function page1_2(){
//     return(
//         <div className=" bgcolor d-flex flex-column px-5  py-5 gap-4">
//             <div className=" d-flex row px-5" >
//                 <div className="col-12 col-lg-6">
//                 <h2 className="py-3 text-center text-lg-start">Importance of trees</h2>
//                 <h5>Trees improve air quality and regulate climate by absorbing carbon dioxide and providing oxygen. They also support biodiversity and prevent soil erosion by stabilizing the ground with their roots.</h5>
//                 </div>
//                 {/* <div></div> */}
//             </div>
//             <div className=" d-flex flex-row justify-content-between px-5">
//                 <div ></div>
//                 <div className=" col-lg-6 col-12 " >
//                 <h2 className="text-center py-3 text-lg-start">Analysis of soil</h2>
//                 <h5>To analyze soil at home, collect a composite sample and use a pH test kit or meter to determine acidity. Test soil texture with the jar method or feel test, and use a nutrient test kit to check for essential nutrients. Adjust soil amendments based on these results for optimal plant growth.
// </h5>
//                 </div>
               
//             </div>
//             <div className=" d-flex flex-column px-5">
//                 <div className=" col-lg-6 col-12 ">
//                 <h2 className=" text-center py-3 text-lg-start">We should not cut the trees</h2>
//                 <h5>Avoiding tree cutting is crucial for maintaining environmental balance, preserving wildlife habitats, and preventing soil erosion. Trees play a vital role in air quality and climate regulation, so protecting them supports a healthier planet for all.</h5>
//                 </div>
//                 <div></div>
//             </div>
//             <hr></hr>
           
            
//         </div>
//     )
// }



// import '../css/Page1_2.css';

// export default function Page1_2() {
//   return (
//     <div className="bg-success bg-opacity-10 px-3 px-md-5 py-5">

//       {/* Section 1: Importance of Trees */}
//       <div className="row align-items-center mb-5">
//         <div className="col-lg-6 col-12 mb-4 mb-lg-0">
//           <div className="bg-white rounded-5 shadow-lg p-4 h-100 border-start border-4 border-success">
//             <h2 className="text-success mb-3 fw-bold text-center text-lg-start font-monospace">
//               🌳 Importance of Trees
//             </h2>
//             <p className="text-secondary fs-5">
//               Trees improve air quality and regulate climate by absorbing carbon dioxide and providing oxygen. 
//               They also support biodiversity and prevent soil erosion by stabilizing the ground with their roots.
//             </p>
//           </div>
//         </div>
//         <div className="col-lg-6 d-none d-lg-block text-center">
//           <img
//             src="../geminiimage/treeicon.jpg"
//             alt="Tree Icon"
//             className="img-fluid rounded-4 shadow border border-success"
//             style={{ maxWidth: '320px' }}
//           />
//         </div>
//       </div>

//       {/* Section 2: Soil Analysis */}
//       <div className="row align-items-center mb-5 flex-lg-row-reverse">
//         <div className="col-lg-6 col-12 mb-4 mb-lg-0">
//           <div className="bg-white rounded-5 shadow-lg p-4 h-100 border-start border-4 border-success">
//             <h2 className="text-success mb-3 fw-bold text-center text-lg-start font-monospace">
//               🧪 Soil Analysis
//             </h2>
//             <p className="text-secondary fs-5">
//               To analyze soil at home, collect a composite sample and use a pH test kit or meter to determine acidity.
//               Test soil texture with the jar method or feel test, and check nutrients using a test kit.
//               Adjust with the right soil amendments for optimal plant growth.
//             </p>
//           </div>
//         </div>
//         <div className="col-lg-6 d-none d-lg-block text-center">
//           <img
//             src="../geminiimage/soilicon.jpg"
//             alt="Soil Icon"
//             className="img-fluid rounded-4 shadow border border-success"
//             style={{ maxWidth: '320px' }}
//           />
//         </div>
//       </div>

//       {/* Section 3: Avoid Tree Cutting */}
//       <div className="row align-items-center mb-4">
//         <div className="col-lg-6 col-12 mb-4 mb-lg-0">
//           <div className="bg-white rounded-5 shadow-lg p-4 h-100 border-start border-4 border-success">
//             <h2 className="text-success mb-3 fw-bold text-center text-lg-start font-monospace">
//               🚫 Don't Cut Trees
//             </h2>
//             <p className="text-secondary fs-5">
//               Avoiding tree cutting helps maintain environmental balance, preserve wildlife, and prevent erosion.
//               Trees purify the air and help regulate climate — saving them means saving our planet.
//             </p>
//           </div>
//         </div>
//         <div className="col-lg-6 d-none d-lg-block text-center">
//           <img
//             src="../geminiimage/savetree.avif"
//             alt="Save Trees"
//             className="img-fluid rounded-4 shadow border border-success"
//             style={{ maxWidth: '320px' }}
//           />
//         </div>
//       </div>

//       <hr className="mt-5 text-success opacity-50" />
//     </div>
//   );
// }



import '../css/Page1_2.css';

export default function Page1_2() {
  return (
    <div className="container my-5">
      
      {/* Section 1 */}
      <div className="bg-success bg-opacity-10 rounded-4 shadow-sm p-4 mb-5">
        <h2 className="text-success fw-bold mb-3 text-center">🌳 Importance of Trees</h2>
        <p className="fs-5 text-dark text-center px-2 px-md-5">
          Trees improve air quality and regulate climate by absorbing carbon dioxide and providing oxygen. 
          They support biodiversity and prevent soil erosion by stabilizing the ground with their roots.
        </p>
        <div className="text-center mt-3">
          <img
            src="../geminiimage/treeicon.jpg"
            alt="Tree Icon"
            className="img-fluid rounded-3 opacity-75"
            style={{ maxWidth: '200px' }}
          />
        </div>
      </div>

      {/* Section 2 */}
      <div className="bg-primary bg-opacity-10 rounded-4 shadow-sm p-4 mb-5">
        <h2 className="text-primary fw-bold mb-3 text-center">🧪 Soil Analysis</h2>
        <p className="fs-5 text-dark text-center px-2 px-md-5">
          Analyze soil at home by using a pH test kit or meter to determine acidity. 
          Check soil texture with the jar method, and use a nutrient kit for essential elements. 
          Improve your soil based on these insights to grow healthier plants.
        </p>
        <div className="text-center mt-3">
          <img
            src="../geminiimage/soilicon.jpg"
            alt="Soil Icon"
            className="img-fluid rounded-3 opacity-75"
            style={{ maxWidth: '200px' }}
          />
        </div>
      </div>

      {/* Section 3 */}
      <div className="bg-warning bg-opacity-10 rounded-4 shadow-sm p-4">
        <h2 className="text-warning fw-bold mb-3 text-center">🚫 Don't Cut Trees</h2>
        <p className="fs-5 text-dark text-center px-2 px-md-5">
          Avoiding tree cutting maintains the environment, protects wildlife, and reduces erosion. 
          Trees are essential for clean air and a stable climate. Save trees to save our future.
        </p>
        <div className="text-center mt-3">
          <img
            src="../geminiimage/savetree.avif"
            alt="Save Trees"
            className="img-fluid rounded-3 opacity-75"
            style={{ maxWidth: '200px' }}
          />
        </div>
      </div>
      
    </div>
  );
}


