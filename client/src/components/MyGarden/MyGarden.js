import React from "react";
import {useContext, useState} from "react"
import { UserContext } from "../Context/UserContext";
import { Link } from 'react-router-dom';
import MySettingsModal from "./MySettingsModal"
import GetGardens from "./GetGardens";
import useSetGardenDisplayAndButtons from "./useSetGardenDisplayAndButtons";
import emptyGarden from "../../assets/emptyGarden.jpg"
import emptyGardenSides from "../../assets/emptyGardenSides.jpg"





import {
  Main,
  DivGrid,
  Footer,
  ErrorMessage,
  EmptyGarden,
  EmptyGardenRight,
  EmptyGardenLeft,
  EmptyGardenBox,
  } from "./styledMyGarden"


const MyGarden = () => {
    

const [previousPage, setPreviousPage] = useState(true);
const [nextPage, setNextPage] = useState(true);
const [pageNumber, setPageNumber] = useState(1);
const [totalPages, setTotalPages] = useState(null);
const [gardenId, setGardenId] = useState(null);
const [plantIndex, setPlantIndex] = useState(null);
const [open, setOpen] = useState(false);
const [gardenToDisplay, setGardenToDisplay] = useState(null);
const {user, loggedInUser, errorMessage, setErrorMessage} = useContext(UserContext)


const date = new Date()
let dateMDY = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;

const handleClickOpen = () => {
  setOpen(true);
  };

const handleClose = () => {
  setOpen(false);
};


  useSetGardenDisplayAndButtons (setTotalPages, pageNumber, totalPages, setNextPage, setPreviousPage,  setGardenToDisplay)


   return(
     
    <Main>
        
        {errorMessage?(
        <>
        <ErrorMessage> {errorMessage} </ErrorMessage>
              </> 
        ) : <>
       {loggedInUser ? ( <></>
           ): (
            <EmptyGardenBox>
              <EmptyGardenLeft src={emptyGardenSides} alt={"emptyGardenSides"}/>
              <div>
         <h1>Please log in or set an account to have acces to this feature</h1>
         <EmptyGarden src={emptyGarden} alt={"emptyGarden"}/> 
         </div>
         <EmptyGardenRight src={emptyGardenSides} alt={"emptyGardenSides"}/> 
         </EmptyGardenBox>)
         }
           {user && user.myGarden.length === 0 ?(
          
            <EmptyGardenBox>
              <EmptyGardenLeft src={emptyGardenSides} alt={"emptyGardenSides"}/>
              <div>
            <h1>Go to the  {' '} <Link to="/plantsBrowser" onClick={() => {setErrorMessage(null)}}>plant browser </Link> {' '} and add plant to your garden!</h1>
            <EmptyGarden src={emptyGarden} alt={"emptyGarden"}/> 
         </div>
         <EmptyGardenRight src={emptyGardenSides} alt={"emptyGardenSides"}/> 
         </EmptyGardenBox>
           ):<></>}

{loggedInUser && user && user.myGarden.length > 0 ?(
           
              <DivGrid>
               {user?(
              <MySettingsModal open={open} handleClose={handleClose} userId={user._id} myGardenId={gardenId} plantIndex={plantIndex}/> 
               ): <></>}
                
              {gardenToDisplay? (
              gardenToDisplay.map ((plant, index) => {
               return(
              <GetGardens 
              key={plant.myGardenId}
              index={index}
              plant={plant}
              setGardenId={setGardenId}
              setPlantIndex={setPlantIndex}
              handleClickOpen = {handleClickOpen}
                 />
              )}
              )
              ) : (<></>) }
            </DivGrid>
):<></>}
            {user && user.myGarden.length > 0 ?(
            <Footer>
                 <button disabled={previousPage} onClick={() => {setPageNumber(pageNumber - 1); }}>Previous Page</button>
                <p>{pageNumber}</p>
                <button disabled={nextPage}onClick={() => {setPageNumber(pageNumber + 1);}}>Next Page</button>
              </Footer>
              ): <></>}
              </>}
            </Main>
     )
};

export default  MyGarden



