import { useState, useEffect, useContext } from "react";
import { UserContext } from "../Context/UserContext";
import { useNavigate } from "react-router-dom";
import browserBackground from "../../assets/browserBackground.jpg";

import { Main, DivGrid, PlantBox, Footer } from "./styledBrowser";

const PlantsBrowser = () => {
  const [plantsData, setPlantsData] = useState(null);
  const [plantName, setPlantName] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);
  const [plantSlug, setPlantSlug] = useState(null);
  const [plantInfo, setPlantInfo] = useState(null);
  const [previousPage, setPreviousPage] = useState(true);
  const [nextPage, setNextPage] = useState(true);
  const [pageNumber, setPageNumber] = useState(1);
  const [totalPages, setTotalPages] = useState(null);
  const [adding, setAdding] = useState(false);
  const [scientificName, setScientificName] = useState(null)
 

  const { user, addToMyGarden } = useContext(UserContext);
  const navigate = useNavigate();

  if(plantSlug)
{console.log("plantSlug", plantSlug)}

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

  //Add a plant to user library
  const addPlant = (event) => {
    setAdding(true);
    event.preventDefault();

    fetch("/api/add-plant-myGarden", {
      method: "PATCH",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(addPlantData),
    })
      .then((response) => response.json())
      .then((response) => {
        if (response.status === 201) {
          addToMyGarden(response.data);
          navigate("/myGarden");
        } else setErrorMessage(response.message);
      })
      .catch((error) => {
        setErrorMessage("Error during adding process", error);
      })
      .finally(() => {
        setAdding(false);
      });
  };

  return (
    <Main>
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

      <DivGrid>
        {plantsData ? (
          plantsData.map((plant) => {
            return (
              <PlantBox
                key={plant.id}
                onClick={() => {
                  setPlantSlug(plant.slug);
                  setScientificName(plant.scientific_name)
                         }}
              >
                {plant.common_name ? (
                  <p>{plant.common_name}</p>
                ) : (
                  <p>Common name: not available</p>
                )}
                {plant.image_url ? (
                  <img src={plant.image_url} alt={plant.common_name} />
                ) : (
                  <p>pictures not available</p>
                )}
                <p>Scientific name: {plant.scientific_name}</p>
              </PlantBox>
            );
          })
        ) : (
          <p>{errorMessage}</p>
        )}
 <PlantBox>
        {plantInfo ? (
           <>
            {plantInfo.commonName ? (
              <p>{plantInfo.commonName}</p>
            ) : (
              <p>Common name not available </p>
            )}
            {plantInfo.family ? (
              <p>Family: {plantInfo.family} </p>
            ) : (
              <p>Family not available </p>
            )}
            {plantInfo.vegetable === null || plantInfo.vegetable === "" ? (
              <p>Vegetable: unknown</p>
            ) : plantInfo.vegetable === false ? (
              <p>Vegetable: no</p>
            ) : (
              <p>Vegetable: {plantInfo.vegetable}</p>
            )}

            {plantInfo.edible === null || plantInfo.edible === "" ? (
              <p>Edible: unknown</p>
            ) : plantInfo.edible === false ? (
              <p>Edible: No</p>
            ) : (
              <p>Edible: Yes</p>
            )}

            {plantInfo.edibleParts ? (
              <p>Edible part :{plantInfo.edibleParts.toString("")}</p>
            ) : (
              <></>
            )}
            {plantInfo.light ? (
              <p> Light: {plantInfo.light} </p>
            ) : (
              <p> Light: unknown</p>
            )}

            {plantInfo.humidity ? (
              <p> Humidity: {plantInfo.humidity} </p>
            ) : (
              <p> Humidity: unknown </p>
            )}

            {plantInfo.phLow && plantInfo.phHight ? (
              <p>
                {" "}
                Ideal pH between: {plantInfo.phLow} and {plantInfo.phHight}{" "}
              </p>
            ) : (
              <p> Ideal pH between: unknown </p>
            )}

            {plantInfo.sources ? (
              plantInfo.sources.map((source) => {
                if (source.name === "POWO")
                  return (
                    <a key={source.name} target="_blank" href={source.url}>
                      Distribution map
                    </a>
                  );
              })
            ) : (
              <p>Distribution map: information not available</p>
            )}

            {!user ? (
              <p> Please log in to add this plant to your garden </p>
            ) : user && user.myGarden.length < 10 ? (
              <button onClick={(event) => addPlant(event)} disabled={adding}>
                {adding ? "Adding plant" : "Add to My Garden"}
              </button>
            ) : (
              <p>
                Sorry you reached the plant limit in your garden. Please remove
                plant befor adding new one
              </p>
            )}
        </>
        ) : (
          <p>{errorMessage}</p>
        )}
        </PlantBox>
      </DivGrid>

      <Footer>
        {plantsData ? (
          <>
            <button
              disabled={previousPage}
              onClick={() => {
                setPageNumber(pageNumber - 1);
              }}
            >
              Previous Page
            </button>
            <p>{pageNumber}</p>
            <button
              disabled={nextPage}
              onClick={() => {
                setPageNumber(pageNumber + 1);
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

/* {plantInfo.commonName? (
  <p>{plantInfo.commonName}</p>
  ):<p>Common name: not available </p> }
  {plantInfo.family?(
  <p>Family: {plantInfo.family} </p>
  ):<p>Family: not available </p> }
  { plantInfo.vegetable === null || plantInfo.vegetable === "" ?(
    <p>Vegetable: information not available</p>
  ):(
     plantInfo.vegetable === false ?(
      <p>Vegetable: No</p>
    ):(
  <p>Vegetable: {plantInfo.vegetable}</p>
  ) )}

 { plantInfo.edible === null || plantInfo.edible === "" ?(
    <p>Edible: information not available</p>
  ):(
    plantInfo.edible === false ?(
      <p>Edible: No</p>
    ):(
  <p>Edible: Yes</p>
  ) )} 


{plantInfo.edibleParts ?(
  <p>Edible part :{plantInfo.edibleParts.toString("")}</p>
):(<></>
)}
{plantInfo.light?(
<p> Light: {plantInfo.light} </p>
):<p> Light: information not available </p> }

{plantInfo.humidity?(
<p> Humidity: {plantInfo.humidity} </p>
):<p> Humidity: information not available </p> }

{plantInfo.phLow && plantInfo.phHight?(
<p> Ideal pH between: {plantInfo.phLow} and {plantInfo.phHight} </p>
):<p> Ideal pH between: information not available </p> }
  
  {plantInfo.sources? (
   plantInfo.sources.map ((source)=> {
    if(source.name === "POWO")
    return (
     <a key={source.name} target="_blank" href= {source.url}>Distribution map</a>

   )
      })
      ): <p>Distribution map: information not available</p> 
   } */

//Works
/* 
   {plantInfo.common_name? (
    <p>{plantInfo.common_name}</p>
    ):<p>Common name: not available </p> }
    {plantInfo.main_species.family?(
    <p>Family: {plantInfo.main_species.family} </p>
    ):<p>Family: not available </p> }
  
    { plantInfo.vegetable === null || plantInfo.vegetable === "" ?(
      <p>Vegetable: information not available</p>
    ):(
       plantInfo.vegetable === false ?(
        <p>Vegetable: No</p>
      ):(
    <p>Vegetable: {plantInfo.vegetable}</p>
    ) )}

   { plantInfo.main_species.edible === null || plantInfo.main_species.edible === "" ?(
      <p>Edible: information not available</p>
    ):(
      plantInfo.main_species.edible === false ?(
        <p>Edible: No</p>
      ):(
    <p>Edible: Yes</p>
    ) )} 


  {plantInfo.main_species.edible_part ?(
    <p>Edible part :{plantInfo.main_species.edible_part.toString("")}</p>
  ):(<></>
  )}
  {plantInfo.main_species.growth.light?(
  <p> Light: {plantInfo.main_species.growth.light} </p>
  ):<p> Light: information not available </p> }

  {plantInfo.main_species.growth.atmospheric_humidity?(
  <p> Humidity: {plantInfo.main_species.growth.atmospheric_humidity} </p>
  ):<p> Humidity: information not available </p> }

{plantInfo.main_species.growth.ph_minimum && plantInfo.main_species.growth.ph_maximum?(
  <p> Ideal pH between: {plantInfo.main_species.growth.ph_minimum} and {plantInfo.main_species.growth.ph_maximum} </p>
  ):<p> Ideal pH between: information not available </p> }
    
    {plantInfo.main_species.sources? (
     plantInfo.main_species.sources.map ((source)=> {
      if(source.name === "POWO")
      return (
       <a key={source.name} target="_blank" href= {source.url}>Distribution map</a>

     )
        })
        ): <p>Distribution map: information not available</p> 
     } */
