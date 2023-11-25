import {BrowserRouter, Routes, Route} from "react-router-dom"
import HomePage from "./Home/HomePage";
import Plants from "./PlantsBrowser/Plants"
import Header from "./Header/Header";
import RegisterPage from "./Register/RegisterPage";
import LoginPage from "./Login/LoginPage"

const App = () => {
/* useEffect(() => {
fetch("/api/testMongo")
    .then((response) => response.json())
    .then(console.log)
}, []) */
return(
    <BrowserRouter>
        <Header/>
    <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/myGarden" element={<h1>My Garden</h1>}/>
        <Route path="/plants" element={<Plants/>}/>
        <Route path="/register" element={<RegisterPage/>}/>
        <Route path="/LogIn" element={<LoginPage/>}/>
    </Routes>
    </BrowserRouter>
)
};

export default App