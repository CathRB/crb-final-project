/* 

const handleClose = (setOpen) => {
    setOpen(false);
  };

  const handleChange = (key, value, setPersonalSettings, personalSettings) => {
    setPersonalSettings({
      ...personalSettings,
      [key]: value,
    });
  };

  const handleDateWatering = (newValue, setPersonalSettings, personalSettings) => {
    const date = new Date(newValue)
    let formatedDate = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
  handleChange("lastWatering", formatedDate, setPersonalSettings, personalSettings)
   }

  const handleDateFertilizing = (newValue, setPersonalSettings, personalSettings) => {
    const date = new Date(newValue)
    let formatedDate = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
    handleChange("lastFertilizing", formatedDate, setPersonalSettings, personalSettings)
    
   
  }
 


  export default handleChange; handleClose; handleDateWatering; handleDateFertilizing  */