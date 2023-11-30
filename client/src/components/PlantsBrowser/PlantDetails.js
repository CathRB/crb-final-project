import { useContext, useState } from "react";
import { UserContext } from "../Context/UserContext";
import { useNavigate } from "react-router-dom";
import addPlant from "./addPlant";



const PlantDetails = ({plantInfo, addPlantData, setErrorMessage}) => {
    const [adding, setAdding] = useState(false);
    const {user, addToMyGarden } = useContext(UserContext);
    const navigate = useNavigate();


return (
<>
      {plantInfo.commonName ? (<p>{plantInfo.commonName}</p>) : (<p>Common name not available </p>)}
      {plantInfo.family ? (<p>Family: {plantInfo.family} </p>) : (<p>Family not available </p> )}
      
      {plantInfo.light ? (<p> Light: {plantInfo.light} </p>) : (<p> Light: unknown</p>)}

      {plantInfo.humidity ? (<p> Humidity: {plantInfo.humidity} </p>) : (<p> Humidity: unknown </p>)}

      {plantInfo.phLow && plantInfo.phHight ? (<p>Ideal pH between: {plantInfo.phLow} and {plantInfo.phHight} </p>) : (<p> Ideal pH between: unknown </p>)}

      {plantInfo.sources ? (
        plantInfo.sources.map((source) => {
          if (source.name === "POWO")
            return (
              <a key={source.name} target="_blank" href={source.url}>
                Distribution map
              </a>
            );
        })
      ) : (<p>Distribution map: information not available</p>)}

      {!user ? (
        <p> Please log in to add this plant to your garden </p>
      ) : user && user.myGarden.length < 10 ? (
        <button onClick={(event) => addPlant(event, addPlantData, addToMyGarden, navigate, setErrorMessage, setAdding)} disabled={adding}>
          {adding ? "Adding plant" : "Add to My Garden"}
        </button>
      ) : (
        <p>
          Sorry you reached the plant limit in your garden. Please remove
          plant befor adding new one
        </p>
      )}
</>
)
}

export default PlantDetails