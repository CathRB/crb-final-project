

const handleHumidityValue = (plantInfo, setPlantInfo) => {

    return (
      //Change humidity and light value for sentences

useEffect(()=> {
 
    if (plantInfo !== null) {
  if (plantInfo.light === null)
  {
    setPlantInfo({
      ...plantInfo,
      light: null,
    })
    }
    else if(plantInfo.light === 0){
    setPlantInfo({
      ...plantInfo,
      light: "Dark night (< 1 lux)",
    });
    }  else if (plantInfo.light === 1){
      setPlantInfo({
        ...plantInfo,
        light: "Full moon on a clear night (10 lux)",
      })
      }else if (plantInfo.light === 2){
        setPlantInfo({
          ...plantInfo,
          light: "Public areas with dark surroundings (50 lux)",
        })
   }else if (plantInfo.light === 3){
    setPlantInfo({
      ...plantInfo,
      light: "Very dark overcast day (100 lux)",
    })
    }else if (plantInfo.light === 4){
      setPlantInfo({
        ...plantInfo,
        light: "Overcast day (1000 lux)",
      })
      }else if (plantInfo.light === 5){
        setPlantInfo({
          ...plantInfo,
          light: "Cloudy day (5 000 lux)",
        })
  }else if (plantInfo.light === 6){
    setPlantInfo({
      ...plantInfo,
      light: "Full daylight without direct sunlight (10 000 lux)",
    })
    }else if (plantInfo.light === 7){
      setPlantInfo({
        ...plantInfo,
        light: "Full daylight with some direct sunlight (50 000 lux)",
      })
      }else if (plantInfo.light === 8){
        setPlantInfo({
          ...plantInfo,
          light: "Full daylight with a lot of direct sunlight (75 000 lux)",
        })
        }else if (plantInfo.light === 9 || plantInfo.light === 10 ){
          setPlantInfo({
            ...plantInfo,
            light: "Direct sunlight (100 000 lux)",
          })
        }
   
   }
  },[plantInfo])
  )
};

export default handleHumidityValue