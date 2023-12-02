import { useEffect} from "react";
import {useContext, useState} from "react"
import { UserContext } from "../Context/UserContext";

const useGetPlantInfo = (plantSlug, setPlantInfo) => {
  const {setErrorMessage} = useContext(UserContext)

  //Get more information about a specific plant onClick
  useEffect(() => {
    if (plantSlug) {
      fetch(`/api/get-plantInfo/${plantSlug}`)
        .then((response) => response.json())
        .then((response) => {
          if (response.status === 200) {
            setPlantInfo(response.data);
          } else setErrorMessage(response.message);
        })
        .catch((error) => {
          setErrorMessage("Error during searching process", error);
        });
    }
  }, [plantSlug]);
 

 };

export default useGetPlantInfo