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
     setTotalPages(Math.ceil(user.myGarden.length / 20));
       if (user.myGarden.length  < 3) {
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
        } else {
          setNextPage(false);
        }
      }
    }, [pageNumber]);




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
     
        <Main>
       
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
              ):( <p>Edible: {plant.edible}</p>
              )
              }
             
             {plant.edibleParts?(
              <p>Edible Parts: {plant.edibleParts} </p>
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

                <TaskIcon src={waterDropOff} alt={"waterDropOff"} />
                <TaskIcon src={fertiliserOff} alt={"fertiliserOff"} />

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
              <p>Location: </p>
              <p>SunExposition: </p> 
              <p>Watering frequency: </p>  
              <p>Last watering: </p> 
              <p>Fertilizer name: </p>
              <p>Fertilizer frequency: </p>  
              <p>Last fertilizing: </p> 
              <p>Comments: </p>
              </MyCareBox>
              </MiddleBox>

              <BottomBox>
                <SettingsButton onClick={handleClickOpen}>Add my personal settings</SettingsButton>
                 <MySettingsModal open={open} handleClickOpen= {handleClickOpen}  handleClose={handleClose}></MySettingsModal>
              <GarbageButton style={{ display: removeButton }}onClick={() => {setPlantToRemove({userId: user._id, myGardenId: plant.myGardenId}); setRemoveButton("none"); setYesNoButton("")}}><img src={rubbish} alt={"trash"}/></GarbageButton>
               <p style={{ display: yesNoButton }} >Are you sure you want to remove this plant from your garden?</p>
              <button style={{ display: yesNoButton }} onClick={(event) => removePlant(event)}>Yes</button>
              <button style={{ display: yesNoButton }} onClick={() => {setPlantToRemove(null); setRemoveButton(""); setYesNoButton("none")}}>Non</button>
              </BottomBox>
            </PlantBox>
            )
            })
            ): (<p>Please log in or set an account to have acces to this feature</p>) }

            {errorMessage?(
              <p> {errorMessage} </p>
            ): <></>
            }

            </DivGrid>

            <Footer>

<button
  disabled={previousPage}
  onClick={() => {
    setPageNumber(pageNumber - 1);
  }}
>
  Previous Page
</button>
<p>{pageNumber}</p>
<button
  disabled={nextPage}
  onClick={() => {
    setPageNumber(pageNumber + 1);
  }}
>
  Next Page
</button>

</Footer>




            </Main>



           
    )
};

export default  MyGarden



