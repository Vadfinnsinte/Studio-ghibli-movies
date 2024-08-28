import { createHashRouter } from "react-router-dom";
import App from "../App";
import Favorites from "../components/Favorites";
import Root from "./Root";



const router = createHashRouter([
    {
        path: "/",
        element: <Root/>,
        children: [
            {
                path: "/favorites",
                element: <Favorites /> 
            
            },
            {
                path: "/",
                element: <App/>
            }
        ]
    }

])

export {router}