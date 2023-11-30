//To Do: catch error


import {createContext, useEffect, useState} from "react";


export const UserContext =  createContext(null);

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null)
  const loggedInUser =  sessionStorage.getItem("user")

useEffect(() => {

if (loggedInUser) {
fetch("/api/get-userInfo-for-session", {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
           body: JSON.stringify({loggedInUser}),
          
                 })
          .then((response) => response.json())
          .then((response) => {
             if (response.status === 200) {
              setUser(response.data);
               } else setErrorMessage(response.message);
          })
          .catch((error) => {
            setErrorMessage("Error during register process", error);
          })
          }
             
}, []);


  //Add data to MyGarden
const addToMyGarden = ({myGardenId, plantId, commonName, scientificName, family, vegetable, edible, edibleParts, light, humidity, phLow,  phHight, sources, image}) => {
  
  const newGarden = [...user.myGarden, {myGardenId, plantId, commonName, scientificName, family, vegetable, edible, edibleParts, light, humidity, phLow,  phHight, sources, image}];
   setUser ({...user, myGarden:newGarden})
}

//Remove data from MyGarden
const removeFromMyGarden = (myGardenId) => {
 const remaningGarden = user.myGarden.filter((garden) => {
   return (garden.myGardenId !== myGardenId)
  })
 console.log(remaningGarden)
  setUser({...user, myGarden: remaningGarden})
}



//Update MyGarden
const updateMyGarden = ({myGardenId, plantLocation, sunExposition, wateringFrequency, lastWatering, fertilizerName, fertilizerFrequency, lastFertilizing, comments}) => {
  const updateGarden = user.myGarden.map((garden)=> {
    if (garden.myGardenId === myGardenId)
    { garden.plantLocation=plantLocation; garden.sunExposition=sunExposition; garden.wateringFrequency=wateringFrequency; garden.lastWatering=lastWatering; garden.fertilizerName=fertilizerName; garden.fertilizerFrequency=fertilizerFrequency; garden.lastFertilizing=lastFertilizing; garden.comments=comments}
    
     return garden
  })
    setUser({...user, myGarden: updateGarden})
  }
   

  return (
    <UserContext.Provider value={{user, setUser, addToMyGarden, removeFromMyGarden,updateMyGarden, loggedInUser}}>
      {children}
    </UserContext.Provider>
  );
};
