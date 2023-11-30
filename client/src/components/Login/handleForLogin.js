


/* const handleChange = (key, value, setLogInfo, logInfo) => {
    console.log(logInfo)
    setLogInfo({
      ...logInfo,
      [key]: value,
    });
  };

const handleSubmit = (event, setSending, logInfo, setUser, navigate, setErrorMessage) => {
    setSending(true);
    event.preventDefault();

    fetch("/api/get-userInfo", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(logInfo),
    })
      .then((response) => response.json())
      .then((response) => {
         if (response.status === 200) {
          setUser(response.data);
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

  export default  handleChange; handleSubmit */