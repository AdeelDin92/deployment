
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Questionaries from "./Questionaries";
import Description from "./Description";
import Task from "./Task";
import Tutorial from "./Tutorial";
import SlideShow from "./Testing/SlideShow"
import SlideTwo from "./Testing/SlideTwo";
import FinalSlide from "./Testing/FinalSlide";
import Test from "./Testing/Test"
import Tutorial1 from "./Tutorial1";
import Tutorial2 from "./Tutorial2"
import GenerateWorkerAndCampaignId from "./GenerateWorkerAndCampaignId";

function Routing() {
  return (
    <>
      <Router>
        <Routes>
        <Route path="/" element={<GenerateWorkerAndCampaignId />} />
          <Route path="/:workerId/:campaignId" element={<Questionaries />} />
          <Route path="/:workerId/:campaignId/Description"  element={<Description />} />
          <Route path="/:workerId/:campaignId/Tutorial" element={<Tutorial />} />
          <Route path="/:workerId/:campaignId/Tutorial1" element={<Tutorial1 />} />
          <Route path="/:workerId/:campaignId/Tutorial2" element={<Tutorial2 />} />
          <Route path="/:workerId/:campaignId/Test" element={<Test />} />
          <Route path="/:workerId/:campaignId/SlideShow" element={<SlideShow />} />
          <Route path="/:workerId/:campaignId/SlideTwo" element={<SlideTwo />} />
          <Route path="/:workerId/:campaignId/FinalSlide" element={<FinalSlide />} />
          <Route path="/:workerId/:campaignId/Task" element={<Task />} />
          <Route path="/user/:Token" element={<Task />} />
        </Routes>
      </Router>
    </>
  );
}

export default Routing;
