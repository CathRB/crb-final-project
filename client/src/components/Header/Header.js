
import {useContext} from "react"
import {UserContext} from "../Context/UserContext"
import { useNavigate } from 'react-router-dom';
import {
    NavBar,
    PathLink,
    Button,
   
  } from "./styledHeader"

const Header = () => {

const {user, setUser} = useContext(UserContext)
const navigate = useNavigate()

const handleLogout = (event) => {
    event.preventDefault();
    setUser(null);
    sessionStorage.clear()
    navigate("/");

}
    return(
        <NavBar>
            
            <PathLink to="/">Home</PathLink>
            <PathLink to="/plants">Plant Browser</PathLink>
            
            {user?(
            <p>🪴 {user.firstName}'s garden 🪴</p>
            ):(<></>)}

            <PathLink to="/myGarden">My garden</PathLink>
           
            {user?(
            <Button onClick={(event) => handleLogout(event)} >Log out</Button>
             ):(
            <>
            <PathLink to="/LogIn">Log in</PathLink>
            <PathLink to="/register">Sign in</PathLink>
            </>
            )}
            
            
    </NavBar>
    )
}

export default Header


