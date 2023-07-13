import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchCategory, fetchGender } from "../../features/goodsSlice";
import { setActiveGender } from "../../features/navigationSlice";
import Goods from "../Goods/Goods";
import Banner from "../Banner/Banner";

const MainPage = () => {
    const { gender = 'women', category } = useParams();
    const dispatch = useDispatch();

    const { activeGender, categories, genderList } = useSelector(state => state.navigation);
    const genderData = categories[activeGender];
    const categoryData = genderData?.list.find((item) => item.slug === category);

    useEffect(() => {
        if (gender) {
            dispatch(setActiveGender(gender));
        } else if (genderList[0]) {
            dispatch(setActiveGender(genderList[0]));
            dispatch(fetchGender(genderList[0]));
        }
        
    }, [dispatch, gender, genderList]);
    
    useEffect(() => {
        if (gender && category) {
            dispatch(fetchCategory({ gender, category }));
            return;
        }
        if (gender) {
            dispatch(fetchGender(gender));
            return;
        }
        
    }, [gender, category, dispatch])

    return (
        <>
            {!category && <Banner data={genderData?.banner} />}
           <Goods categoryData={categoryData} />
        </>

    )
};

export default MainPage;