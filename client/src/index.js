import ReactDOM from "react-dom/client";
import App from "./components/App";
import { UserProvider } from "./components/Context/UserContext";


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<UserProvider> <App/> </UserProvider>)