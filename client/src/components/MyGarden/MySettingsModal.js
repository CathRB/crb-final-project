
import React from "react";
import { useState, useContext} from "react"
import { UserContext } from "../Context/UserContext"
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs from 'dayjs';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';





export default function MySettingsModal({open, handleClose, userId, myGardenId, setErrorMessage}) {

     const [personalSettings, setPersonalSettings] = useState({userId, sunExposition: ""})
     

     const { updateMyGarden} = useContext(UserContext)
  

    const handleChange = (key, value) => {
      setPersonalSettings({
        ...personalSettings,
        [key]: value,
      });
    };

const handleDateWatering = (newValue) => {
    const date = new Date(newValue)
    let formatedDate = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
     return (handleChange("lastWatering", formatedDate))
  }


  const handleDateFertilizing = (newValue) => {
    const date = new Date(newValue)
    let formatedDate = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
    return (handleChange("lastWatering", formatedDate))
  }



  //Update with user settings
const addPersonalSettings= (event) => {
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


  return (
    <React.Fragment>
      
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle sx={{ paddingBottom:0, color:"green"}}>Add my psersonal care settings</DialogTitle>
        <DialogContent>
          
          <TextField
          sx={{marginBottom: 5}}
            autoFocus
            margin="dense"
            id="location"
            label="Location"
            type="text"
            fullWidth
            variant="standard"
            onChange={(event) =>
              handleChange("plantLocation", event.target.value)
            }
             />

<Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="sunExposition">Sun exposition</InputLabel>
        <Select
        sx={{marginBottom: 3}}
          labelId="sunExposition"
          id="sunExposition"
          value={personalSettings.sunExposition}
          label="Sun exposition"
          onChange={(event) =>
            handleChange("sunExposition", event.target.value)
          }
        >
           <MenuItem value={"low"}>Low</MenuItem>
          <MenuItem value={"moderate"}>Moderate</MenuItem>
          <MenuItem value={"high"}>High</MenuItem>
        </Select>
      </FormControl>
    </Box>
 



<TextField
sx={{marginBottom: 3}}
            autoFocus
            margin="dense"
            id="wateringFrequency"
            label="Watering Frequency (days)"
            type="number"
            fullWidth
            variant="standard"
            onChange={(event) =>
              handleChange("wateringFrequency", event.target.value)
            }
             />


    <LocalizationProvider dateAdapter={AdapterDayjs}>
     <InputLabel id="lastWatering" 
          >Last watering</InputLabel>
        <DatePicker
        sx={{marginBottom: 3}}
        //value={wateringValue}
        onChange={(newValue) => {handleDateWatering(newValue) }}
        />
     </LocalizationProvider>


<TextField
sx={{marginBottom: 3}}
            autoFocus
            margin="dense"
            id="fertilizerName"
            label="Fertilizer name"
            type="text"
            fullWidth
            variant="standard"
            onChange={(event) =>
              handleChange("fertilizerName", event.target.value)
            }
             />

<TextField
sx={{marginBottom: 5}}
            autoFocus
            margin="dense"
            id="fertilizerFrequency"
            label="Fertilizer frequency (days)"
            type="number"
            fullWidth
            variant="standard"
            onChange={(event) =>
              handleChange("fertilizerFrequency", event.target.value)
            }
             />


    <LocalizationProvider dateAdapter={AdapterDayjs}>
     <InputLabel id="lastFertilizing" 
          >Last fertilizing</InputLabel>
        <DatePicker
        sx={{marginBottom: 3}}
         onChange={(newValue) => {handleDateFertilizing(newValue) }}
        />
     </LocalizationProvider>



             
<TextField
            autoFocus
            margin="dense"
            id="comments"
            label="Comments"
            type="text"
            fullWidth
            variant="standard"
            onChange={(event) =>
              handleChange("comments", event.target.value)
            }
             />

        </DialogContent>
        <DialogActions>
          <Button sx={{color: "green"}} onClick={handleClose}>Cancel</Button>
          <Button   sx={{color: "green"}} onClick= {(event) => {addPersonalSettings(event)}}>Save changes</Button>
        </DialogActions>
      </Dialog>
        </React.Fragment>
  );
}