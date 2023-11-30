import React from "react";
import {useContext, useState, useEffect} from "react"
import { UserContext } from "../Context/UserContext";
import MySettingsModal from "./MySettingsModal"
import GetGardens from "./GetGardens";

import {
  Main,
    DivGrid,
   Footer,
  } from "./styledMyGarden"


const MyGarden = () => {
    

const [errorMessage, setErrorMessage] = useState(null)
const [previousPage, setPreviousPage] = useState(true);
const [nextPage, setNextPage] = useState(true);
const [pageNumber, setPageNumber] = useState(1);
const [totalPages, setTotalPages] = useState(null);
const [gardenId, setGardenId] = useState(null);
const [plantIndex, setPlantIndex] = useState(null);
const [open, setOpen] = useState(false);
const [gardenToDisplay, setGardenToDisplay] = useState(null);


const {user, loggedInUser} = useContext(UserContext)


const date = new Date()
let dateMDY = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;


const handleClickOpen = () => {
  setOpen(true);
  };


const handleClose = () => {
  setOpen(false);
};


  //Set number of pages and next button
  useEffect(() => {
    if(user){
     setTotalPages(Math.ceil(user.myGarden.length / 2));
       if (user.myGarden.length  < 3 ) {
        setNextPage(true);
        } else {
        setNextPage(false);
         }
          }
     }, [user]);

//Set previous and next buttons
     useEffect(() => {
      if(totalPages){
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
    }, [totalPages, pageNumber]);

 //Set number of garden to display by page (2)
useEffect(() => {
  if(user){
  const gardenByPage = user.myGarden.filter((plant, index) => {
    if (index >= (pageNumber - 1) * 2 && index < pageNumber * 2) {
      return plant;
    }
  });
  setGardenToDisplay(gardenByPage);
  }
  }, [user, pageNumber]);

 
   return(
     
        <Main>
       {loggedInUser? ( <></>
           ): (<h1>Please log in or set an account to have acces to this feature</h1>) }
              <DivGrid>

                {user?(
                  <MySettingsModal open={open} handleClose={handleClose} userId={user._id} myGardenId={gardenId} setErrorMessage={setErrorMessage} plantIndex={plantIndex}/> 
                ): <></>}
                
            {gardenToDisplay? (
              gardenToDisplay.map ((plant, index) => {
               return(
              <GetGardens 
              key={plant.myGardenId}
              index={index}
              plant={plant}
              setGardenId={setGardenId}
              setErrorMessage={setErrorMessage}
              setPlantIndex={setPlantIndex}
              handleClickOpen = {handleClickOpen}
                 />
              )}
              )
              ) : (<></>) }

            {errorMessage?(<p> {errorMessage} </p> ): <></>}

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



