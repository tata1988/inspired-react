import Container from "../../Layout/Container/Container";
import s from './Top.module.scss';
import cn from 'classnames';
import logo from '/src/assets/logo.svg';
import { NavLink } from "react-router-dom";
import { ReactComponent as SearchSVG } from '../../../assets/search.svg';
import { ReactComponent as CartSVG } from '../../../assets/cart.svg';
import BtnLike from "../../BtnLike/BtnLike";
import { useSelector, useDispatch } from "react-redux";
import { toggleSearch } from "../../../features/searchSlice";

const Top = () => {

    const { countItems } = useSelector((state) => state.cart);
    const dispatch = useDispatch();

    const handleOpenSearch = () => {
        dispatch(toggleSearch());
    }

    return (
        <div className={s.top}>
            <Container className={s.topContainer}>
                <a href="tel:89304902620" className={cn(s.topLink, s.topPhone)}>89304902620</a>
                <NavLink to="/" className={s.topLogo}>
                    <img src={logo} alt="logo" />
                </NavLink>
                <div className={s.topNavigation}>
                    <ul className={s.topNavList}>
                        <li className={s.topNavItem}>
                            <button onClick={handleOpenSearch} className={s.topLink}>
                                <SearchSVG />
                            </button>
                        </li>
                        <li className={s.topNavItem}>
                            <NavLink to={'/cart'} className={s.topLink}>
                                <CartSVG />
                                <span className={s.topLinkCount}>{countItems}</span>
                            </NavLink>
                        </li>
                        <li className={s.topNavItem}>
                            <NavLink to={'/favorite'} className={cn(s.topLink, s.like)}>
                                <BtnLike />
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </Container>
        </div>
    )
}

export default Top;