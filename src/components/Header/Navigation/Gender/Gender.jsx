import { NavLink } from 'react-router-dom';
import s from './Gender.module.scss';
import cn from 'classnames';
const list = [
    {link: 'women', title: 'Женщины'},
    {link: 'men', title: 'Мужчины'},
]

const Gender = () => {

    return (
        <ul className={s.gender}>
            {list.map((item) => (
                <li key={item.link} className={s.item}>
                    <NavLink 
                    to={item.link} 
                    className={({ isActive }) => cn(s.link, isActive && s.linkActive)}
                    >
                        {item.title}
                    </NavLink>
                </li>
            ))}
        </ul>
    )
}

export default Gender;