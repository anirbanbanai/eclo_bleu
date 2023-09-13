import LeftSideBar from '@/components/LeftSidebar';
import Navbar from '@/components/Navbar';
import React from 'react';

const layout = ({children}) => {
    return (
        <div>
        <Navbar/>
       <div className='grid md:grid-cols-5'>
          <LeftSideBar />
         <div className='col-span-4 max-md:pt-20'>
         {children}
         </div>
      </div>
    
     </div>
    );
};

export default layout;