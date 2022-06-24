import React, { useState, useRef, useEffect } from "react";
import { Container, FormCheck } from "react-bootstrap";
import FinalSlide from "./FinalSlide";
import SlideShow from "./SlideShow";
import SlideTwo from "./SlideTwo";
import Task from "../Task";
import reactDom from "react-dom";
import { useNavigate } from "react-router-dom";

function Test() {
  const [page, setPage] = useState(0);
  const [TestAnswers, setTestanswers] = useState({
    Q1: "",
    Q2: "",
    Q3: "",
  });

  const TestTitle = [
    "Select which image contains the tumor",
    "Select which image contains the tumor",
    "Select which image is annotated correctly",
  ];

  const PageDisplay = () => {
    if (page === 0) {
      return (
        <SlideShow TestAnswers={TestAnswers} setTestanswers={setTestanswers} />
      );
    } else if (page === 1) {
      return (
        <SlideTwo
          TestAnswers={TestAnswers}
          setTestanswers={setTestanswers}
        ></SlideTwo>
      );
    } else if (page === 2) {
      return (
        <FinalSlide
          TestAnswers={TestAnswers}
          setTestanswers={setTestanswers}
        ></FinalSlide>
      );
    }
  };
  const navigate = useNavigate();

  const openTutorial = () => {
    let refrence = document.querySelector(".tutorial");
    navigate("/Tutorial1");
  };

  function check() {
    var failure = document.querySelector(".failure");
    failure.innerText = "Test failed please watch the tutorial again";
   
  }

  function testPost () { 
      
    const res = fetch("/Test",{
      method : "POST",
      headers : {
        "Content-type" : "application/json"
      },
      body:JSON.stringify({
        Q1 : TestAnswers.Q1,
        Q2 : TestAnswers.Q2,
        Q3 : TestAnswers.Q3
      })      
    })
    if (res.status === 404 ) {
      window.alert("Testing Failed")
    } else {
      console.log("Test Successfull")
      console.log(res)        
      navigate("/Task")
    }
  }

  return (
    <Container fluid>
      <div className="test-container">
        <div className="header">
          <h1 className="d-inline-block text-center">
            Test your knowledge to get to the task{" "}
          </h1>
          <h5
            className="d-inline-block ms-5 tutorial"
            style={{ cursor: "pointer" }}
            onClick={openTutorial}
          >
            Tutorial<img src="/logo.png" style={{ width: "50px" }}></img>
          </h5>
          <h5>{TestTitle[page]}</h5>
        </div>
        <div className="body cc" style={{ flex: "60%" }}>
          {PageDisplay()}
        </div>
        <div
          className="text-center failure mb-4"
          style={{ color: "red" }}
        ></div>
        <div className="footer mb-4">
          <button
            className="previous"
            disabled={page === 0}
            onClick={() => {
              setPage((currentPage) => currentPage - 1);
              var failure = document.querySelector(".failure");
              failure.innerText = "";
            }}
          >
            &laquo;Previous
          </button>
          <div style={{ width: "80px" }}></div>
          <button
            className="next"
            disabled={page === TestTitle.length}
            onClick={() => {
              if (page === TestTitle.length - 1) {
                if (
                  TestAnswers.Q1 === "A" &&
                  TestAnswers.Q2 === "C" &&
                  TestAnswers.Q3 === "E"
                ) {
                  testPost()
                } else if (
                  TestAnswers.Q1 === "A" &&
                  TestAnswers.Q2 === "C" &&
                  TestAnswers.Q3 === "F"
                ) {
                  testPost()
                } else if (
                  TestAnswers.Q1 === "A" &&
                  TestAnswers.Q2 === "D" &&
                  TestAnswers.Q3 === "E"
                ) {
                  testPost()
                } else if (
                  TestAnswers.Q1 === "A" &&
                  TestAnswers.Q2 === "D" &&
                  TestAnswers.Q3 === "F"
                ) {
                  check();
                } else if (
                  TestAnswers.Q1 === "B" &&
                  TestAnswers.Q2 === "C" &&
                  TestAnswers.Q3 === "E"
                ) {
                 testPost()
                } else if (
                  TestAnswers.Q1 === "B" &&
                  TestAnswers.Q2 === "C" &&
                  TestAnswers.Q3 === "F"
                ) {
                  check();
                } else if (
                  TestAnswers.Q1 === "B" &&
                  TestAnswers.Q2 === "D" &&
                  TestAnswers.Q3 === "E"
                ) {
                  check();
                } else {
                  check();
                }
              } else {
                const buttons = document.querySelectorAll(
                  "input[type='radio']"
                );
                buttons.forEach((button) => {
                  if (!button.checked) {
                    button.setAttribute("required", "");
                    var failure = document.querySelector(".failure");
                    failure.innerText = "Select one option";
                  }

                  if (button.checked) {
                    setPage((currentPage) => currentPage + 1);
                    var failure = document.querySelector(".failure");
                    failure.innerText = "";
                  }
                });
              }
            }}
          >
            {page === TestTitle.length - 1 ? "Continue" : "Next"}
          </button>
        </div>
      </div>
    </Container>
  );
}

export default Test;
