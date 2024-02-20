import React, { useState } from 'react';
import s from "./Home.module.css";
import logo from "../../Assets/logo.png";
import List from "../../Components/List/List";
import PopularCoctail from '../../Components/2_Popular-coctail/Popular-coctail';
import PopularIngredients from '../../Components/4_Popular-ingredients/Popular-ingredients';
import Alphabet from '../../Components/6_Alphabet/Alphabet';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { onDescription } from '../../Toolkit/Slice/CoctailSlice';

const Home = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { popularCoctail, popularIngredient, latestDrink, randomIngredient, randomDrink } = useSelector((state) => state.products);


    const handleInfoDrink = (id, title) => {
        navigate(`/drink/${id}/${title}`);
    }
    const handleInfoIngredient = (title, description) => {
        navigate(`/ingredient/${title}`);
        dispatch(onDescription(description));
    }

    const handleSearch = () => {
        navigate(`/search/${inp}`)
    }

    const random = [];
    for(let i = 0; i < 4; i++){
        let randomIndex = Math.floor(Math.random() * randomIngredient.length);
        random.push(randomIngredient[randomIndex]);
    }

    const [inp, setInp] = useState("");
    

    return (
        <section>
            <div className="container">
                <div className={s.theme_content}>
                    <div>
                        <img src="https://www.thecocktaildb.com/images/cocktail_left.png" alt="" />
                    </div>
                    <div className={s.theme_text}>
                        <h1>Welcome to</h1>
                        <img src={logo} alt="" />
                    </div>
                    <div>
                        <img src="https://www.thecocktaildb.com/images/cocktail_right.png" alt="" />
                    </div>
                </div>

                <div className={s.form}>
                    <form onSubmit={handleSearch}>
                        <input value={inp} onChange={(e) => setInp(e.target.value)} type="text" placeholder='Search for a coctail...' />
                        <button type='submit'><i className="fa-solid fa-magnifying-glass"></i></button>
                    </form>
                </div>

                <div className={s.popular_coctails}>
                    <h3>Popular Drinks</h3>
                    <div className={s.popular_coctails_contnent}>
                        <List
                            items={popularCoctail && popularCoctail}
                            renderItems={(elem, i) => (
                                <PopularCoctail
                                    key={i} {...elem}
                                    onClick={() => handleInfoDrink(elem.idDrink, elem.strDrink)}
                                />
                            )}
                        />
                    </div>
                </div>

                <div className={s.popularIngredients}>
                    <h3>Popular Ingredients</h3>
                    <div className={s.popularIngredients_content}>
                        <List
                            items={popularIngredient}
                            renderItems={(elem, i) => {
                                if (i < 4) {
                                    return (
                                        <PopularIngredients
                                            key={i} {...elem}
                                            onClick={() => handleInfoIngredient(elem.strIngredient1, elem.strDescription)}
                                        />
                                    )
                                }
                            }
                            }
                        />
                    </div>
                </div>

                <div className={s.latestDrinks}>
                    <h3>Latest Drinks</h3>
                    <div className={s.latest_content}>
                        <List
                            items={latestDrink}
                            renderItems={(elem, i) => (
                                <PopularCoctail
                                    key={i} {...elem}
                                    onClick={() => handleInfoDrink(elem.idDrink, elem.strDrink)}
                                />
                            )}
                        />
                    </div>
                </div>

                <div className={s.randomIngredients}>
                    <h3>Random Ingredients</h3>
                    <div className={s.randomIngredients_content}>
                        <List
                            items={random}
                            renderItems={(elem, i) => (
                                <PopularIngredients
                                    key={i} {...elem}
                                    onClick={() => handleInfoIngredient(elem.strIngredient1, elem.strDescription)}                                />
                            )}
                        />
                    </div>
                </div>

                <div className={s.randomDrinks}>
                    <h3>Random Drinks</h3>
                    <div className={s.randomDrinks_content}>
                        <List
                            items={randomDrink}
                            renderItems={(elem, i) => (
                                <PopularCoctail
                                    key={i} {...elem}
                                    onClick={() => handleInfoDrink(elem.idDrink, elem.strDrink)}
                                />
                            )}
                        />
                    </div>
                </div>

                <div className={s.alphabet}>
                    <h3>Browse By Name</h3>
                    <div className={s.alphabetContnet}>
                        <Alphabet/>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Home;
