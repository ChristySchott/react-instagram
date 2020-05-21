import React from 'react';

const Sugestion = (props) => (
    <div className="sugestion">
        <div className="sugestion__box-img">
            <a href="/">
                <img src={props.img} alt=""/>
            </a>
        </div>
        <div className="sugestion__people">
            <div className="sugestion__people--info">
                <p className="title">{props.name}</p>
                <p className="follow-you">Segue você</p>
            </div>
        </div>
            <div className="sugestion__people--follow">
                <p><a href="/">Seguir</a></p>
            </div>
    </div>
)

export default Sugestion;