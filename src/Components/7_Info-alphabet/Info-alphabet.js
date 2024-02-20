import React, { useEffect } from 'react';
import s from "./Info-alphabet.module.css";
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { getAlphabet } from '../../Toolkit/Slice/CoctailSlice';
import List from "../List/List";
import Alphabet from '../6_Alphabet/Alphabet';

const InfoAlphabet = () => {

    const { alphabet } = useSelector((state) => state.products);
    const { drinks } = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const infoClick = (id, title) => {
        navigate(`/drink/${id}/${title}`);
    }

    useEffect(() => {
        dispatch(getAlphabet(drinks))
    }, [drinks]);

    return (
        <div className='container'>
            <div className={s.content}>
                {
                    alphabet ? (
                        <List
                            items={alphabet}
                            renderItems={(elem, i) => (
                                <div className={s.cards} key={i} onClick={() => infoClick(elem.idDrink, elem.strDrink)}>
                                    <div className={s.images}>
                                        <img src={elem.strDrinkThumb} alt="" />
                                    </div>
                                    <p>{elem.strDrink}</p>
                                </div>
                            )}
                        />
                    ) : (
                        <h2 className={s.text}>No meals found </h2>
                    )
                }

                <div className={s.alphabet}>
                    <h3>Browse By Name</h3>
                    <div className={s.alphabetContnet}>
                        <Alphabet />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default InfoAlphabet;
