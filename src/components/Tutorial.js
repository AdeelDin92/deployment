import React, { useState } from "react";

import { useNavigate,useParams } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function Tutorial() {
  const [count, setCount] = useState(1);
  const[imgSrc,setimgSrc] = useState(0)
  const [disabled, setDisabled] = useState(true);
  const {worker_id, campaign_id} = useParams();

  function increment() {
    if (imgSrc <= 3){
        setCount(count+1)
        setimgSrc(imgSrc +1)
        let lmg = document.querySelector(".img");
         // eslint-disable-next-line
        let g = `/Slideshow/image_${imgSrc + 1}` + ".gif";
        lmg.src = g;
        setDisabled(false);
        console.log(count)
    }

        if (count === 3) {
          setCount(count+1)
          let nextBtn = document.querySelector(".sum");
          console.log(count);
          nextBtn.innerHTML = "Continue";
        }
        if (count === 4) {         
          let lmg = document.querySelector(".img");
          lmg.src = "/Slideshow/image_0.gif";
          navigate(`/${worker_id}/${campaign_id}/Test`);
        }
      ;
  }

  function decrement() {
    if (count >= 1){
      setCount(count-1)
      setimgSrc(imgSrc - 1)
      let lmg = document.querySelector(".img");
      // eslint-disable-next-line
     let g = `/Slideshow/image_${imgSrc- 1}` + `.gif`;
     lmg.src = g;
     let nextBtn = document.querySelector(".sum");
     nextBtn.innerHTML = "Next";
     setDisabled(false);
     

    }
     
       
        if (count === 2) {
          setDisabled(true);
        }
      ;
  }
  const navigate = useNavigate();

  return (
    <div style={{ backgroundColor: "#F0F3F4" }}>
      <div
        className="container tutorial-container"
        style={{ backgroundColor: "#FFFFFF", width: "100%", height: "100vh" }}
      >
        <h1 className="text-center pt-4 mb-5 fw-bold">Tutorial</h1>
        <p className="text-center">Showing {count}/4</p>
        <div className="container">
          <div
            className="col-lgl-6 col-xxl-6 mx-auto"
            style={{ border: "solid 1px black" }}
          >
            <img
              src="/Slideshow/image_0.gif"
              alt="show2"
              className="img-fluid img"
              style={{ width: "100%", height: "100%" }}
            ></img>
          </div>
          <div className="btn-col  mx-auto mt-5 d-flex">
            <button
              onClick={decrement}
              className="previous sub"
              disabled={disabled}
            >
              &laquo; Previous
            </button>
            <div style={{ width: "80px" }}></div>
            <button onClick={increment} className="next sum">
              Next &raquo;
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tutorial;
