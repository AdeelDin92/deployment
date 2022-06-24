import React from 'react'

function FinalSlide({TestAnswers,setTestanswers}) {
  const handleTestAnswers = (event) => {
    const target = event.target;
    const name = target.name;
    const value = target.value;    
    setTestanswers({ ...TestAnswers, [name]: value });
   
  };
  return (
    <div>
       <div className="Container">
          <div className="row justify-content-around py-4">
            <div className="col-sm-6 col-md-6 col-lg-5 col-xxl-6 col-xl-5">
              <img src="/Testing/Test3_correct_annotated.jpg" className="card-img-size img-fluid" ></img>
              <div className="d-flex justify-content-center my-5">
                <input type="radio" className="ms-3" name="Q3" value="E" onChange={handleTestAnswers} ></input>
                <label>E</label>
              </div>
            </div>
            <div className="col-sm-6 col-md-6 col-lg-5 col-xxl-6 col-xl-5">
              <img src="/Testing/Test3_wrong_annotated.jpg" className="card-img-size img-fluid" ></img>
              <div className="d-flex justify-content-center my-5">
                <input type="radio" className="ms-3" name="Q3" value="F" onChange={handleTestAnswers}></input>
                <label>F</label>
              </div>
            </div>
          </div>
        </div> 
    </div>
  )
}

export default FinalSlide