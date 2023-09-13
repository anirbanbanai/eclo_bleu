import LeftSideBar from '@/components/LeftSidebar';
import Navbar from '@/components/Navbar';
import React from 'react';

const layout = ({children}) => {
    return (
        <div>
            <LeftSideBar/>
            {children}
            <Navbar/>
        </div>
    );
};

export default layout;