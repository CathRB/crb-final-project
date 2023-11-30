import {PlantBox} from "./styledBrowser";
import { useState } from "react";
import PlantDetails from "./PlantDetails";


const GetPlants = ({plant, setPlantSlug, setScientificName, plantInfo, addPlantData, setErrorMessage}) => {
  const [showDetails, setShowDetails] = useState(false)
    return (

     <PlantBox
        onClick={() => {
         setPlantSlug(plant.slug);
         setScientificName(plant.scientific_name)
         setShowDetails(!showDetails)
        }}
    >
    {!showDetails?(
     <>
     {plant.common_name ? ( <p>{plant.common_name}</p>) : (<p>Common name: not available</p> )}
     {plant.image_url ? (<img src={plant.image_url} alt={plant.common_name} /> ):(<p>pictures not available</p>)}
     <p>Scientific name: {plant.scientific_name}</p>
     </>
    ):(
    plantInfo ? (
    <PlantDetails 
        plantInfo={plantInfo}
         addPlantData={addPlantData}
        setErrorMessage={setErrorMessage}
        />
        ):(<></>)
        )}  
     </PlantBox>
  
  )
}

export default GetPlants