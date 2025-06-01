import { RouterProvider } from "react-router-dom";
import "./App.css";
import { CreateAppRouter } from "./lib/routing";

const router = CreateAppRouter();
function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
