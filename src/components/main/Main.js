import React from 'react';

import Feed from './feed/Feed';
import Sidebar from './sidebar/Sidebar';

const Main = () => (
    <div className="container main">
        <Feed />
        <Sidebar />
    </div>
)

export default Main;