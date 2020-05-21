import React from 'react';

import Info from './info/Info';
import Content from './content/Content';
import Footer from '../Footer';

const Profile = () => (
    <div className="container profile">
        <Info />
        <Content />
        <Footer />
    </div>
)

export default Profile;