import {Link} from "react-router-dom"
import {
    NavBar,
   
  } from "./styledHeader"

const Header = () => {

    return(
        <NavBar>
            <Link to="/">Home</Link>
            <Link to="/plants">Plant Browser</Link>
            <Link to="/myGarden">My Garden</Link>
            <Link to="/LogIn">Log in</Link>
            <Link to="/register">Sing in</Link>
            <p>🪴 "Name" Garden 🪴</p>
    </NavBar>
    )
}

export default Header


