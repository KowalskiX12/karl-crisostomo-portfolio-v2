import type { RouteObject } from "react-router-dom";

import { Home } from "../containers";
import RootLayout from "../layout/RootLayout";


const routes: RouteObject[] = [
  {
    path: "/",
    element: <RootLayout/>,
    children: [{ path: "", element: <Home /> }],
  },
];

export default routes;
