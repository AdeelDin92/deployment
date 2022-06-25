import React   from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Routing from "../components/Routing"



function App() {

  

  return (
    <>
   
        <Routing/>      
           
    </>
  );
};

export default App;



 /*useEffect(async () => {
   const response = await fetch('/app');
   const data = response.data;

   setBackendData(data)

  //  fetch("/app").then(
  //    response => response.json()
  //  ).then(
  //    data=> setBackendData(data)
  //  )
 },[])
*/
