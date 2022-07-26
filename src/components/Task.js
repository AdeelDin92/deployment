import React,{useState} from "react";


import "bootstrap/dist/css/bootstrap.min.css";
import RegionsList from "./RegionsList";


function Task() {
  //let naviagate = useNavigate();
  const [isActive,setActive] = useState("false");
 

  /* Navigate to Tutorial  */
  const openTutorial = () => {
    setActive(!isActive);
    //naviagate(`/${workerId}/${campaignId}/Tutorial2`);
  };

  return (
    <div className="container wrapper">
      <div className="d-flex justify-content-between mt-3">
        <p style={{"visibility":"hidden" , "width":"125px"}}>extra</p>
        <h2 className="d-inline-block">Annotation Task</h2> 
        <h5 onClick={openTutorial} style={{"float":"right","marginRight":"10px"}}>Tutorial <img src="/logo.png" alt="opentutorial" style={{"cursor":"pointer"}}></img></h5>     
             
       
        <div className={isActive ? "tutorial" : "tt"}> 
          <h5 style={{"float":"right" ,"marginRight":"20px"}} onClick={openTutorial}>Tutorial<img src ="/logo.png" style={{"cursor":"pointer"}} alt="opentutorial2" ></img> </h5>     
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
          <div className="col-3">
            <img src="/Slideshow/image_2.gif" alt = "show4" style={{width:"100%"}}></img>
          </div>        

          </div>
          
        </div>
       
      
      </div>
      <h5 className="description me-2 mb-4">
          Please annotate the tumors regions
        </h5>

      <RegionsList />
    </div>
  );
}

export default Task;
