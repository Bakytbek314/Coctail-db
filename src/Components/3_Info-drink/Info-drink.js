import React, { useEffect } from 'react';
import s from "./Info-drink.module.css";
import List from '../List/List';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { getInfoCoctail } from '../../Toolkit/Slice/CoctailSlice';

const InfoDrink = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { idDrink } = useParams();

    const { infoCoctail } = useSelector((state) => state.products);

    useEffect(() => {
        dispatch(getInfoCoctail(idDrink));
    }, []);

    const handleInfoIngredient = (title) => {
        navigate(`/ingredient/${title}`);
    }

    return (
        <div className='container'>
            <List
                items={infoCoctail && infoCoctail}
                renderItems={(elem, i) => (
                    <div className={s.coctail_ingredients} key={i}>
                        <div className={s.title}>
                            <h2>{elem.strDrink}</h2>
                            <h2>Ingredients</h2>
                        </div>
                        <div className={s.images}>
                            <div className={s.drink_img}>
                                <img src={elem.strDrinkThumb} alt="" />
                            </div>
                            <div className={s.ingredients_img}>
                                {elem.strIngredient1 ? (
                                    <div className={s.item} onClick={() => handleInfoIngredient(elem.strIngredient1)}>
                                        <img src={`https://www.thecocktaildb.com/images/ingredients/${elem.strIngredient1}.png`} alt="" />
                                        <p>{elem.strMeasure1} {elem.strIngredient1}</p>
                                    </div>
                                ) : null}
                                {elem.strIngredient2 ? (
                                    <div className={s.item} onClick={() => handleInfoIngredient(elem.strIngredient2)}>
                                        <img src={`https://www.thecocktaildb.com/images/ingredients/${elem.strIngredient2}.png`} alt="" />
                                        <p>{elem.strMeasure2} {elem.strIngredient2}</p>
                                    </div>
                                ) : null}
                                {elem.strIngredient3 ? (
                                    <div className={s.item} onClick={() => handleInfoIngredient(elem.strIngredient3)}>
                                        <img src={`https://www.thecocktaildb.com/images/ingredients/${elem.strIngredient3}.png`} alt="" />
                                        <p>{elem.strMeasure3} {elem.strIngredient3}</p>
                                    </div>
                                ) : null}
                                {elem.strIngredient4 ? (
                                    <div className={s.item} onClick={() => handleInfoIngredient(elem.strIngredient4)}>
                                        <img src={`https://www.thecocktaildb.com/images/ingredients/${elem.strIngredient4}.png`} alt="" />
                                        <p>{elem.strMeasure4} {elem.strIngredient4}</p>
                                    </div>
                                ) : null}
                                {elem.strIngredient5 ? (
                                    <div className={s.item} onClick={() => handleInfoIngredient(elem.strIngredient5)}>
                                        <img src={`https://www.thecocktaildb.com/images/ingredients/${elem.strIngredient5}.png`} alt="" />
                                        <p>{elem.strMeasure5} {elem.strIngredient5}</p>
                                    </div>
                                ) : null}
                                {elem.strIngredient6 ? (
                                    <div className={s.item} onClick={() => handleInfoIngredient(elem.strIngredient6)}>
                                        <img src={`https://www.thecocktaildb.com/images/ingredients/${elem.strIngredient6}.png`} alt="" />
                                        <p>{elem.strMeasure6} {elem.strIngredient6}</p>
                                    </div>
                                ) : null}
                                {elem.strIngredient7 ? (
                                    <div className={s.item} onClick={() => handleInfoIngredient(elem.strIngredient7)}>
                                        <img src={`https://www.thecocktaildb.com/images/ingredients/${elem.strIngredient7}.png`} alt="" />
                                        <p>{elem.strMeasure7} {elem.strIngredient7}</p>
                                    </div>
                                ) : null}
                                {elem.strIngredient8 ? (
                                    <div className={s.item} onClick={() => handleInfoIngredient(elem.strIngredient8)}>
                                        <img src={`https://www.thecocktaildb.com/images/ingredients/${elem.strIngredient8}.png`} alt="" />
                                        <p>{elem.strMeasure8} {elem.strIngredient8}</p>
                                    </div>
                                ) : null}
                                {elem.strIngredient9 ? (
                                    <div className={s.item} onClick={() => handleInfoIngredient(elem.strIngredient9)}>
                                        <img src={`https://www.thecocktaildb.com/images/ingredients/${elem.strIngredient9}.png`} alt="" />
                                        <p>{elem.strMeasure9} {elem.strIngredient9}</p>
                                    </div>
                                ) : null}
                                {elem.strIngredient10 ? (
                                    <div className={s.item} onClick={() => handleInfoIngredient(elem.strIngredient10)}>
                                        <img src={`https://www.thecocktaildb.com/images/ingredients/${elem.strIngredient10}.png`} alt="" />
                                        <p>{elem.strMeasure10} {elem.strIngredient10}</p>
                                    </div>
                                ) : null}
                                {elem.strIngredient11 ? (
                                    <div className={s.item} onClick={() => handleInfoIngredient(elem.strIngredient11)}>
                                        <img src={`https://www.thecocktaildb.com/images/ingredients/${elem.strIngredient11}.png`} alt="" />
                                        <p>{elem.strMeasure11} {elem.strIngredient11}</p>
                                    </div>
                                ) : null}
                                {elem.strIngredient12 ? (
                                    <div className={s.item} onClick={() => handleInfoIngredient(elem.strIngredient12)}>
                                        <img src={`https://www.thecocktaildb.com/images/ingredients/${elem.strIngredient12}.png`} alt="" />
                                        <p>{elem.strMeasure12} {elem.strIngredient12}</p>
                                    </div>
                                ) : null}
                                {elem.strIngredient13 ? (
                                    <div className={s.item} onClick={() => handleInfoIngredient(elem.strIngredient13)}>
                                        <img src={`https://www.thecocktaildb.com/images/ingredients/${elem.strIngredient13}.png`} alt="" />
                                        <p>{elem.strMeasure13} {elem.strIngredient13}</p>
                                    </div>
                                ) : null}
                                {elem.strIngredient14 ? (
                                    <div className={s.item} onClick={() => handleInfoIngredient(elem.strIngredient14)}>
                                        <img src={`https://www.thecocktaildb.com/images/ingredients/${elem.strIngredient14}.png`} alt="" />
                                        <p>{elem.strMeasure14} {elem.strIngredient14}</p>
                                    </div>
                                ) : null}
                                {elem.strIngredient15 ? (
                                    <div className={s.item} onClick={() => handleInfoIngredient(elem.strIngredient15)}>
                                        <img src={`https://www.thecocktaildb.com/images/ingredients/${elem.strIngredient15}.png`} alt="" />
                                        <p>{elem.strMeasure15} {elem.strIngredient15}</p>
                                    </div>
                                ) : null}
                            </div>
                        </div>
                        <div className={s.instruction}>
                            <h2>Instruction</h2>
                            <p>{elem.strInstructions}</p>
                        </div>
                    </div>
                )}
            />
        </div>
    )
}

export default InfoDrink;
