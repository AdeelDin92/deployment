
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
/*import GenerateWorkerAndCampaignId from "./GenerateWorkerAndCampaignId";*/
import Payment from "./Payment";

function Routing() {
  return (
    <>
      <Router>
        <Routes> 
        
          <Route path="/:worker_id/:campaign_id/" element={<Questionaries />} />
          <Route path="/:worker_id/:campaign_id/Description"  element={<Description />} />
          <Route path="/:worker_id/:campaign_id/Tutorial" element={<Tutorial />} />
          <Route path="/:worker_id/:campaign_id/Tutorial1" element={<Tutorial1 />} />
          <Route path="/:worker_id/:campaign_id/Tutorial2" element={<Tutorial2 />} />
          <Route path="/:worker_id/:campaign_id/Test" element={<Test />} />
          <Route path="/:worker_id/:campaign_id/SlideShow" element={<SlideShow />} />
          <Route path="/:worker_id/:campaign_id/SlideTwo" element={<SlideTwo />} />
          <Route path="/:worker_id/:campaign_id/FinalSlide" element={<FinalSlide />} />
          <Route path="/:worker_id/:campaign_id/Task" element={<Task />} />
          <Route path="/:worker_id/:campaign_id/Payment" element={<Payment />} />         
        </Routes>
      </Router>
    </>
  );
}

export default Routing;
