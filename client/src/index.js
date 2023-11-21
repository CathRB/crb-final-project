import ReactDOM from "react-dom/client";
import App from "./components/App";
import { UserProvider } from "./components/Context/UserContext";
import { GardenProvider } from "./components/Context/GardenContext";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<UserProvider> <GardenProvider> <App/> </GardenProvider> </UserProvider>)