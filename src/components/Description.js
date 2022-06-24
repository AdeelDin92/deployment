import React,{useState} from "react";
import { useNavigate } from "react-router-dom";
import { Container, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";


function Description() {
  const navigate = useNavigate();
  const [disabled,setDisabled] = useState(true)
  setTimeout(() => setDisabled(false),5000)
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
            In this task, you are going to detect and annotate tumor in ten
            different images.
          </p>
        </div>
        <div style={{ height: "1.5rem" }}></div>
        <Container>
          <div className="row justify-content-between">
            <div className="col-5">
              <div className="d-flex">
                <img src="/logo.png" style={{ width: "50px" }}></img>
                <h3 className="align-self-center mb-0 px-4">
                  Task Guidelines
                </h3>
              </div>
              <ul className="list-group mt-5">
                <li className="list-group-item py-3">
                Fill out the questionnaire
                </li>
                <li className="list-group-item py-3">
                Watch the tutorial – you can always rewatch it
                </li>
                <li className="list-group-item py-3">
                Perform a quick knowledge check
                </li>
                <li className="list-group-item py-3">
                Annotate the images
                </li>
                <li className="list-group-item py-3">
                Receive your payment code
                </li>                
              </ul>
            </div>
            <div className="col-5">
              <div className="d-flex">
                <img src="/logo2.png" style={{ width: "60px" }}></img>
                <h3 className="align-self-center mb-0 px-4">
                  Interface Instructions
                </h3>
              </div>
              <ul className="list-group mt-5"> 
              <li className="list-group-item py-3">
                Press and hold left mouse button to annotate
                </li>            
               
                <li className="list-group-item py-3">
                Press “next image” when finished with annotating
                </li>
                <li className="list-group-item py-3">
                Your progress will be saved automatically
                </li>
                <li className="list-group-item py-3">
                For help, you can always rewatch the tutorial with the button “help"
                </li>
              </ul>
            </div>
          </div>
          <div className="text-center my-3">
            <button
              type="button"
              className="py-2 px-5 next"
              disabled={disabled}
              onClick={() => {
                navigate("/Tutorial")
               
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
