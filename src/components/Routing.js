
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Questionaries from "./Questionaries";
import Description from "./Description";
import Task from "./Task";
import Testing from "./Testing/SlideTwo";
import Tutorial from "./Tutorial";
import SlideShow from "./Testing/SlideShow"
import SlideTwo from "./Testing/SlideTwo";
import FinalSlide from "./Testing/FinalSlide";
import Test from "./Testing/Test"
import Tutorial1 from "./Tutorial1";
import Tutorial2 from "./Tutorial2"

function Routing() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Questionaries />} />
          <Route path="/Description" element={<Description />} />
          <Route path="/Tutorial" element={<Tutorial />} />
          <Route path="/Tutorial1" element={<Tutorial1 />} />
          <Route path="/Tutorial2" element={<Tutorial2 />} />
          <Route path="/Test" element={<Test />} />
          <Route path="/SlideShow" element={<SlideShow />} />
          <Route path="/SlideTwo" element={<SlideTwo />} />
          <Route path="/FinalSlide" element={<FinalSlide />} />
          <Route path="/Task" element={<Task />} />
          <Route path="/user/:Token" element={<Task />} />
        </Routes>
      </Router>
    </>
  );
}

export default Routing;
