import {useContext, useState} from "react"
import { UserContext } from "../Context/UserContext";
import { useNavigate } from 'react-router-dom';


import {
    DivGrid,
    PlantBox,
  } from "./styledMyGarden"



const MyGarden = () => {
    
const [plantToRemove, setPlantToRemove]=useState()
const [removeButton, setRemoveButton]=useState("")
const [yesNoButton, setYesNoButton]=useState("none")
const [errorMessage, setErrorMessage] = useState(null)

const navigate = useNavigate()
const {user, removeFromMyGarden} = useContext(UserContext)

console.log("user", user)
   
//Remove a plant to user library
const removePlant = (event) => {
      
    event.preventDefault();

    fetch("/api/remove-plant-myGarden", {
      method: "PATCH",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(plantToRemove),
    })
      .then((response) => response.json())
      .then((response) => {
        if (response.status === 200) {
           removeFromMyGarden(plantToRemove.myGardenId);
          navigate("/myGarden");
         } else setErrorMessage(response.message);
      })
      .catch((error) => {
        setErrorMessage("Error during removing process", error);
      })
        } 

 



    return(
        <div>
        {user?(
        <h1>{user.firstName} garden  </h1>
        ): (<h1>My garden </h1>)
        }
        <DivGrid>
            {user? (
            user.myGarden.map ((plant) => {
            return(
            <PlantBox key={plant.myGardenId}>
              <p>Common name: {plant.commonName}</p>
              <p>Plant id: {plant.plantId}</p>
              <p>Family: {plant.family} </p>
              <p>Vegetable: {plant.vegetable} </p>
              <p>Edible: {plant.edible} </p>
              <p>Edible Parts: {plant.edibleParts} </p>
              <p>Light: {plant.light} </p>
              <p>Humidity: {plant.humidity} </p>
              <p>phLow: {plant.phLow} </p>
              <p>phHight: {plant.phHight} </p>
              <img src={plant.image} alt={plant.commonName}/>

                {plant.sources? (
                plant.sources.map ((source)=> {
                 if(source.name === "POWO")
                return (
            <a key={source.name} target="_blank" href= {source.url}>Distribution map</a>

                 )
                 })
             ): <p>Distribution map: information not available</p> 
                }
              <button style={{ display: removeButton }}onClick={() => {setPlantToRemove({userId: user._id, myGardenId: plant.myGardenId}); setRemoveButton("none"); setYesNoButton("")}}>Remove from myGarden</button>
               <p style={{ display: yesNoButton }} >Are you sure you want to remove this plant from your garden?</p>
              <button style={{ display: yesNoButton }} onClick={(event) => removePlant(event)}>Yes</button>
              <button style={{ display: yesNoButton }} onClick={() => {setPlantToRemove(null); setRemoveButton(""); setYesNoButton("none")}}>Non</button>
           
            </PlantBox>
            )
            })
            ): (<p>Please log in or set an account to have acces to this feature</p>) }

            {errorMessage?(
              <p> {errorMessage} </p>
            ): <></>
            }

            </DivGrid>
            </div>
    )
};

export default  MyGarden