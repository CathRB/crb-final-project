import {PlantBox} from "./styledBrowser";
import { useState} from "react";
import PlantDetails from "./PlantDetails";


const Plants = ({plant,  displaying, setDisplaying}) => {

  const [showDetails, setShowDetails] = useState(false)

 
  
    return (
 
     <PlantBox
        onClick={() => {
          if(displaying === plant.slug) {
          setDisplaying(null) ;
          setShowDetails(false)
         } else{
         setDisplaying(plant.slug);
         setShowDetails(true)
        }

        
        }}
    >
    {!showDetails || displaying !== plant.slug ?(
     <>
     {plant.common_name ? ( <p>{plant.common_name}</p>) : (<p>Common name: not available</p> )}
     {plant.image_url ? (<img src={plant.image_url} alt={plant.common_name}/> ):(<p>pictures not available</p>)}
     <p>Scientific name: {plant.scientific_name}</p>
     </>
    ):(
   
    <PlantDetails 
    plantSlug={plant.slug}
    scientificName={plant.scientific_name}
    />
       
        )}  
     </PlantBox>
    
  )
}

export default Plants