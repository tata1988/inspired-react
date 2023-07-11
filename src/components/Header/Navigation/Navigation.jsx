import Container from "../../Layout/Container/Container";
import Category from "./Category/Category";
import Gender from "./Gender/Gender";

const Navigation = ({list}) => {

    return (
       <nav>
        <Container>
            <Gender />
            <Category list={list}/>
        </Container>
       </nav>
    )
}

export default Navigation;