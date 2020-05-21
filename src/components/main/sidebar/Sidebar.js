import React from 'react';
import { Link } from 'react-router-dom';

import Sugestion from './sugestion/Sugestion';
import Footer from '../../Footer';

import person1 from '../../../assets/person1.png';
import person2 from '../../../assets/person2.png';
import person3 from '../../../assets/person3.png';
import person4 from '../../../assets/person4.png';
import profile from '../../../assets/profile-medium.png';

const Sidebar = () => (
    <sidebar className="sidebar aux-padding">
        <div className="sidebar__header">
            <div className="sidebar__header--box-img">
               <Link to="/profile">
                    <img src={profile} alt=""/>
               </Link>
            </div>
            <div className="sidebar__header--info">
                <p className="title">chrschott</p>
                <p className="name">Christy Hauschild Schott</p>
            </div>
        </div>

        <div className="sidebar__main">
            <div className="sidebar__main--title">
                <p className="title">Sugestões para você</p>
                <a href="/">Ver tudo</a>
            </div>
            <div className="sidebar__main--sugestions">
                <Sugestion name="luigi" img={person1} />
                <Sugestion name="mario" img={person2} />
                <Sugestion name="davinci" img={person3} />
                <Sugestion name="pink_floyd" img={person4} />
            </div>
        </div>

        <Footer />
    </sidebar>
)

export default Sidebar;