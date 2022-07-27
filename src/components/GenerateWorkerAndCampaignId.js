import React, { useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid';
import { useNavigate } from "react-router-dom";



export default function GenerateWorkerAndCampaignId() {
  setLocalHost();

  const campaign_id = localStorage.getItem('campaignId');
  const worker_id = localStorage.getItem('workerId');

  const navigate = useNavigate();
   
  useEffect(() => {
    navigate(`/${worker_id}/${campaign_id}/Questionai`, { replace: true });
    // eslint-disable-next-line
    // eslint-disable-next-line
  }, []);
    
  return (
    <></>
  )
}


const setLocalHost = () => {
  localStorage.setItem('campaign_id', 'c781');
  const storage=localStorage.length;
  console.log(storage)

  if (!localStorage.getItem('worker_id')) {
    const uuid = uuidv4();
    localStorage.setItem('worker_id', uuid);
  }
}

