import { RouterProvider } from "react-router-dom";
import router from "./router";
import "../src/styles/colors.css";
import "../src/styles/globals.css";
import "../src/styles/typograph.css";




function App() {

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
