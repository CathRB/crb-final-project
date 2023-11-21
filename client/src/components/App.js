import {BrowserRouter, Routes, Route, Link} from "react-router-dom"
import {useEffect} from "react"
import HomePage from "./Home/HomePage";

const App = () => {
/* useEffect(() => {
fetch("/api/testMongo")
    .then((response) => response.json())
    .then(console.log)
}, []) */
return(
    <BrowserRouter>
    <nav>
        <ul>
            <Link to="/">Home</Link>
            <Link to="/plantBrowser">Plant Browser</Link>
            <Link to="/myGarden">My Garden</Link>
            <Link to="/Log in">Log in</Link>
            <Link to="/Sing in">Sing in</Link>
            <p>🪴 "Name" Garden 🪴</p>
        </ul>
    </nav>
    <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/myGarden" element={<h1>My Garden</h1>}/>
    </Routes>
    </BrowserRouter>
)
};

export default App