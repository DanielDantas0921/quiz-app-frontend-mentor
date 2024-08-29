import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Start from "./pages/Start/Start";
import Html from "./pages/Html/Html";
import Css from "./pages/Css/Css";
import Js from "./pages/Js/Js";
import Accessibility from "./pages/Acessibility/Accessibility";
import HtmlQuestions from "./pages/Html/HtmlQuestions";


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
                element: <Html/>,
                children: [
                    {
                        index: true,
                        element: <HtmlQuestions/>
                    }
                ]
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