import React, { useEffect } from 'react';
import s from "./Info-ingredient.module.css"
import List from '../List/List';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { getInfoIngredient } from '../../Toolkit/Slice/CoctailSlice';


const InfoIngredient = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { title } = useParams();
    const { infoIngredient, text } = useSelector((state) => state.products);

    useEffect(() => {
        dispatch(getInfoIngredient(title))
    }, []);

    const infoClick = (id, title) => {
        navigate(`/drink/${id}/${title}`);
    }

    return (
        <div className='container'>
            <div className={s.content}>
                <div className={s.ingredient}>
                    <h2>Title</h2>
                    <div className={s.img}>
                        <img src={`https://www.thecocktaildb.com/images/ingredients/${title}.png`} alt="" />
                    </div>
                </div>
                <div className={s.drinks}>
                    <h2>Drinks</h2>
                    <div className={s.images}>
                        <List items={infoIngredient} renderItems={(elem, i) => (
                            <div className={s.images_item} key={i} onClick={() => infoClick(elem.idDrink, elem.strDrink)}>
                                <div className={s.item}>
                                    <img src={elem.strDrinkThumb} alt="" />
                                </div>
                                <p>{elem.strDrink}</p>
                            </div>
                        )} />
                    </div>
                </div>

            </div>
            <div className={s.description}>
                <h2>Description</h2>
                <p className={s.text}>{text}</p>
            </div>
        </div>
    )
}

export default InfoIngredient;
