import React from "react";

import { useNavigate,useParams } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function Tutorial2() {

  const {workerId, campaignId} = useParams();




const navigate = useNavigate();
 

  return (      
      <div className="container-fluid"
        style={{ backgroundColor: "#FFFFFF", width: "100%", height: "100vh" }}>
          <h1 className="text-center py-4">Tutorial</h1>
          <div className="row justify-content-evenly align-items-center" style={{height:"80vh "}}>
          <div className="col-3 ">
            <img src="/Slideshow/image_0.gif" alt = "show1" style={{width:"100%"}}></img>
          </div>
          <div className="col-3">
            <img src="/Slideshow/image_1.gif" alt = "slide2" style={{width:"100%"}}></img>
          </div>
          <div className="col-3">
            <img src="/Slideshow/image_2.gif" alt = "show3" style={{width:"100%"}}></img>
          </div>       

          </div>
          <div className="col text-center">
          <button  onClick={()=>navigate(`/${workerId}/${campaignId}/Task`)} className="next sum">
              Next &raquo;
            </button>
          </div>

       
      </div>
  
  );
}

export default Tutorial2;
