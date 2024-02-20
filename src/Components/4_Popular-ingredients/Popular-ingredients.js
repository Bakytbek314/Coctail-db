import React from 'react';
import s from "./Popular-ingredients.module.css";

const PopularIngredients = (props) => {

    const {strIngredient1, onClick} = props;
    
    return (
        <div className={s.content} onClick={onClick}>
            <img src={`https://www.thecocktaildb.com/images/ingredients/${strIngredient1}.png`} alt="" />
            <p>{strIngredient1}</p>
        </div>
    )
}

export default PopularIngredients;
