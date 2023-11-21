//To Do: catch error

import {createContext} from "react";
import {useEffect, useState} from "react";

export const GardenContext =  createContext(null);

export const GardenProvider = ({ children }) => {
  const [garden, setGarden] = useState(null);
  const [gardenErrorMessage, setGardenErrorMessage] = useState(null)

  useEffect(() => {
    fetch("/user/:userID")
      .then((response) => response.json())
      .then(setGarden);
  }, []);

  return (
    <GardenContext.Provider value={{ garden, gardenErrorMessage }}>
      {children}
    </GardenContext.Provider>
  );
  
};