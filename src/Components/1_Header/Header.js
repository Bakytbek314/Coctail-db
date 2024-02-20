import React, { useState } from 'react';
import s from "./Header.module.css";
import logo from "../../Assets/logo.png";
import { Link, useNavigate } from 'react-router-dom';

const Header = () => {

    const navigate = useNavigate();
    const [inp, setInp] = useState("");

    const handleSearch = () => {
        navigate(`/search/${inp}`)
    }

    return (
        <>
            <header>
                <div className="container">
                    <div className={s.navbar}>
                        <div className={s.logo}>
                            <Link to="/">
                                <img src={logo} alt="" />
                            </Link>
                        </div>
                        <form onSubmit={handleSearch} className={s.search}>
                            <input value={inp} onChange={(e) => setInp(e.target.value)} type="text" placeholder='Search' />
                        </form>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header;
