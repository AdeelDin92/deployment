import React,{useState} from "react";
import { useNavigate ,useParams } from "react-router-dom";
import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";


function Description() {
  const navigate = useNavigate();
  const [disabled,setDisabled] = useState(true)
  //let count = 5;
  const {workerId, campaignId} = useParams();

  const [interval,stInterval] = useState(5);
  
  setTimeout(beep,5000) 
  let timeout = setInterval(function () {
    stInterval(interval - 1)   
   
  },1000)
  
  if (interval === 0) {
    clearInterval(timeout)
   
  }
  

 
  
    
  function beep() {
    setDisabled(false);
  }
  
 
  return (
    <div
      className="body"
      style={{
        backgroundColor: "#FFFFF",
        height: "100vh",
        width: "100%",
        overflow: "hidden",
      }}
    >
      <Container className="main-container">
        <Container>
          <div className="col-12 mt-5">
            <h1 className="text-center fw-medium">General Information</h1>
          </div>
        </Container>
        <div style={{ height: "2rem" }}></div>
        <div className="col-12 mt-6">
          <h3>Task Description</h3>
        </div>
        <div className="col-12 mt-5 ">
          <p>
            In this task, you are going to detect and annotate tumor in 5
            different images.
          </p>
        </div>
        <div style={{ height: "1.5rem" }}></div>
        <Container>
          <div className="row justify-content-between">
            <div className="col-5">
              <div className="d-flex">
                <img src="/logo.png" alt="logo" style={{ width: "50px" }}></img>
                <h3 className="align-self-center mb-0 px-4">
                  Task Guidelines
                </h3>
              </div>
              <ol className="list-group mt-5">
                <li className=" py-3">
                Fill out the questionnaire
                </li>
                <li className=" py-3">
                Watch the tutorial – you can always rewatch it
                </li>
                <li className=" py-3">
                Perform a quick knowledge check
                </li>
                <li className=" py-3">
                Annotate the images
                </li>
                <li className=" py-3">
                Receive your payment code
                </li>                
              </ol>
            </div>
            <div className="col-5">
              <div className="d-flex">
                <img src="/logo2.png" alt="logo" style={{ width: "60px" }}></img>
                <h3 className="align-self-center mb-0 px-4">
                  Interface Instructions
                </h3>
              </div>
              <ol className="list-group mt-5"> 
              <li className="py-3">
                Press and hold left mouse button to annotate
                </li>            
               
                <li className="py-3">
                Press “next image” when finished with annotating
                </li>
                <li className=" py-3">
                Your progress will be saved automatically
                </li>
                <li className=" py-3">
                For help, you can always rewatch click the tutorial button
                </li>
              </ol>
            </div>
          </div>
          <div className="text-center my-4">Remaining time to click : {interval}</div>
          <div className="text-center my-5">
            <button
              type="button"
              className="py-2 px-5 next"
              disabled={disabled}
              onClick={() => {
                navigate(`/${workerId}/${campaignId}/Tutorial`)
               
              }}
              
            >
              Next
            </button>
          </div>
        </Container>
      </Container>
    </div>
  );
}

export default Description;
