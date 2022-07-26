import React, { useState } from "react";
import { Container } from "react-bootstrap";
import FinalSlide from "./FinalSlide";
import SlideShow from "./SlideShow";
import SlideTwo from "./SlideTwo";

import { useNavigate, useParams } from "react-router-dom";

function Test() {
  const [page, setPage] = useState(0);
  const { worker_id, campaign_id } = useParams();
  const [TestAnswers, setTestanswers] = useState({
    worker_id: worker_id,
    campaign_id: campaign_id,
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
    navigate(`/${worker_id}/${campaign_id}/Tutorial1`);
  };

  function check() {
    var failure = document.querySelector(".failure");
    failure.innerText = "Test failed please watch the tutorial again";
  }

  function testPost() {
    const res = fetch("https://crowdsourcingbackend.herokuapp.com/:worker_id/:campaign_id/Test", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        campaign_id: campaign_id,
        worker_id: worker_id,
        Q1: TestAnswers.Q1,
        Q2: TestAnswers.Q2,
        Q3: TestAnswers.Q3,
      }),
    });
    if (res.status === 404) {
      window.alert("Testing Failed");
    } else {
      console.log("Test Successfull");
      console.log(res);
      navigate(`/${worker_id}/${campaign_id}/Task`);
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
            Tutorial<img src="/logo.png" alt="logo"></img>
          </h5>
          <h5>{TestTitle[page]}</h5>
        </div>
        <div className="body2">{PageDisplay()}</div>
        <div className="text-center failure mb-4"></div>
        <div className="btn-col  d-flex">
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
                  TestAnswers.Q2 === "A" &&
                  TestAnswers.Q3 === "B"
                ) {
                  testPost();
                } else if (
                  TestAnswers.Q1 === "A" &&
                  TestAnswers.Q2 === "B" &&
                  TestAnswers.Q3 === "A"
                ) {
                  testPost();
                } else if (
                  TestAnswers.Q1 === "A" &&
                  TestAnswers.Q2 === "B" &&
                  TestAnswers.Q3 === "B"
                ) {
                  check();
                } else if (
                  TestAnswers.Q1 === "B" &&
                  TestAnswers.Q2 === "A" &&
                  TestAnswers.Q3 === "A"
                ) {
                  testPost();
                } else if (
                  TestAnswers.Q1 === "B" &&
                  TestAnswers.Q2 === "A" &&
                  TestAnswers.Q3 === "B"
                ) {
                  check();
                } else if (
                  TestAnswers.Q1 === "B" &&
                  TestAnswers.Q2 === "B" &&
                  TestAnswers.Q3 === "A"
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
                    // eslint-disable-next-lin
                    setPage((currentPage) => currentPage + 1);
                    var failure2 = document.querySelector(".failure");
                    failure2.innerText = "";
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
