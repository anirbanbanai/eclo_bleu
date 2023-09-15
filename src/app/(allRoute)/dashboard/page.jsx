import BarChart from '@/components/BarChart';
import MultyTyprChart from '@/components/MultyTyprChart';
import RecentOrders from '@/components/RecentOrder';
import RecentOrder from '@/components/RecentOrder';
import TopDashBar from '@/components/TopDashBar';
import React from 'react';

const page = () => {
    return (
        <div className=''>
            <TopDashBar />
            <div className='grid lg:grid-cols-2'>
           <div>
           <BarChart />
           </div>
               <div>
               <RecentOrders />
               </div>
            </div>
          <div className='mt-10'>
          <MultyTyprChart/>
          </div>
        </div>
    );
};

export default page;