import React from 'react';

import profile from '../../../assets/profile-huge.png';
import stories1 from '../../../assets/stories1.png';
import stories2 from '../../../assets/stories2.png';
import stories3 from '../../../assets/stories3.png';
import stories4 from '../../../assets/stories4.png';
import { FaUserCheck, FaCaretDown, FaEllipsisH } from 'react-icons/fa';

const Info = () => (
    <div>
        <section className="container info">
            <div className="info-about">
                <div className="info-about__box-img aux-padding">
                    <img src={profile} alt=""/>
                </div>
                <div className="info-about__content">
                    <div className="info-about__content--header">
                        <h3>chrschott</h3>
                        <ul>
                            <li><button className="button-profile">Enviar menssagem</button></li>
                            <li><button className="button-profile user-check "><FaUserCheck size={14} color='rgba(0, 0, 0, .8)'/></button></li>
                            <li><button className="button-profile dropdown"><FaCaretDown size={14} color='rgba(0, 0, 0, .8)'/></button></li>
                            <li><FaEllipsisH size={18} color='rgba(0, 0, 0, .8)'/></li>
                        </ul>
                    </div>
                    <div className="info-about__content--records">
                        <ul>
                            <li><span>6</span>publicações</li>
                            <li><span>137</span>seguidores</li>
                            <li><span>180</span>seguindo</li>
                        </ul>
                    </div>
                    <div className="info-about__content--name">
                        <p className="name">Christy Hauschild Schott</p>
                        <p className="link">
                            <a href="/">Seguido por <strong>freud</strong>, <strong>gandalf</strong>, <strong>jonsnow</strong> e outras 25 pessoas</a>
                        </p>
                    </div>
                </div>
            </div>
            <div className="info-stories aux-padding">
                    <div className="info-stories__story">
                        <img src={stories1} alt="" style={{width:'75px'}}/>
                        <p>javascript g...</p>
                    </div>
                    <div className="info-stories__story">
                        <img src={stories2} alt="" style={{width:'75px'}}/>
                        <p>reactJS</p>
                    </div>
                    <div className="info-stories__story">
                        <img src={stories3} alt="" style={{width:'75px'}}/>
                        <p>meus gatos a...</p>
                    </div>
                    <div className="info-stories__story">
                        <img src={stories4} alt="" style={{width:'75px'}}/>
                        <p>lotr</p>
                    </div>
            </div>
        </section>
    </div>
)

export default Info;