import { useState, useEffect, useContext } from "react";
import { UserContext } from "../Context/UserContext";
import Plants from "./Plants";
import { Main, HeaderBox,  DivGrid, Footer } from "./styledBrowser";

const PlantsBrowser = () => {
  const { user} = useContext(UserContext);
  const [plantsData, setPlantsData] = useState(null);
  const [plantName, setPlantName] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);
  const [plantSlug, setPlantSlug] = useState(null);
  const [plantInfo, setPlantInfo] = useState(null);
  const [previousPage, setPreviousPage] = useState(true);
  const [nextPage, setNextPage] = useState(true);
  const [pageNumber, setPageNumber] = useState(1);
  const [totalPages, setTotalPages] = useState(null);
  const [scientificName, setScientificName] = useState(null)
 


  let addPlantData =
    user && plantInfo
      ? {
          userId: user._id,
          plantId: plantInfo.plantId,
          commonName: plantInfo.commonName,
          scientificName: scientificName,
          family: plantInfo.family,
          vegetable: plantInfo.vegetable,
          edible: plantInfo.edible,
          edibleParts: plantInfo.edibleParts,
          light: plantInfo.light,
          humidity: plantInfo.humidity,
          phLow: plantInfo.phLow,
          phHight: plantInfo.phHight,
          sources: plantInfo.sources,
          image: plantInfo.image,
        }
      : null;

  //Get plants from a search name (page 1)
  useEffect(() => {
    if (plantName) {
      fetch(`/api/get-plants/${plantName}`)
        .then((response) => response.json())
        .then((response) => {
          if (response.status === 200) {
            setPlantsData(response.data);
            setTotalPages(Math.ceil(response.dataMeta.total / 20));
            if (response.dataMeta.total < 21) {
              setNextPage(true);
            } else {
              setNextPage(false);
            }
          } else {
            setErrorMessage(response.message);
          }
        })
        .catch((error) => {
          setErrorMessage("Error during searching process", error);
        });
    }
  }, [plantName]);


  //Get more information about a specific plant onClick
  useEffect(() => {
    if (plantSlug) {
      fetch(`/api/get-plantInfo/${plantSlug}`)
        .then((response) => response.json())
        .then((response) => {
          if (response.status === 200) {
            setPlantInfo(response.data);
          } else setErrorMessage(response.message);
        })
        .catch((error) => {
          setErrorMessage("Error during searching process", error);
        });
    }
  }, [plantSlug]);


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
 

  //Get plants from a search name - Other pages

  useEffect(() => {
    if (plantsData) {
      fetch(`/api/get-plantsPages/${pageNumber}/${plantName}`)
        .then((response) => response.json())
        .then((response) => {
          if (response.status === 200) {
            setPlantsData(response.data);
          } else setErrorMessage(response.message);
        })
        .catch((error) => {
          setErrorMessage("Error during searching process", error);
        });
      if (pageNumber !== 1) {
        setPreviousPage(false);
      } else {
        setPreviousPage(true);
      }

      if (pageNumber === totalPages) {
        setNextPage(true);
      } else {
        setNextPage(false);
      }
    }
  }, [pageNumber]);


  return (
    <Main>
      <HeaderBox>
      <h1>Plant Search</h1>

      <input placeholder="Type a plant name" type="text" id="search" />
      <button
        onClick={() => {
          setPlantName(search.value),
            setPlantsData(null),
            setPlantInfo(null),
            setPageNumber(1),
            setErrorMessage(null);
        }}
      >
        Search
      </button>
      </HeaderBox>

      <DivGrid>
        {plantsData ? (
          plantsData.map((plant) => {
              return (
              <Plants
                key={plant.id}
                plant={plant}
                setPlantSlug={setPlantSlug}
                setScientificName={setScientificName}
                plantInfo={plantInfo}
                addPlantData={addPlantData}
                setErrorMessage={setErrorMessage}
                
                />
              )  
            })
          ):( <p>{errorMessage}</p> )}

               
      </DivGrid>

      <Footer>
        {plantsData ? (
          <>
            <button
              disabled={previousPage}
              onClick={() => {
                setPageNumber(pageNumber - 1);
                setPlantInfo(null)
              }}
            >
              Previous Page
            </button>
            <p>{pageNumber}</p>
            <button
              disabled={nextPage}
              onClick={() => {
                setPageNumber(pageNumber + 1);
                setPlantInfo(null)
              }}
            >
              Next Page
            </button>
          </>
        ) : (
          <></>
        )}
      </Footer>
    </Main>
  );
};

export default PlantsBrowser;

