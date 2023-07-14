import { useDispatch, useSelector } from 'react-redux';
import { ReactComponent as LikeSVG } from '../../assets/heart.svg';
import s from './BtnLike.module.scss';
import { addToFavorite, removeToFavorite } from '../../features/favoritesSlice';
import cn from 'classnames';

const BtnLike = ({id}) => {

    const dispatch = useDispatch();
    const isFavorite = useSelector(state => state.favorites.includes(id));

    const handleToggleFavorite = () => {
        if (isFavorite) {
            dispatch(removeToFavorite({ id }));
        } else {
            dispatch(addToFavorite({ id }));
        }
    }

    return (
        <button className={isFavorite ? cn(s.like, s.active) : s.like} aria-label='Добавить в избранное' type='button' onClick={handleToggleFavorite}>
            <LikeSVG />
        </button>
    )
}
    
export default BtnLike;