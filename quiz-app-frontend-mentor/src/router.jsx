import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Start from "./pages/Start/Start";
import Html from "./pages/Html/Html";
import Css from "./pages/Css/Css";
import Js from "./pages/Js/Js";
import Accessibility from "./pages/Acessibility/Accessibility";
import HtmlQuestions from "./pages/Html/HtmlQuestions";
import HtmlResults from "./pages/Html/HmlResults";
import CssQuestions from "./pages/Css/CssQuestions";
import CssResults from "./pages/Css/CssResults";
import JsQuestions from "./pages/Js/JsQuestions";
import JsResults from "./pages/Js/JsResults";
import AccessibilityQuestions from "./pages/Acessibility/AccessibilityQuestions";
import AccessibilityResults from "./pages/Acessibility/AccessibilityResults";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      {
        index: true,
        element: <Start />,
      },
      {
        path: "/HTML",
        element: <Html />,
        children: [
          {
            index: true,
            element: <HtmlQuestions />,
          },
          {
            path: "/HTML/Results",
            element: <HtmlResults />,
          },
        ],
      },
      {
        path: "/CSS",
        element: <Css />,
        children: [
          {
            index: true,
            element: <CssQuestions />,
          },
          {
            path: "/CSS/Results",
            element: <CssResults />,
          },
        ],
      },
      {
        path: "/JavaScript",
        element: <Js />,
        children: [
          {
            index: true,
            element: <JsQuestions />,
          },
          {
            path: "/JavaScript/Results",
            element: <JsResults />,
          },
        ],
      },
      {
        path: "/Accessibility",
        element: <Accessibility />,
        children: [
            {
                index: true,
                element: <AccessibilityQuestions />
            },
            {
                path: "/Accessibility/Results",
                element: <AccessibilityResults />
            }
        ],
      },
    ],
  },
]);

export default router;
