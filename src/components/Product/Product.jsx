import { NavLink } from "react-router-dom";
import { API_URL } from "../../../const";
import { ReactComponent as Like } from '../../assets/heart.svg';
const Product = ({ id, title, pic, price }) => {
    return (
        <article className={s.product}>
            <NavLink to={`product/${id}`} className={s.link}>
                <img src={`${API_URL}${pic}`} className={s.image} />
                <h3 className={s.title}>${title}</h3>
            </NavLink>

            <div className={s.row}>
                <p className={s.price}>руб ${price}</p>
                <button className={s.favorite}>
                    <Like/>
                </button>
            </div>
        </article>
    )
}

export default Product;