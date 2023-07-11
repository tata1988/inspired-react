import { NavLink, useLocation } from 'react-router-dom';
import s from './Gender.module.scss';
import cn from 'classnames';
import { useSelector } from 'react-redux';

const Gender = () => {

    const  {activeGender, genderList, categories } = useSelector(state => state.navigation);

    return (
        <ul className={s.gender}>
            {genderList.map((gender) => (
                <li key={gender} className={s.item}>
                    <NavLink 
                    to={gender} 
                    className={({ isActive }) => 
                    cn(s.link, (isActive || gender === activeGender) && s.linkActive)}
                    >
                        {categories[gender].title}
                    </NavLink>
                </li>
            ))}
        </ul>
    )
}

export default Gender;