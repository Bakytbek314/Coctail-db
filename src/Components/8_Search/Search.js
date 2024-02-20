import React, { useEffect } from "react";
import s from "./Search.module.css";
import List from "../List/List";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getSearch } from "../../Toolkit/Slice/CoctailSlice";

const Search = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {text} = useParams();
    const {search} = useSelector((state) => state.products);
    const infoClick = (id, title) => {
        navigate(`/drink/${id}/${title}`);
    }

    useEffect(() => {
        dispatch(getSearch(text))
    }, [text]);

    const handleInfoDrink = (id, title) => {
        navigate(`/drink/${id}/${title}`);
    }


    return (
        <div className="container">
            <div className={s.content}>
                {
                    search ? (
                        <List
                            items={search}
                            renderItems={(elem, i) => (
                                <div className={s.drink} onClick={() => handleInfoDrink(elem.idDrink, elem.strDrink)}>
                                    <div className={s.images}>
                                        <img src={elem.strDrinkThumb} alt="" />
                                    </div>
                                    <p>{elem.strDrink}</p>
                                </div>
                            )}
                        />
                    ) : (
                        <h2 className={s.content}>No found</h2>
                    )
                }
            </div>
        </div>
    )
}

export default Search;