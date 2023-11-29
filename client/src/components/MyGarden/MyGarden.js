import React from "react";
import {useContext, useState, useEffect} from "react"
import { UserContext } from "../Context/UserContext";
import { useNavigate } from 'react-router-dom';
import rubbish from "../../assets/rubbish.png"
import fertiliserOff from "../../assets/fertiliserOff.png"
import fertiliserOn from "../../assets/fertiliserOn.png"
import waterDropOff from "../../assets/waterDropOff.png"
import waterDropOn from "../../assets/waterDropOn.png"
import MySettingsModal from "./MySettingsModal"




import {
  Main,
    DivGrid,
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
    Footer,
  } from "./styledMyGarden"

 


const MyGarden = () => {
    
const [plantToRemove, setPlantToRemove]=useState()
const [removeButton, setRemoveButton]=useState("")
const [yesNoButton, setYesNoButton]=useState("none")
const [errorMessage, setErrorMessage] = useState(null)
const [previousPage, setPreviousPage] = useState(true);
const [nextPage, setNextPage] = useState(true);
const [pageNumber, setPageNumber] = useState(1);
const [totalPages, setTotalPages] = useState(null);
const [gardenId, setGardenId] = useState(null)

const date = new Date()
let dateMDY = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;

const test = new Date()
let test2 = `${test.getFullYear()}-${test.getMonth() + 1}-${test.getDate()}`;




const navigate = useNavigate()
const {user, removeFromMyGarden} = useContext(UserContext)

const [open, setOpen] = useState(false);


const handleClickOpen = () => {
  setOpen(true);

};

const handleClose = () => {
  setOpen(false);
};



  //Set pages
  useEffect(() => {
    if(user){
     setTotalPages(Math.ceil(user.myGarden.length / 2));
       if (user.myGarden.length  < 3 ) {
              setNextPage(true);
            } else {
              setNextPage(false);
            }
          }
     }, []);


     useEffect(() => {
      if(user){
       if (pageNumber !== 1) {
          setPreviousPage(false);
        } else {
          setPreviousPage(true);
        }
  
        if (pageNumber === totalPages) {
          setNextPage(true);
        } 
      }
    }, [pageNumber]);




//Remove a plant to user library
const removePlant = (event) => {
  console.log("test")
      
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
          console.log(response.message)
          removeFromMyGarden(plantToRemove.myGardenId);
          navigate("/myGarden");
         } else setErrorMessage(response.message);
      })
      .catch((error) => {
         setErrorMessage("Error during removing process", error);
      })
        } 

 
   return(
     
        <Main>
       {user? ( <></>
           ): (<h1>Please log in or set an account to have acces to this feature</h1>) }
              <DivGrid>
            {user? (
               user.myGarden.map ((plant) => {
                
            return(
            <PlantBox key={plant.myGardenId}>

              <HeaderBox>
              <PlantPicture src={plant.image} alt={plant.commonName}/>
              
              <GeneralBox>
                {plant.commonName ?(
              <h2>{plant.commonName}</h2>
              ):(<h2>Common name not available</h2>)}

              {plant.scientificName?(
              <p> Scientific name: {plant.scientificName} </p>
              ): <p>Scientific name not available</p>}

              {plant.family?(
              <p>Family: {plant.family} </p>
              ): <p>Family not available</p>}

              {plant.vegetable === null || plant.vegetable === "" ?(
                <p>Vegetable: unknown</p>
             ): plant.vegetable === false?( 
              <p>Vegetable: no</p>
              ):(
                <p>Vegetable: {plant.vegetable} </p>
              )}

              {plant.edible === null || plant.edible === ""?(
                <p>Edible: unknown</p>
              ): plant.edible === false?(
                <p>Edible: no</p>
              ):( <p>Edible: yes</p>
              )
              }
             
             {plant.edibleParts?(
              <p>Edible Parts: {plant.edibleParts.toString("")} </p>
              ): <></>}

              {plant.sources? (
                plant.sources.map ((source)=> {
                 if(source.name === "POWO")
                return (
            <a key={source.name} target="_blank" href= {source.url}>Distribution map</a>

                 )
                 })
             ): <p>Distribution map: information not available</p> 
                }
                </GeneralBox>
                  { Math.floor(( Date.parse(date) - Date.parse(plant.lastWatering))) < plant.wateringFrequency ?(
                    
                <TaskIcon src={waterDropOff} alt={"waterDropOff"} />
                ):  <TaskIcon src={waterDropOn} alt={"waterDropOn"}/> }

                {Math.floor(( Date.parse(date) - Date.parse(plant.lastFertilizing))) < plant.fertilizerFrequency ?(
                <TaskIcon src={fertiliserOff} alt={"fertiliserOff"} />
                ):  <TaskIcon src={fertiliserOn} alt={"fertiliserOn"}/> }
              </HeaderBox>

              <MiddleBox>
                          
               <RecomandedCareBox>
              <h2>Recomended care</h2>

              {plant.light?(
              <p>Light: {plant.light} </p>
              ): <p>Light: unknown</p>}

              {plant.humidity?(
              <p>Humidity: {plant.humidity} </p>
              ): <p>Humidity: unknown</p>}

              {plant.phLow && plant.phHight?(
              <p>Ideal pH between:  {plant.phLow} and {plant.phHight}</p>
              ):( <p>Ideal pH: unknown</p>
              )}

              </RecomandedCareBox>
                            
              <MyCareBox>
              <h2>My care settings</h2>
              <p>Location: {plant.plantLocation}</p>
              <p>SunExposition: {plant.sunExposition} </p> 
              <p>Watering frequency: each {plant.wateringFrequency} day(s)</p>  
              <p>Last watering: {plant.lastWatering}</p> 
              <p>Fertilizer name: {plant.fertilizerName}</p>
              <p>Fertilizer frequency: each {plant.fertilizerFrequency} day(s)</p>  
              <p>Last fertilizing: {plant.lastFertilizing}</p> 
              <p>Comments: {plant.comments}</p>
              </MyCareBox>
              </MiddleBox>

              <BottomBox>
                {plant.plantLocation || plant.sunExposition || plant.wateringFrequency || plant.lastWatering || plant.fertilizerName || plant.fertilizerFrequency || plant.lastFertilizing || plant.comments? (
                <SettingsButton onClick={()=>{handleClickOpen(); setGardenId(plant.myGardenId)}}>Change my personal settings</SettingsButton>
             ): (<SettingsButton  onClick={()=>{handleClickOpen(); setGardenId(plant.myGardenId)}}>Add my personal settings</SettingsButton>)}
                          <MySettingsModal open={open}  handleClose={handleClose} userId={user._id} myGardenId={gardenId} setErrorMessage={setErrorMessage}>   </MySettingsModal>
              <GarbageButton style={{ display: removeButton }}onClick={() => {setPlantToRemove({userId: user._id}); setRemoveButton("none"); setYesNoButton("")}}><img src={rubbish} alt={"trash"}/></GarbageButton>
               <p style={{ display: yesNoButton }} >Are you sure you want to remove this plant from your garden?</p>
              <button style={{ display: yesNoButton }} onClick={(event) => removePlant(event)}>Yes</button>
              <button style={{ display: yesNoButton }} onClick={() => {setPlantToRemove(null); setRemoveButton(""); setYesNoButton("none")}}>Non</button>
              </BottomBox>
            </PlantBox>
            )
            })
            ): (<></>) }

            {errorMessage?(
              <p> {errorMessage} </p>
            ): <></>
            }

            </DivGrid>
            {user?(
            <Footer>
              
                <button
                disabled={previousPage}
                onClick={() => {setPageNumber(pageNumber - 1);
                 }}>
                 Previous Page
                </button>
                <p>{pageNumber}</p>
                <button
                disabled={nextPage}
                onClick={() => {setPageNumber(pageNumber + 1);
                 }}>
                 Next Page
                </button>
                
              </Footer>
              ): <></>}

           


            </Main>



           
    )
};

export default  MyGarden



