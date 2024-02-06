import GlobalStyle from "./components/Common.styled";

import { Route, createRoutesFromElements, createBrowserRouter, RouterProvider } from "react-router-dom";

import { Error404, Home, List } from "./pages";
import Layout from "./layout/Layout";

const routes = createRoutesFromElements(
  <Route path="/" element={<Layout />}>
    <Route path="/" element={<Home />} />
    <Route path="/list" element={<List />} />
    <Route path="*" element={<Error404 />} />
  </Route>,
);
const router = createBrowserRouter(routes);

const App = () => (
  <>
    <GlobalStyle />
    <RouterProvider router={router} />
  </>
);

export default App;
