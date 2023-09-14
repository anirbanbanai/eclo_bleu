import BarChart from '@/components/BarChart';
import RecentOrder from '@/components/RecentOrder';
import TopDashBar from '@/components/TopDashBar';
import React from 'react';

const page = () => {
    return (
        <div className='m-9 p-3'>
            <TopDashBar />
            <div className='lg:flex justify-between'>
                <BarChart />
                <RecentOrder />
            </div>
        </div>
    );
};

export default page;