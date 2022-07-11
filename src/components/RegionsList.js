import React, { useState } from "react";
import { SortableContainer, SortableElement } from "react-sortable-hoc";

import "bootstrap/dist/css/bootstrap.min.css";
import arrayMove from "array-move";
import useStore from "../store";


import Canvas from "./Canvas";
import "../styles.css";
const SortableItem = SortableElement(({ regionHash, region, sortIndex, onRemove }) => {
  return (
    <div
      className="region"
      style={{
        boxShadow: `0 0 5px ${region.color}`,
        border: `1px solid ${region.color}`,
      }}
    >
      Region #{regionHash}
      <button
        onClick={() => {
          onRemove(sortIndex);
        }}
      >
        Delete
      </button>
    </div>
  );
});

const SortableList = SortableContainer(({ items, onRemove }) => {
  return (
    <div className="regions-list">
      {items.map((region, index) => (
        <SortableItem
          key={`item-${region.id}`}
          index={index}
          region={region}
          onRemove={onRemove}
          sortIndex={index}
          regionHash={index + 1}
        />
      ))}
    </div>
  );
});
function RegionList() {
  const regions = useStore((s) => s.regions); 
  
  const setRegions = useStore((s) => s.setRegions);  
  const [showCoordinates, setShowCoordinates] = useState(false);
  //const selectedId = useStore(s => s.selectedRigionId);
  //const selectRegion = useStore(s => s.selectRegion);
 //const isDrawing = useStore((state) => state.isDrawing);

  

  const displayCordinates = () => {
    setShowCoordinates(!showCoordinates);
  };

  const listCoordinates = () => <div></div>;


  //States for changing Image source on the Task page
  //States for changing Image source on the Task page
  const [imageSrc, setImgSrc] = useState(1);
  const [disabled, setDisabled] = useState(true); // state for next and previous image
  const [imageRegions, setImageRegions] = useState([]);
  const [canSave, setCanSave] = useState(false); // state for next and previous image
  
  

  //Annon function for next button
  const incrementImg = () => {
    if (imageSrc <= 7) {
      setImgSrc(imageSrc + 1);
      setDisabled(false);
    }

    if (imageSrc === 7) {
      let nextBtn = document.querySelector(".sum");
      nextBtn.innerHTML = "Continue";
      setCanSave(true)
    }
  };

  //Annon function for previous button
  const decrementImg = () => {
    if (imageSrc >= 0) {
      let nextBtn = document.querySelector(".sum");
      nextBtn.innerHTML = "Next";
      setImgSrc(imageSrc - 1);
      setRegions(regions.concat());
      setDisabled(false);

      if (imageSrc === 2) {
        setDisabled(true);
      }
    }
  };

  //Clear drawings after an interval 
  const clearRegions = () => {
    setTimeout(() => {
      setRegions([]);
    }, 1000);
  };
  
  // Function to correct region Id's
  const saveCordinates = async () => {   
    
    if (regions.length > 0) {
      const imageRegion = {
        image_number: imageSrc,
        regions
      };

      setImageRegions([...imageRegions, imageRegion])

      setTimeout(async () => {
        if (canSave) {
          const saveData = {
            session_id: "1382139",
            worker_id: "2374329847",
            coordinates: imageRegions
          };
          const response = await fetch("/Task",{
            method:"POST",
            headers:{
              "Content-type" : "application/json"
            },
            body: JSON.stringify(saveData)
          });
  
          console.log(imageRegions);
          console.log('Returned response', response)
        }
      }, 1000)
    }

    console.log('image is ', imageSrc);
    console.log('image regions are ', regions);

  }


  //Parent function for Task page 
  const wrappedNextFunc = async () => {
    displayCordinates();
    incrementImg();
    clearRegions();  
    saveCordinates();

    /*---------------Backend Post request to save cordinates for Task Page----------*/
    /*
    const response = await axios.post('/coordinates', {data: JSON.stringify(regions)});
    if (response.data.status === 200) {
      incrementImg(); //Next Image
      clearRegions(); // Clear current regions on the screen
    }
    */
    /*---------------Backend Post request to save cordinates for Task Page----------*/
  };
  
  //JSX for rendering on CLient
  return (
    <div>
      <div className="Task-container col-md-12">
        <Canvas imageSrc={imageSrc} />
      </div>

      <SortableList
        items={regions}
        onSortEnd={({ oldIndex, newIndex }) => {
          setRegions(arrayMove(regions, oldIndex, newIndex));
        }}
        onRemove={(index) => {
          regions.splice(index, 1);
          setRegions(regions.concat());
          
          
          

        }}
      />
      <div className="d-flex container justify-content-center mt-5">
        <button
          onClick={decrementImg}
          className="previous sub"
          disabled={disabled}
        >
          &laquo; Previous
        </button>
        <div style={{ width: "100px" }}></div>
        <button onClick={wrappedNextFunc} className="next sum" disabled={regions.length === 0}>
          Next &raquo;
        </button>
        {showCoordinates && listCoordinates()}
      </div>
    </div>
  );
}

export default RegionList;
