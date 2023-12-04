import { useEffect, useState} from "react";

const useGetLightAndHumiditySentences = (setPlantInfo, plantInfo) => {

//Change light value for sentences
const [loaded, setLoaded] = useState(null)

useEffect(()=> {
 
    if (plantInfo !== null && loaded === null) {
        setLoaded(true)
    
    let light = null
    switch(plantInfo.light){
    
    case null:
    light = null
    break;
    
    case 0: 
    light="Dark night (< 1 lux)"
    break;
    
    case 1: 
    light= "Full moon on a clear night (10 lux)"
    break;
    
    case 2:
    light= "Public areas with dark surroundings (50 lux)"
    break;
    
    case 3:
    light= "Very dark overcast day (100 lux)"
    break;
    
    case 4:
    light= "Overcast day (1000 lux)"
    break;
    
    case 5:
    light="Cloudy day (5 000 lux)"
    break;
    
    case 6:
    light="Full daylight without direct sunlight (10 000 lux)"
    break;
    
    case 7:
    light= "Full daylight with some direct sunlight (50 000 lux)"
    break;
    
     case 8:
    light= "Full daylight with a lot of direct sunlight (75 000 lux)"
    break;
    
    case 9 || 10:
    light= "Direct sunlight (100 000 lux)"
    break;
    }

    let humidity = null
    switch(plantInfo.light){
    
    case null:
        humidity = null
    break;
    
    case 0: 
    humidity="< 10%"
    break;
    
    case 1: 
    humidity= "10%"
    break;
    
    case 2:
    humidity= "20%"
    break;
    
    case 3:
    humidity= "30%"
    break;
    
    case 4:
    humidity= "40%"
    break;
    
    case 5:
    humidity="50%"
    break;
    
    case 6:
    humidity="60%"
    break;
    
    case 7:
    humidity= "70%"
    break;
    
     case 8:
    humidity= "80%"
    break;
    
    case 9 || 10:
    humidity= "> 90%"
    break;
    }


    setPlantInfo({...plantInfo, light, humidity})
    }
    },[plantInfo])
             };

     export default useGetLightAndHumiditySentences


