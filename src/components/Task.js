import React from "react";
import { useNavigate } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import RegionsList from "./RegionsList";


function Task() {
  let naviagate = useNavigate();

  /* Navigate to Tutorial  */
  const openTutorial = () => {
    
    naviagate("/Tutorial2");
  };

  return (
    <div className="container wrapper">
      <div className="text-center">
        <h2 className="d-inline-block">Annotation Task</h2>
        <h5
          className="d-inline-block ms-5 tutorial"
          style={{ cursor: "pointer" }}
          onClick={openTutorial}
        >
          Tutorial<img src="/logo.png" alt="logo" style={{ width: "50px" }}></img>
        </h5>
        <p className="description me-5">
          Please annotate the tumors regions
        </p>
      </div>

      <RegionsList />
    </div>
  );
}

export default Task;
