import React from 'react'
import {useParams } from "react-router-dom";
import { v4 as uuidv4 } from 'uuid';

function Payment() {
const {workerId, campaignId} = useParams();
const AccountKey = uuidv4()
  return (
    <>
        <div className="payment-container">
            <h2 className="text-center mt-6">Thank you for taking part in the task</h2>
            <div style={{"height":"40px" , "width":"100%"}}></div>
            <h2 className="text-center mt-5">Please copy the payment code below to recieve your payment</h2>
            <div className="payment-box col-6 d-flex align-items-center justify-content-center ">
                <h6 >{`${workerId}-${campaignId}-${AccountKey}`}</h6>

            </div>
        </div>
    </>
  )
}

export default Payment