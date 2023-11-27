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
const addToMyGarden = ({myGardenId, plantId, commonName, family, vegetable, edible, edibleParts, light, humidity, phLow,  phHight, sources, image}) => {
  
  const newGarden = [...user.myGarden, {myGardenId, plantId, commonName, family, vegetable, edible, edibleParts, light, humidity, phLow,  phHight, sources, image}];
   setUser ({...user, myGarden:newGarden})
}

//Remove data from MyGarden
const removeFromMyGarden = (myGardenId) => {
 const remaningGarden = user.myGarden.filter((garden) => {
   return (garden.myGardenId !== myGardenId)
  })
 
  setUser({...user, myGarden: remaningGarden})
}

  return (
    <UserContext.Provider value={{user, setUser, addToMyGarden, removeFromMyGarden }}>
      {children}
    </UserContext.Provider>
  );
};
