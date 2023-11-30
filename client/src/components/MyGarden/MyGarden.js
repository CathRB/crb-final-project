import React from "react";
import {useContext, useState, useEffect} from "react"
import { UserContext } from "../Context/UserContext";
import MySettingsModal from "./MySettingsModal"
import Plant from "./Plant";

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


const {user} = useContext(UserContext)

const date = new Date()
let dateMDY = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;


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

 
   return(
     
        <Main>
       {user? ( <></>
           ): (<h1>Please log in or set an account to have acces to this feature</h1>) }
              <DivGrid>

                {user?(
                  <MySettingsModal open={open}  userId={user._id} myGardenId={gardenId} setErrorMessage={setErrorMessage} plantIndex={plantIndex} setOpen={setOpen} >   </MySettingsModal>
                ): <></>}
                
            {user? (
              user.myGarden.map ((plant, index) => {
               return(
              <Plant 
              key={plant.myGardenId}
              index={index}
              plant={plant}
              setGardenId={setGardenId}
              setOpen={setOpen}
              setErrorMessage={setErrorMessage}
              setPlantIndex={setPlantIndex}
               />
              )}) ) : (<></>) }

            {errorMessage?(<p> {errorMessage} </p> ): <></>}

            </DivGrid>
            {user?(
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



