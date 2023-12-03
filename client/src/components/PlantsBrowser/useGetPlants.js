import {  useEffect, useContext } from "react";
import { UserContext } from "../Context/UserContext";

const useGetPlants = (plantName, plantsData, setPlantsData, totalPages, setTotalPages, setNextPage, setPreviousPage, pageNumber) => {
  const {setErrorMessage} = useContext(UserContext)

//Get plants from a search name (page 1)
  useEffect(() => {
    if (plantName) {
      fetch(`/api/get-plants/${plantName}`)
        .then((response) => response.json())
        .then((response) => {
          if (response.status === 200) {
            setPlantsData(response.data);
            setTotalPages(Math.ceil(response.dataMeta.total / 20));
            if (response.dataMeta.total < 21) {
              setNextPage(true);
                } else {
              setNextPage(false);
            }
          } else {
            setErrorMessage(response.message);
          }
        })
        .catch((error) => {
          setErrorMessage("Error during searching process", error);
        });    
    }
  }, [plantName]);


   //Get plants from a search name - Other pages

   useEffect(() => {
    if (plantsData) {
      fetch(`/api/get-plantsPages/${pageNumber}/${plantName}`)
        .then((response) => response.json())
        .then((response) => {
          if (response.status === 200) {
            console.log("message",response.message)
            setPlantsData(response.data);
          } else setErrorMessage(response.message);
        })
        .catch((error) => {
          setErrorMessage("Error during searching process", error);
        });
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


}

export default useGetPlants