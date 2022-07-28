import React from 'react'
import {useParams } from "react-router-dom";
import { v4 as uuidv4 } from 'uuid';
import sjcl from 'sjcl'

function Payment() {
const {worker_id, campaign_id} = useParams();
/*const AccountKey = uuidv4()*/
const PaymentCode = "36jk88lpoxt";

const PaymentGeneratorString = `${worker_id}${campaign_id}${PaymentCode}`;
const myBitArray = sjcl.hash.sha256.hash(PaymentGeneratorString)
const myHash = sjcl.codec.hex.fromBits(myBitArray);


  return (
    <>
        <div className="payment-container">
            <h2 className="text-center mt-6">Thank you for taking part in the task</h2>
            <div style={{"height":"40px" , "width":"100%"}}></div>
            <h2 className="text-center mt-5">Please copy the payment code below to recieve your payment</h2>
            <div className="payment-box d-flex align-items-center justify-content-center ">
                <h6 >{`${myHash}`}</h6>

            </div>
        </div>
    </>
  )
}

export default Payment