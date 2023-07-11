import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import ErrorPage from "./components/ErrorPage/ErrorPage";
import Header from "./components/Header/Header";
import MainPage from "./components/MainPage/MainPage";
import { fetchColors } from "./features/colorSlice";
import { fetchNavigation } from "./features/navigationSlice";
import Root from "./routes/Root";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<Root/>}>
            <Route index element={<MainPage />} />
            <Route path="women" element={<MainPage gender='women'/>} />
            <Route path="men" element={<MainPage gender='men' />} />
            <Route path="kids" element={<MainPage gender='kids' />} />
            <Route path="women/:category" element={<MainPage gender='women'/>} />
            <Route path="men/:category" element={<MainPage gender='men'/>} />
            <Route path="kids/:category" element={<MainPage gender='kids'/>} />
            <Route path="*" element={<ErrorPage />} />
        </Route>
    )
)

const App = () => {

    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(fetchNavigation());
        dispatch(fetchColors());
    }, [dispatch]);

    return <RouterProvider router={router}></RouterProvider>
}


export default App;