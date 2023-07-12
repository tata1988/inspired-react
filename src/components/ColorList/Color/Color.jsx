import cn from 'classnames';
import { useEffect, useRef } from 'react';
import s from './Color.module.scss'

const Color = ({color, check}) => {

    const colorRef = useRef(null);
   
   useEffect(() => {
    colorRef.current.style.setProperty('--data-color', color);
   }, [color]);

    return (
        <li className={cn(s.color, check ? s.colorCheck : '')} 
         ref={colorRef} />
    )
}

export default Color;