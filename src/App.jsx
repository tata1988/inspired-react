import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import ErrorPage from "./components/ErrorPage/ErrorPage";
import Header from "./components/Header/Header";
import MainPage from "./components/MainPage/MainPage";
import Root from "./routes/Root";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<Root/>}>
            <Route index element={<MainPage />} />
            <Route path="women" element={<MainPage gender='women'/>} />
            <Route path="men" element={<MainPage gender='men' />} />
            <Route path="women/:category" element={<MainPage gender='women'/>} />
            <Route path="men/:category" element={<MainPage gender='men'/>} />
            <Route path="*" element={<ErrorPage />} />
        </Route>
    )
)

const App = () => 
<RouterProvider router={router}>

</RouterProvider>

export default App;