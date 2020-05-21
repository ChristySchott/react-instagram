import React from 'react';

import Story from './story/Story';
import stories1 from '../../../../assets/stories1.png';
import stories2 from '../../../../assets/stories2.png';
import stories3 from '../../../../assets/stories3.png';
import stories4 from '../../../../assets/stories4.png';
import stories5 from '../../../../assets/stories5.png';

const Stories = () => (
    <div className="stories aux-padding">
        <Story author="anaju" img={stories1} />
        <Story author="maria_si" img={stories2} />
        <Story author="cicerod" img={stories3} />
        <Story author="marrce" img={stories4} />
        <Story author="lorem_i..." img={stories5} />
        <Story author="min" img={stories1} />
        <Story author="maxiw" img={stories3} />
        <Story author="ninguem" img={stories2} />
        <Story author="noenon" img={stories4} />
    </div>
)

export default Stories;