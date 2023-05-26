import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements
} from "react-router-dom";
import Registration from "./Pages/Registration";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Registration />} ></Route>
  )
);

function App() {

  return (
    <>
     <RouterProvider router={router} />
    </>
 
  )
}

export default App
