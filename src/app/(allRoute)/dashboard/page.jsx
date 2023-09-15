import BarChart from '@/components/BarChart';
import RecentOrders from '@/components/RecentOrder';
import RecentOrder from '@/components/RecentOrder';
import TopDashBar from '@/components/TopDashBar';
import React from 'react';

const page = () => {
    return (
        <div className='m-9 p-3'>
            <TopDashBar />
            <div className='grid lg:grid-cols-2'>
           <div>
           {/* <BarChart /> */}
           </div>
               <div>
               <RecentOrders />
               </div>
            </div>
        </div>
    );
};

export default page;