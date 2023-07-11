//import s from './MainPage.module.scss';

import { useParams } from "react-router-dom";
import Container from "../Layout/Container/Container";

const MainPage = ({ gender = 'women' }) => {
    const { category } = useParams();

    return (
        <Container>
            <div>MainPage {gender}</div>
            {category && <p>Категория: {category}</p>}
        </Container>
    
)};

export default MainPage;