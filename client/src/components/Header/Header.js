
import {useContext} from "react"
import {UserContext} from "../Context/UserContext"
import {useNavigate } from 'react-router-dom';
import {NavBar, PathLink, Button} from "./styledHeader"

const Header = () => {

const {user, setUser, setErrorMessage} = useContext(UserContext)
const navigate = useNavigate()

const handleLogout = (event) => {
    event.preventDefault();
    setUser(null);
    sessionStorage.clear()
    navigate("/");

}
    return(
        <NavBar>
            
            <PathLink to="/"  onClick={() => {setErrorMessage(null)}}>Home</PathLink>
            <PathLink to="/plantsBrowser" onClick={() => {setErrorMessage(null)}}>Plant Browser</PathLink>
            
            {user?(
            <p>🪴 {user.firstName}'s garden 🪴</p>
            ):(<></>)}

            <PathLink to="/myGarden" onClick={() => {setErrorMessage(null)}}>My garden</PathLink>
           
            {user?(
            <Button onClick={(event) => {handleLogout(event); setErrorMessage(null)}} >Log out</Button>
             ):(
            <>
            <PathLink to="/LogIn" onClick={() => {setErrorMessage(null)}}>Log in</PathLink>
            <PathLink to="/register" onClick={() => {setErrorMessage(null)}}>Sign up</PathLink>
            </>
            )}
            
            
    </NavBar>
    )
}

export default Header


