import React  , {useEffect,useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Routing from "../components/Routing"



function App() {

  const [backendData , setBackendData] = useState([])

  return (
    <>
    {backendData.length > 0 && backendData.map((data, key) => (
      <div key={key}>data.token</div>
    ))}      
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
