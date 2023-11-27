import {BrowserRouter, Routes, Route} from "react-router-dom"
import HomePage from "./Home/HomePage";
import PlantsBrowser from "./PlantsBrowser/PlantsBrowser"
import Header from "./Header/Header";
import RegisterPage from "./Register/RegisterPage";
import LoginPage from "./Login/LoginPage"
import MyGarden from "./MyGarden/MyGarden";

const App = () => {
return(
    <BrowserRouter>
        <Header/>
    <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/myGarden" element={<MyGarden/>}/>
        <Route path="/plants" element={<PlantsBrowser/>}/>
        <Route path="/register" element={<RegisterPage/>}/>
        <Route path="/LogIn" element={<LoginPage/>}/>
    </Routes>
    </BrowserRouter>
)
};

export default App