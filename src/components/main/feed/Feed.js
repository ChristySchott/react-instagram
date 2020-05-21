import React from 'react';

import Stories from './stories/Stories';
import Post from './post/Post';
import person1 from '../../../assets/person1.png';
import person2 from '../../../assets/person2.png';
import person3 from '../../../assets/person3.png';

const Feed = () => (
    <div className="feed">
        <Stories />
        <Post name="sense8" img={person1}/>
        <Post name="borderRadius" img={person2}/>
        <Post name="clone_insta" img={person3}/>
    </div>
)

export default Feed;