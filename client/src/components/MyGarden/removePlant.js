
//Remove a plant to user library
const removePlant = (event, plantToRemove, setErrorMessage, removeFromMyGarden, navigate) => {
   

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


        export default removePlant