import Container from "../../Layout/Container/Container";
import Category from "./Category/Category";
import Gender from "./Gender/Gender";

const Navigation = () => (
       <nav>
        <Container>
            <Gender />
            <Category />
        </Container>
       </nav>
    )


export default Navigation;