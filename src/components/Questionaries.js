
import React, {  useState } from "react";
import {  Button, Container } from "react-bootstrap";
import { useNavigate, useParams} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
;

function Questionaries() {
  const {workerId, campaignId} = useParams();

  const [Questions, setQuestions] = useState({
    campaign_id: campaignId,
    worker_id: workerId,
    Q1: "",
    Q2: "",
    Q3: "",
    Q4: "",
    Q5:"",
    Q6:"",
    Q7:""
  });

  const handleAnswers = (event) => {
    const target = event.target;
    const name = target.name;
    const value = target.value;
    setQuestions({ ...Questions, [name]: value });
  };

  function submitForm(e) {   
      e.preventDefault();
      //console.log(Questions);
      //navigate("/Description");
      //https://crowdsourcingbackend.herokuapp.com/
     

      const res = fetch("https://crowdsourcingbackend.herokuapp.com/",{
        method:"POST",
        headers:{
          "Content-type" : "application/json"
        },
        body:JSON.stringify({
          campaign_id: campaignId,
          worker_id: workerId,
          Q1:Questions.Q1,
          Q2:Questions.Q2,
          Q3:Questions.Q3,
          Q4:Questions.Q4,
          Q5:Questions.Q5,
          Q6:Questions.Q6,
          Q7:Questions.Q7,
        })
      });      
      
    
      if (res.status === 404 ) {
        window.alert("Questions Failed")
      } else {
        console.log("Questions Successfull")
        console.log(res)        
        navigate(`/${workerId}/${campaignId}/Description`)
      }
    
  }

  function check() {
    const buttons = document.querySelectorAll("input[type='radio']");
    buttons.forEach((button) => {
      if (!button.checked) {
        button.setAttribute("required", "");
      }
    });
  }

  const navigate = useNavigate();

  return (
    <>
      <Container
        className="d-flex align-items-center justify-content-center "
        style={{ minHeight: "100vh" }}
      >
        <div className="w-100" style={{ maxWidth: "1000px" }}>
          <div className="form-container" style={{height:"120vh"}}>
            <form
              onSubmit={submitForm}
              style={{ display: "flex", flexDirection: "column" }}
            >
              <legend className="mb-3">
                Please fill out this Questionair ?
              </legend>
              <div className="mb-3">
                <label className="mb-3">What is your Gender</label>
                <p>
                  <input
                    type="radio"
                    name="Q1"
                    value="Male"                   
                    onChange={handleAnswers}
                    className="me-2"
                  />
                  Male
                </p>
                <p>
                  <input
                    type="radio"
                    name="Q1"
                    value="Female"
                    onChange={handleAnswers}
                    className="me-2"
                  />
                  Female
                </p>
                <p>
                  <input
                    type="radio"
                    name="Q1"
                    value="Other"
                    onChange={handleAnswers}
                    className="me-2"
                  />
                  Other
                </p>
              </div>
              <div className="mb-3">
                <label className="mb-3">What is your age?</label>
                <p>
                  <input
                    type="radio"
                    name="Q2"
                    value="18-25"
                    onChange={handleAnswers}
                    className="me-2"
                  />
                  18-25
                </p>
                <p>
                  <input
                    type="radio"
                    name="Q2"
                    value="26-35"
                    onChange={handleAnswers}
                    className="me-2"
                  />
                  26-35
                </p>
                <p>
                  <input
                    type="radio"
                    name="Q2"
                    value="36-45"
                    onChange={handleAnswers}
                    className="me-2"
                  />
                  36-45
                </p>
                <p>
                  <input
                    type="radio"
                    name="Q2"
                    value="older than 45"
                    onChange={handleAnswers}
                    className="me-2"
                  />
                  45-60
                </p>
              </div>
              <div className="mb-3">
                <label className="mb-3">What is your level of education?</label>
                <p>
                  <input
                    type="radio"
                    name="Q3"
                    value="No schooling"
                    onChange={handleAnswers}
                    className="me-2"
                  />
                  No schooling
                </p>
                <p>
                  <input
                    type="radio"
                    name="Q3"
                    value="High School"
                    onChange={handleAnswers}
                    className="me-2"
                  />
                  High School
                </p>
                <p>
                  <input
                    type="radio"
                    name="Q3"
                    value="College"
                    onChange={handleAnswers}
                    className="me-2"
                  />
                  College
                </p>
                <p>
                  <input
                    type="radio"
                    name="Q3"
                    value="Bachelors Degree"
                    onChange={handleAnswers}
                    className="me-2"
                  />
                  Bachelors Degree
                </p>
                <p>
                  <input
                    type="radio"
                    name="Q3"
                    value="Master Degree"
                    onChange={handleAnswers}
                    className="me-2"
                  />
                  Master Degree
                </p>
                <p>
                  <input
                    type="radio"
                    name="Q3"
                    value="Doctorate Degree"
                    onChange={handleAnswers}
                    className="me-2"
                  />
                  Doctorate Degree
                </p>
              </div>
              <div className="mb-3">
                <label className="mb-3">
                  Are you a native speaker of English?
                </label>
                <p>
                  <input
                    type="radio"
                    name="Q4"
                    value="Yes"
                    onChange={handleAnswers}
                    className="me-2"
                  />
                  Yes
                </p>
                <p>
                  <input
                    type="radio"
                    name="Q4"
                    value="No"
                    onChange={handleAnswers}
                    className="me-2"
                  />
                  No
                </p>
              </div>
              <div className="mb-3">
                <label className="mb-3">
                Why are you willing to do this Crowdworker task? 
                </label>
                <p>
                  <input
                    type="radio"
                    name="Q5"
                    value="Financial benefit" 
                    onChange={handleAnswers}
                    className="me-2"
                  />
                  Financial benefit 
                </p>
                <p>
                  <input
                    type="radio"
                    name="Q5"
                    value="Education"
                    onChange={handleAnswers}
                    className="me-2"
                  />
                  Education 
                </p>
                <p>
                  <input
                    type="radio"
                    name="Q5"
                    value="For fun"
                    onChange={handleAnswers}
                    className="me-2"
                  />
                 For fun 
                </p>
                <p>
                  <input
                    type="radio"
                    name="Q5"
                    value="I am expected to do it"
                    onChange={handleAnswers}
                    className="me-2"
                  />
                 I am expected to do it
                </p>                
              </div>
              <div className="mb-3">
                <label className="mb-3">
                Did you already see a <a className="text-nowrap tip " href="#sad">histological<span>Histological images show microscopic structures of cells and tissues.</span></a> image before?  
                </label>
                <p>
                  <input
                    type="radio"
                    name="Q6"
                    value="Yess" 
                    onChange={handleAnswers}
                    className="me-2"
                  />
                  Yes
                </p>
                <p>
                  <input
                    type="radio"
                    name="Q6"
                    value="No" 
                    onChange={handleAnswers}
                    className="me-2"
                  />
                  No 
                </p>
                     
              </div>
              <div className="mb-3">
                <label className="mb-3">
                Did you already complete a (Crowdworker-) task, which deals with tumor-identification in histological images?  
                </label>
                <p>
                  <input
                    type="radio"
                    name="Q7"
                    value="Yess" 
                    onChange={handleAnswers}
                    className="me-2"
                  />
                  Yes
                </p>
                <p>
                  <input
                    type="radio"
                    name="Q7"
                    value="No" 
                    onChange={handleAnswers}
                    className="me-2"
                  />
                  No 
                </p>
                     
              </div>


              <Button
                type="submit"
                className="mt-4"
                id="submitBtn"
                onClick={check}
              >
                Submit
              </Button>
            </form>
          </div>
        </div>
      </Container>
    </>
  );
}

export default Questionaries;

/*
for (const [key,value] of Object.entries(Questions)) {
  while (value === null || value === "") {        
    const buttons = document.querySelectorAll("input[type='radio']");
    buttons.forEach(button => {          
       if(!button.checked) {
         button.setAttribute("required","")  
         }                    
       })
       return 
  }
         
}             
*/

/*const postForm = async (e)=> {   
  e.preventDefault();
  const {Q1,Q2,Q3} = Questions;
  const res = await fetch("/Questionaries",{
    method:"POST",
    headers:{
      "Content-type" : "application/json"
    },
    body:JSON.stringify({
      Q1:"",
      Q2:"",
      Q3:""
    })
  });
  
  const data = await res.json()

  if (res.status === 404 || !data) {
    window.alert("Questions Failed")
  } else {
    console.log("Questions Successfull")
    navigate("/Description")
  }
}    
*/
