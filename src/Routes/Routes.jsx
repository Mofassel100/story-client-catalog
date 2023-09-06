import { createBrowserRouter } from "react-router-dom";
import Main from "../Share/Main";
import HomePage from "../Page/HomePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <HomePage></HomePage>,
      },
    ],
  },
]);
export default router;
