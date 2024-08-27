import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Start from "./pages/Start/Start";


const router = createBrowserRouter([

    {
        path: "/",
        element: <Home/>,
        children: [
            {
                index: true,
                element: <Start/>
            }
        ]

    }


])

export default router