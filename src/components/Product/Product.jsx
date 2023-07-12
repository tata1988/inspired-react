import { NavLink } from "react-router-dom";
import { API_URL } from "../../../const";
import { ReactComponent as Like } from '../../assets/heart.svg';
import ColorList from "../ColorList/ColorList.jsx";
import s from './Product.module.scss';

const Product = ({ id, title, pic, price, colors }) => {
    return (
        <article className={s.product}>
            <NavLink to={`/product/${id}`} className={s.link}>
                <img src={`${API_URL}${pic}`} className={s.image} />
                <h3 className={s.title}>{title}</h3>
            </NavLink>

            <div className={s.row}>
                <p className={s.price}>руб {price}</p>
                <button className={s.favorite}>
                    <Like/>
                </button>
            </div>
            <ColorList colors={colors}/>
        </article>
    )
}

export default Product;