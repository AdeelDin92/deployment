import React, { useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid';
import { useNavigate } from "react-router-dom";

export default function GenerateWorkerAndCampaignId() {
  setLocalHost();

  const campaignId = localStorage.getItem('campaignId');
  const workerId = localStorage.getItem('workerId');

  const navigate = useNavigate();
   
  useEffect(() => {
    navigate(`/${workerId}/${campaignId}`, { replace: true });
    // eslint-disable-next-line
  }, []);
    
  return (
    <></>
  )
}

const setLocalHost = () => {
  localStorage.setItem('campaignId', 'c781');

  if (!localStorage.getItem('workerId')) {
    const uuid = uuidv4();
    localStorage.setItem('workerId', uuid);
  }
}
