import React from 'react';
import { Link } from 'react-router-dom';

import { GoHome } from 'react-icons/go';
import { AiOutlineHeart, AiOutlineCompass } from 'react-icons/ai';
import { FiSend, FiUser } from "react-icons/fi";
import instagram from '../assets/logo.png';
import profile from '../assets/profile-small.png'


const Header = () => (
    <header className="header">
        <div className="container container-header">
            <div className="logo-box">
                <Link to="/">
                    <img src={instagram} alt="" style={{width: '130px'}}/>
                </Link>
            </div>

            <div className="ui icon input">
                <i className="search icon"></i>
                <input type="text" placeholder="Pesquisar" className="input-header" />
            </div>

            <nav className="nav">
                <ul>
                    <li><a href="/"><GoHome size={26} /></a></li>
                    <li><a href="/"><FiSend size={26} /></a></li>
                    <li><a href="/"><AiOutlineCompass size={26} /></a></li>
                    <li><a href="/"><AiOutlineHeart size={26} /></a></li>
                    <li><Link to="/profile"><img src={profile} alt="Person" /></Link></li>
                </ul>
            </nav>
        </div>
    </header>
)

export default Header