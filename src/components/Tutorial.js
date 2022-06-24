import React, { useState, useRef } from "react";
import { Button, Container } from "react-bootstrap";
import { useNavigate, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function Tutorial() {
  const [count, setCount] = useState(0);
  const [disabled, setDisabled] = useState(true);

  function increment() {
    if (count <= 4)
      setCount((pre) => {
        setCount(pre + 1);
        let lmg = document.querySelector(".img");
        let g = `/Slideshow/image_${pre + 1}` + `.gif`;
        lmg.src = g;
        setDisabled(false);

        if (count === 2) {
          let nextBtn = document.querySelector(".sum");
          console.log(count);
          nextBtn.innerHTML = "Continue";
        }
        if (count === 3) {
          console.log("hey");
          let lmg = document.querySelector(".img");
          lmg.src = "/Slideshow/image_0.gif";
          navigate("/Test");
        }
      });
  }

  function decrement() {
    if (count >= 0)
      setCount((pre) => {
        setCount(pre - 1);
        let lmg = document.querySelector(".img");
        let g = `/Slideshow/image_${pre - 1}` + `.gif`;
        lmg.src = g;
        let nextBtn = document.querySelector(".sum");
        nextBtn.innerHTML = "Next";
        setDisabled(false);
        if (count === 1) {
          setDisabled(true);
        }
      });
  }
  const navigate = useNavigate();

  return (
    <div style={{ backgroundColor: "#F0F3F4" }}>
      <div
        className="container"
        style={{ backgroundColor: "#FFFFFF", width: "100%", height: "100vh" }}
      >
        <h1 className="text-center pt-5 mb-5 fw-bold">Tutorial</h1>
        <p className="text-center">Showing {count}/3</p>
        <div className="container">
          <div
            className="col-6 mx-auto"
            style={{ border: "solid 1px black", height: "500px" }}
          >
            <img
              src="/Slideshow/image_0.gif"
              className="img-fluid img"
              style={{ width: "100%", height: "100%" }}
            ></img>
          </div>
          <div className="col-3 mx-auto mt-5 d-flex">
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
