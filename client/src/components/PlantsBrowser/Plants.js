import {useState, useEffect} from "react"

import {
  DivGrid,
  PlantBox,
    Footer,
} from "./styledBrowser"

 
const Plants = () => {

    const [plantsData, setPlantsData] = useState(null);
    const [plantName, setPlantName] = useState(null)
    const [errorMessage, setErrorMessage] = useState(null)
    const [plantSlug, setPlantSlug] = useState(null)
    const [plantInfo, setPlantInfo] = useState(null)
    const [previousPage, setPreviousPage] = useState(true)
    const [nextPage, setNextPage] = useState(true)
    const [pageNumber, setPageNumber] = useState(1)
    const [totalPages, setTotalPages] = useState(null)



//Get plants from a search name (page 1)
    useEffect(() => {
      if (plantName) {
           fetch(`/api/get-plants/${plantName}`)
          .then((response) => response.json())
            .then((response) => {
              if (response.status === 200) 
             { setPlantsData(response.plantsData);
               setTotalPages(Math.ceil(response.plantsMeta.total/20));
               if (response.plantsMeta.total < 21) {
                setNextPage(true);
              }else {setNextPage(false);}
                }
            
            else {setErrorMessage(response.message)}
            })
          .catch((error) => {
            setErrorMessage("Error during searching process", error);
          })
          }
      }, [plantName]);


//Get more information about a specific plant onClick
  useEffect(() => {
    if (plantSlug) {
         fetch(`/api/get-plantInfo/${plantSlug}`)
        .then((response) => response.json())
          .then((response) => {
            if (response.status === 200) {
              setPlantInfo(response.plantData);
          }
          else setErrorMessage(response.message)
      
          })
        .catch((error) => {
          setErrorMessage("Error during searching process", error);
        })
        }
    }, [plantSlug]);


//Get plants from a search name - Other pages

  useEffect(() => {
    if(plantsData )  {  
    fetch(`/api/get-plantsPages/${pageNumber}/${plantName}`)
          .then((response) => response.json())
            .then((response) => {
              if (response.status === 200) {
                setPlantsData(response.plantsPages);
            }
            else setErrorMessage(response.message)
        
            })
          .catch((error) => {
            setErrorMessage("Error during searching process", error);
          })
          if (pageNumber !== 1) {
            setPreviousPage(false);
          }else {setPreviousPage(true);}

          if (pageNumber === totalPages) {
            setNextPage(true);
          }else {setNextPage(false);}
          }
      }, [pageNumber]);


    return (
        <div>
            <h1>Plant Search</h1>
           
        <input placeholder="Type a plant name" type="text" id="search" />
        <button onClick={() => {setPlantName(search.value), setPlantsData(null), setPlantInfo(null), setPageNumber(1)}}>Search</button>
        
        <DivGrid>
            {plantsData? (
            plantsData.map ((plant) => {
            
            return(
            <PlantBox key={plant.id}  onClick={() => {setPlantSlug(plant.slug)}}>
              <p>Common name: {plant.common_name}</p>
              <p>Plant family: {plant.family}</p>
              <p>Plant slug :{plant.slug}</p>
              {plant.image_url?(
             <img src={plant.image_url} alt={plant.common_name} />
             ) : <p>pictures not available</p>}
             <p>Scientific namd: {plant.scientific_name}</p>
            </PlantBox>
            )
            })
            ): <p>{errorMessage}</p> }

      {plantInfo? (
                   
            
            <PlantBox key={plantInfo.id}>
              <p>Observations: {plantInfo.observations}</p>
              <p>Vegetable: {plantInfo.vegetable}</p>

              {plantInfo.main_species.edible? (
              <p>Edible : Yes </p>
              ):(<p>Edible : No </p>
              )}

            {plantInfo.main_species.edible_part ?(
              <p>Edible part :{plantInfo.main_species.edible_part.toString("")}</p>
            ):(<p>Edible part : none</p>
            )}
            <p> light: {plantInfo.main_species.growth.light} </p>
            <button>Add to My Garden</button>
              </PlantBox>
            
            
        
            ): <p>{errorMessage}</p> }


            </DivGrid>
            
            <Footer>
              {plantsData? (
                <>
               <button disabled={previousPage} onClick={() => {setPageNumber(pageNumber - 1)}}>Previous Page</button>
               <p>{pageNumber}</p>
               <button  disabled={nextPage} onClick={() => {setPageNumber(pageNumber + 1)}}>Next Page</button>
               </>
               ): (<></>) }
            </Footer>
          </div>
    

    );
}

export default Plants


