import { NavLink } from "react-router-dom";
import { API_URL } from "../../../const";
import ColorList from "../ColorList/ColorList.jsx";
import s from './Product.module.scss';
import BtnLike from "../BtnLike/BtnLike";

const Product = ({ id, title, pic, price, colors }) => {
    return (
        <article className={s.product}>
            <NavLink to={`/product/${id}`} className={s.link}>
                <img src={`${API_URL}${pic}`} className={s.image} alt={title}/>
                <h3 className={s.title}>{title}</h3>
            </NavLink>

            <div className={s.row}>
                <p className={s.price}>руб {price}</p>

                 <BtnLike id={id}/>

            </div>
            <ColorList colors={colors}/>
        </article>
    )
}

export default Product;