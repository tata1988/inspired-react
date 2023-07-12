import { Outlet } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Main from "../components/Layout/Main/Main";

const Root = () => (
    <>
        <Header />
        <Main>
            <Outlet />
        </Main>
    
        <Footer />
    </>
)

export default Root;