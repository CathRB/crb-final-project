

  //Update with user settings
  const addPersonalSettings= (event, personalSettings, myGardenId, updateMyGarden, setErrorMessage) => {
    event.preventDefault();
  
    fetch("/api/add-user-comments", {
        method: "PATCH",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({...personalSettings, myGardenId}),
      })
        .then((response) => response.json())
        .then((response) => {
          if (response.status === 201) {
             updateMyGarden(response.data);
            location.reload();
          } else setErrorMessage(response.message);
        })
        .catch((error) => {
             setErrorMessage("Error during updating process", error);
        })
        .finally(() => {
          handleClose();
        });
    };

    export default addPersonalSettings