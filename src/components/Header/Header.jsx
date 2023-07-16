import Navigation from "./Navigation/Navigation";
import Top from "./Top/Top";
import s from './Header.module.scss';
import Search from "../Search/Search";

const Header = () => (
    <header className={s.header}>
        <Top />
        <Search />
        <Navigation />
    </header>
)

export default Header;