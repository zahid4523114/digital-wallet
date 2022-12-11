import { createBrowserRouter } from "react-router-dom";
import AskedQuestions from "../Components/AskedQuestions/AskedQuestions";

import Home from "../Components/Home/Home";
import LogIn from "../Components/LogIn/LogIn";
import SignUp from "../Components/SignUp/SignUp";
import Main from "../Layout/Main";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/home",
        element: <Home></Home>,
      },
      {
        path: "/logIn",
        element: <LogIn></LogIn>,
      },
      {
        path: "/signUp",
        element: <SignUp></SignUp>,
      },
      {
        path: "/askedQuestions",
        element: <AskedQuestions></AskedQuestions>,
      },
    ],
  },
]);
