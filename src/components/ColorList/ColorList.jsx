import s from './ColorList.module.scss';
import { useSelector } from 'react-redux';
import Color from './Color/Color';
import { useRef } from 'react';
import ColorLabel from './ColorLabel/ColorLabel';

const ColorList = ({ colors, selectedColor, handleColorChange}) => {
    const { colorList } = useSelector(state => state.color);

    return handleColorChange ? (
        <div className={s.colorList}>
            {colors?.map((id, i) => {
                const color = colorList.find(color => color.id === id);
                return <ColorLabel
                 key={id} 
                 color={color} 
                 check={!i} 
                 selectedColor={selectedColor}
                 handleColorChange={handleColorChange}/>
            })}
        </div>) : (

        <ul className={s.colorList}>
            {colors.map((id, i) => {
                const color = colorList.find(color => color.id === id);
                return <Color key={id} color={color?.code} check={!i} />
            })}
        </ul>
    )
}

export default ColorList;