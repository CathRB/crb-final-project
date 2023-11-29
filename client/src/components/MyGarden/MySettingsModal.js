
import * as React from 'react';
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

export default function MySettingsModal({open, handleClickOpen,  handleClose}) {

    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
      setAge(event.target.value);
    };

 

  return (
    <React.Fragment>
      
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Add my psersonal care settings</DialogTitle>
        <DialogContent>
          
          <TextField
            autoFocus
            margin="dense"
            id="location"
            label="Location"
            type="text"
            fullWidth
            variant="standard"
             />

<Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="sunExposition">Age</InputLabel>
        <Select
          labelId="sunExposition"
          id="sunExposition"
          value={age}
          label="Sun exposition"
          onChange={handleChange}
        >
          <MenuItem value="low">Low</MenuItem>
          <MenuItem value="moderate">Moderate</MenuItem>
          <MenuItem value="high">High</MenuItem>
        </Select>
      </FormControl>
    </Box>
 



<TextField
            autoFocus
            margin="dense"
            id="wateringFrequency"
            label="Watering Frequency (days)"
            type="number"
            fullWidth
            variant="standard"
             />

 <LocalizationProvider dateAdapter={AdapterDayjs}>
 <InputLabel id="lastWatering">Last watering</InputLabel>
      <DatePicker />
    </LocalizationProvider>



<TextField
            autoFocus
            margin="dense"
            id="fertilizerName"
            label="Fertilizer name"
            type="text"
            fullWidth
            variant="standard"
             />

<TextField
            autoFocus
            margin="dense"
            id="fertilizerFrequency"
            label="Fertilizer frequency (days)"
            type="number"
            fullWidth
            variant="standard"
             />

<LocalizationProvider dateAdapter={AdapterDayjs}>
<InputLabel id="lastFertilizing">Last fertilizing</InputLabel>
      <DatePicker />
    </LocalizationProvider>

             
<TextField
            autoFocus
            margin="dense"
            id="comments"
            label="Comments"
            type="text"
            fullWidth
            variant="standard"
             />

        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Save changes</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}