import React from 'react';
import s from "./Popular-coctail.module.css";

const PopularCoctail = (props) => {
    const {strDrink, strDrinkThumb, onClick} = props;
    return (
        <div className={s.coctail_content} onClick={onClick}>
            <div className={s.coctail_img}>
                <img src={strDrinkThumb} alt="" />
            </div>
            <p>{strDrink}</p>
        </div>
    )
}

export default PopularCoctail;
