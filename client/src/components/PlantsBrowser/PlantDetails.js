import { useContext, useState } from "react";
import { UserContext } from "../Context/UserContext";
import { useNavigate } from "react-router-dom";
import addPlant from "./addPlant";
import useGetPlantInfo from "./useGetPlantInfo";
import useGetLightAndHumiditySentences from "./useGetLightAndHumiditySentences";
import { Name, Reminder, Light, Loading } from "./styledBrowser";



const PlantDetails = ({plantSlug, scientificName}) => {
    const [adding, setAdding] = useState(false);
    const {user, addToMyGarden, setErrorMessage } = useContext(UserContext);
    const [plantInfo, setPlantInfo] = useState(null);
    const navigate = useNavigate();
   
    let addPlantData =
    user && plantInfo
      ? {
          userId: user._id,
          plantId: plantInfo.plantId,
          commonName: plantInfo.commonName,
          scientificName,
          family: plantInfo.family,
          vegetable: plantInfo.vegetable,
          edible: plantInfo.edible,
          edibleParts: plantInfo.edibleParts,
          light: plantInfo.light,
          humidity: plantInfo.humidity,
          phLow: plantInfo.phLow,
          phHight: plantInfo.phHight,
          sources: plantInfo.sources,
          image: plantInfo.image,
        }
      : null;

      console.log()

  useGetPlantInfo(plantSlug, setPlantInfo);
  useGetLightAndHumiditySentences(setPlantInfo, plantInfo);

 return (
  <>
    
{plantInfo?( 
  <>
      {plantInfo.commonName ? (<Name>{plantInfo.commonName}</Name>) : (<p>Common name not available </p>)}
      {plantInfo.family ? (<p><span>Family:</span> {plantInfo.family} </p>) : (<p> <span>Family:</span> not available </p> )}
      
      {plantInfo.light ? (<Light> <span>Light:</span> {plantInfo.light} </Light>) : (<p> <span>Light:</span> unknown</p>)}

      {plantInfo.humidity ? (<p> <span>Humidity:</span> {plantInfo.humidity} </p>) : (<p> <span>Humidity:</span> unknown </p>)}

      {plantInfo.phLow && plantInfo.phHight ? (<p> <span>Ideal pH between:</span> {plantInfo.phLow} and {plantInfo.phHight} </p>) : (<p> <span>Ideal pH between:</span> unknown </p>)}

      {plantInfo.sources ? (
        plantInfo.sources.map((source) => {
          if (source.name === "POWO")
            return (
              <a key={source.name} target="_blank" href={source.url}>
                Distribution map
              </a>
            );
        })
      ) : (<p><span>Distribution map:</span> information not available</p>)}

      {!user ? (
        <Reminder> Please log in to add this plant to your garden </Reminder>
      ) : user && user.myGarden.length < 10 ? (
        <button onClick={(event) => addPlant(event, addPlantData, addToMyGarden, navigate, setErrorMessage, setAdding)} disabled={adding}>
          {adding ? "Adding plant" : "Add to My Garden"}
        </button>
      ) : (
        <Reminder>
          Sorry you reached the plant limit in your garden. Please remove
          plant befor adding new one
        </Reminder>
      )}
      </>
      ):<Loading>Loading...</Loading>
      }
</>

)
}

export default PlantDetails