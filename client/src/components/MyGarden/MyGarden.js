import React from "react";
import {useContext, useState} from "react"
import { UserContext } from "../Context/UserContext";
import { Link } from 'react-router-dom';
import MySettingsModal from "./MySettingsModal"
import GetGardens from "./GetGardens";
import useSetGardenDisplayAndButtons from "./useSetGardenDisplayAndButtons";
import emptyGarden from "../../assets/emptyGarden.jpg"
import cactus from "../../assets/cactus.jpg"
import login2 from "../../assets/login2.jpg"
import testGarden from "../../assets/testGarden2.jpg"




import {
  Main,
    DivGrid,
   Footer,
   ErrorMessage,
   Test,
   AAA,
   EmptyGarden,
   PictureBox,
         PictureTest
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
const {user, loggedInUser, errorMessage} = useContext(UserContext)


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
        <img src={emptyGarden} alt={"Garden image"}/> 
        </> 
        ) : <></>}
       {loggedInUser? ( <></>
           ): (
            <>
         <h1>Please log in or set an account to have acces to this feature</h1>
         <EmptyGarden src={emptyGarden} alt={"Garden image"}/> 

         <PictureBox>
         <Test src={testGarden} alt={"Garden image"}/> 
         </PictureBox>
         
         <PictureTest>
         <AAA src={testGarden} alt={"Garden image"}/>
         </PictureTest> 
         
         </>)
         }
           {user && user.myGarden.length === 0 ?(
            (<h1>Go to the  {' '} <Link to="/plantsBrowser">plant browser </Link> {' '} and add plant to your garden!</h1>) 
           ):<></>}

           
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
            {user && user.myGarden.length > 0 ?(
            <Footer>
                 <button disabled={previousPage} onClick={() => {setPageNumber(pageNumber - 1); }}>Previous Page</button>
                <p>{pageNumber}</p>
                <button disabled={nextPage}onClick={() => {setPageNumber(pageNumber + 1);}}>Next Page</button>
              </Footer>
              ): <></>}
            </Main>
     )
};

export default  MyGarden



