import { useEffect, useState, useContext} from "react";
import { UserContext } from "../Context/UserContext";
import Plants from "./Plants";
import { Main, HeaderBox,  DivGrid, Footer, ErrorMessage} from "./styledBrowser";
import useGetPlants from "./useGetPlants";



const PlantsBrowser = () => {
  const {errorMessage, setErrorMessage} = useContext(UserContext)
  const [plantsData, setPlantsData] = useState(null);
  const [plantName, setPlantName] = useState(null);
  const [previousPage, setPreviousPage] = useState(true);
  const [nextPage, setNextPage] = useState(true);
  const [pageNumber, setPageNumber] = useState(1);
  const [totalPages, setTotalPages] = useState(null);
  const [displaying, setDisplaying] = useState(null);

  const getPlants = useGetPlants(plantName, plantsData, setPlantsData, totalPages, setTotalPages, setNextPage, setPreviousPage, pageNumber)


useEffect(() => {
  if (!plantName) {
    getPlants}
}, [])


  return (
    <Main>
      <HeaderBox>
      <h1>🪴Search a plant!🪴</h1>
<div>
      <input placeholder="Type a plant name" type="text" id="search" />
      <button
        onClick={() => {
          setPlantName(search.value),
          getPlants,
            setPlantsData(null),
            setPageNumber(1),
            setErrorMessage(null);
        }}
      >
        Search
      </button>
      </div>
      </HeaderBox>

      {errorMessage?(
        <ErrorMessage>{errorMessage}</ErrorMessage> 
      ): 
<>

      <DivGrid>
        {plantsData? (
          plantsData.map((plant) => {
              return (
              <Plants
                key={plant.id}
                plant={plant}
                displaying={displaying}
                setDisplaying ={setDisplaying}
                />
              )  
            })
          ):(<></>)}
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
        
         
         </>  }
    </Main>
  );
};

export default PlantsBrowser;

