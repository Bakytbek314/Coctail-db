import React from 'react';
import Home from '../Home/Home';
import { Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getPopularCoctail, getpopularIngredient, getLatestDrink, getRandomDrink, } from '../../Toolkit/Slice/CoctailSlice';
import InfoDrink from '../../Components/3_Info-drink/Info-drink';
import InfoIngredient from '../../Components/5_Info-ingredient/Info-ingredient';
import InfoAlphabet from '../../Components/7_Info-alphabet/Info-alphabet';
import Search from '../../Components/8_Search/Search';


const Main = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPopularCoctail());
        dispatch(getpopularIngredient());
        dispatch(getLatestDrink());
        dispatch(getRandomDrink());
    }, []);

    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path="/drink/:idDrink/:title" element={<InfoDrink />} />
            <Route path="/ingredient/:title" element={<InfoIngredient />} />
            <Route path="/alphabet/:drinks" element={<InfoAlphabet />} />
            <Route path="/search/:text" element={<Search />} />
        </Routes>
    )
}

export default Main;
