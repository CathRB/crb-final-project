
const sendRegister = (event, setSending, registerInfo, setUser, navigate, setErrorMessage) => {

  
  setSending(true);
    event.preventDefault();

    fetch("/api/add-user", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(registerInfo),
    })
      .then((response) => response.json())
      .then((response) => {
        if (response.status === 201) {
          setUser(response.data)
          sessionStorage.setItem('user', response.data._id)
          navigate(`/myGarden`);
        } else setErrorMessage(response.message);
      })
      .catch((error) => {
        setErrorMessage("Error during register process", error);
      })
      .finally(() => {
        setSending(false);
      });
  }; 

  export default sendRegister