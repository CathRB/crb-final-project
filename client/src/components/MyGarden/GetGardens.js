import React from "react";
import {useContext, useState} from "react"
import { UserContext } from "../Context/UserContext";
import { useNavigate } from 'react-router-dom';
import rubbish from "../../assets/rubbish.png"
import fertiliserOff from "../../assets/fertiliserOff.png"
import fertiliserOn from "../../assets/fertiliserOn.png"
import waterDropOff from "../../assets/waterDropOff.png"
import waterDropOn from "../../assets/waterDropOn.png"
import removePlant from "./removePlant";

import {
    PlantBox,
    HeaderBox,
    GeneralBox,
    RecomandedCareBox,
    MyCareBox,
    MiddleBox,
    BottomBox,
    PlantPicture,
    TaskIcon,
    GarbageButton,
    SettingsButton,
    YesNoButton,
  } from "./styledMyGarden"

   
const GetGardens = ({plant, handleClickOpen, setPersonalSettings, userId}) => {
    const [removeButton, setRemoveButton]=useState("")
    const [yesNoButton, setYesNoButton]=useState("none")
    const [plantToRemove, setPlantToRemove]=useState()
    const {user, removeFromMyGarden, setErrorMessage} = useContext(UserContext)
    const navigate = useNavigate()
    
    const date = new Date()
    let dateMDY = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;  
    
 
            
    return(
        <PlantBox>

          <HeaderBox>
          <PlantPicture src={plant.image} alt={plant.commonName}/>
          
          <GeneralBox>
            {plant.commonName ?(
          <h2>{plant.commonName}</h2>):(<h2>Common name not available</h2>)}

          {plant.scientificName?(
          <p> <span>Scientific name:</span> {plant.scientificName} </p>): <p>Scientific name not available</p>}

          {plant.family?(
          <p><span>Family:</span> {plant.family} </p>): <p>Family not available</p>}

          {plant.vegetable === null || plant.vegetable === "" ?(
            <p><span>Vegetable: </span> unknown</p>): plant.vegetable === false?( <p><span>Vegetable:</span> no</p> ):(<p><span>Vegetable: </span>{plant.vegetable} </p>)}

          {plant.edible === null || plant.edible === ""?(<p><span>Edible:</span> unknown</p>): plant.edible === false?(<p><span>Edible:</span> no</p>):( <p><span>Edible: </span>yes</p>)}
         
         {plant.edibleParts?(<p><span>Edible Parts:</span> {plant.edibleParts.toString("")} </p>): <></>}

          {plant.sources? (
            plant.sources.map ((source)=> {
             if(source.name === "POWO")
            return (
            <a key={source.name} target="_blank" href= {source.url}>Distribution map</a>
             )
             }) ): <p><sapn>Distribution map: </sapn>information not available</p>}

            </GeneralBox>
            
              { Math.floor(( Date.parse(date) - Date.parse(plant.lastWatering)) / 86400000) < plant.wateringFrequency || !plant.lastWatering ||  !plant.wateringFrequency ?(
                
            <TaskIcon src={waterDropOff} alt={"waterDropOff"} />):  <TaskIcon src={waterDropOn} alt={"waterDropOn"}/> }

         { Math.floor(( Date.parse(date) - Date.parse(plant.lastFertilizing)) / 86400000) < plant.fertilizerFrequency || !plant.lastFertilizing || !plant.fertilizerFrequency ?(
            <TaskIcon src={fertiliserOff} alt={"fertiliserOff"} />):  <TaskIcon src={fertiliserOn} alt={"fertiliserOn"}/> }
          </HeaderBox>

          <MiddleBox>
                      
           <RecomandedCareBox>
          <h2>Recomended care</h2>

          {plant.light?(
          <p><span>Light: </span>{plant.light} </p>): <p><span>Light:</span> unknown</p>}

          {plant.humidity?(
          <p><span>Humidity:</span> {plant.humidity} </p>): <p><span>Humidity:</span> unknown</p>}

          {plant.phLow && plant.phHight?(<p><span>Ideal pH between:</span>  {plant.phLow} and {plant.phHight}</p>):( <p><span>Ideal pH:</span> unknown</p>)}

          </RecomandedCareBox>
                        
          <MyCareBox>
          <h2>My care settings</h2>
          <p><span>Location:</span> {plant.plantLocation}</p>
          <p><span>Sun exposition:</span> {plant.sunExposition} </p> 
          <p><span>Watering frequency: </span> {plant.wateringFrequency? (`each ${plant.wateringFrequency} day(s)`): (<></>) }</p>  
          <p><span>Last watered:</span> {plant.lastWatering}</p> 
          <p><span>Fertilizer name: </span>{plant.fertilizerName}</p>
          <p><span>Fertilizer frequency:</span> {plant.fertilizerFrequency? (`each ${plant.fertilizerFrequency} day(s)`): (<></>) } </p>  
          <p><span>Last fertilized: </span>{plant.lastFertilizing}</p> 
          <p><span>Comments: </span>{plant.comments}</p>
          </MyCareBox>
          </MiddleBox>

          <BottomBox>
            {plant.plantLocation || plant.sunExposition || plant.wateringFrequency || plant.lastWatering || plant.fertilizerName || plant.fertilizerFrequency || plant.lastFertilizing || plant.comments? (
            
            <SettingsButton style={{ display: removeButton }} onClick={()=>{setPersonalSettings({userId, ...plant}); handleClickOpen();}}>Change my personal settings</SettingsButton>
         ): (<SettingsButton  style={{ display: removeButton }} onClick={()=>{setPersonalSettings({userId, ...plant}); handleClickOpen()}}>Add my personal settings</SettingsButton>)}
            

          
          
          <GarbageButton style={{ display: removeButton }}onClick={() => {setPlantToRemove({userId: user._id, myGardenId: plant.myGardenId}); setRemoveButton("none"); setYesNoButton("")}}><img src={rubbish} alt={"trash"}/></GarbageButton>
           <p style={{ display: yesNoButton }} >Are you sure you want to remove this plant from your garden?</p>
          <YesNoButton style={{ display: yesNoButton }} onClick={(event) => removePlant(event, plantToRemove,  removeFromMyGarden, navigate, setErrorMessage)}>Yes</YesNoButton>
          <YesNoButton style={{ display: yesNoButton }} onClick={() => {setPlantToRemove(null); setRemoveButton(""); setYesNoButton("none")}}>Non</YesNoButton>
          </BottomBox>
        </PlantBox>
        )
        
        
}

export default GetGardens