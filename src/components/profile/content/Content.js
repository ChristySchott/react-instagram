import React from 'react';

import gallery from '../../../assets/gallery.png';
import { BsGrid3X3 } from 'react-icons/bs';
import { RiMapPinUserLine } from 'react-icons/ri';

const Content = () => (
    <div className="container content">
        <div className="content__header">
            <div className="content__header--menu selected">
                <BsGrid3X3 size={11} className="icon" />
                <p>Publicações</p>
            </div>
            <div className="content__header--menu">
                <RiMapPinUserLine size={16} className="icon" />
                <p>Marcados</p>
            </div>
        </div>
        <div className="content__gallery">
            <div className="content__gallery--box">
                <img src={gallery} alt="" style={{width:'280px'}}/>
            </div>
            <div className="content__gallery--box">
                <img src={gallery} alt="" style={{width:'280px'}}/>
            </div>
            <div className="content__gallery--box">
                <img src={gallery} alt="" style={{width:'280px'}}/>
            </div>
            <div className="content__gallery--box">
                <img src={gallery} alt="" style={{width:'280px'}}/>
            </div>
            <div className="content__gallery--box">
                <img src={gallery} alt="" style={{width:'280px'}}/>
            </div>
            <div className="content__gallery--box">
                <img src={gallery} alt="" style={{width:'280px'}}/>
            </div>
        </div>
       
    </div>
)

export default Content;