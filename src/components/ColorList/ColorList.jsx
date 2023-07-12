import s from './ColorList.module.scss';
import { useSelector } from 'react-redux';
import Color from './Color/Color';
import { useRef } from 'react';

const ColorList = ({colors}) => {
    const {colorList} = useSelector(state => state.color);

    return (
        <ul className={s.colorList}>
            {colors.map((id, i) => {
                const color = colorList.find(color => color.id === id);
                return <Color key={id} color={color?.code} check={!i} />
            })}
        </ul>
    )
}

export default ColorList;