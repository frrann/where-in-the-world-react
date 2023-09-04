import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Homepage from "./pages/Homepage";
import Main from "./components/Main";
import Country from "./pages/Country";
import "./styles/globals.scss";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Homepage />,
      children: [
        { index: true, element: <Main /> },
        { path: ":countryName", element: <Country /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
