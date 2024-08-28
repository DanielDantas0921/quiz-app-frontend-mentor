import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Start from "./pages/Start/Start";
import Html from "./pages/Html/Html";
import Css from "./pages/Css/Css";
import Js from "./pages/Js/Js";
import Accessibility from "./pages/Acessibility/Accessibility";


const router = createBrowserRouter([

    {
        path: "/",
        element: <Home/>,
        children: [
            {
                index: true,
                element: <Start/>
            },
            {
                path: "/HTML",
                element: <Html/>
            },
            {
                path: "/CSS",
                element: <Css/>
            },
            {
                path: "/JavaScript",
                element: <Js/>
            },
            {
                path: "/Accessibility",
                element: <Accessibility/>
            }
        ]

    }


])

export default router