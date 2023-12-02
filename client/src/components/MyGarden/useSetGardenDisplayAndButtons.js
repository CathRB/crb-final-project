
import {useContext,  useEffect} from "react"
import { UserContext } from "../Context/UserContext";


const useSetGardenDisplayAndButtons = (setTotalPages, pageNumber, totalPages, setNextPage, setPreviousPage, setGardenToDisplay) =>{

    const {user} = useContext(UserContext)

 //Set number of pages and next button
 useEffect(() => {
    if(user){
     setTotalPages(Math.ceil(user.myGarden.length / 2));
       if (user.myGarden.length  < 3 ) {
        setNextPage(true);
        } else {
        setNextPage(false);
         }
          }
     }, [user]);

//Set previous and next buttons
     useEffect(() => {
      if(totalPages){
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
    }, [totalPages, pageNumber]);

 //Set number of garden to display by page (2)
useEffect(() => {
  if(user){
  const gardenByPage = user.myGarden.filter((plant, index) => {
    if (index >= (pageNumber - 1) * 2 && index < pageNumber * 2) {
      return plant;
    }
  });
  setGardenToDisplay(gardenByPage);
  }
  }, [user, pageNumber]);

}


export default useSetGardenDisplayAndButtons