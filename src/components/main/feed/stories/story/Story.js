import React from 'react';

const Story = (props) => (
    <div className="story">
        <div className="story__box-">
            <a href="/">
                <img src={props.img} alt=""/>
            </a>
        </div>
        <div className="story__name">
            <p>{props.author}</p>
        </div>
    </div>
)

export default Story;