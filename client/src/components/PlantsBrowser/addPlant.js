

const addPlant = (event, addPlantData, addToMyGarden, navigate, setErrorMessage, setAdding) => {

    //Add a plant to user library

    setAdding(true);
    event.preventDefault();

    fetch("/api/add-plant-myGarden", {
      method: "PATCH",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(addPlantData),
    })
      .then((response) => response.json())
      .then((response) => {
        if (response.status === 201) {
          addToMyGarden(response.data);
          navigate("/myGarden");
        } else setErrorMessage(response.message);
      })
      .catch((error) => {
        setErrorMessage("Error during adding process", error);
      })
      .finally(() => {
        setAdding(false);
      });
  };



export default addPlant