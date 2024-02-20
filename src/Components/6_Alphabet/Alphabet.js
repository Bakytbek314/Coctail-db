import React from 'react';
import s from "./Alphabet.module.css";
import { useNavigate } from 'react-router-dom';
import List from '../List/List';

const Alphabet = () => {

    const alphabet = [
        "A",
        "B",
        "C",
        "D",
        "E",
        "F",
        "G",
        "H",
        "I",
        "J",
        "K",
        "L",
        "M",
        "N",
        "O",
        "P",
        "Q",
        "R",
        "S",
        "T",
        "U",
        "V",
        "W",
        "X",
        "Y",
        "Z",
    ];
    console.log('alphabet>>.', alphabet);

    const navigate = useNavigate();
    const infoClick = (title) => {
        navigate(`/alphabet/${title.toLowerCase()}`);
    }

    return (
        <div className={s.content}>
            <List
                items={alphabet && alphabet}
                renderItems={(elem, i) => (
                    <>
                        <h2 onClick={() => infoClick(elem)}>{elem}</h2>
                        <span>/</span>
                    </>
                )}
            />
        </div>
    )
}

export default Alphabet;
