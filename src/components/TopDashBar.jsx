import React from 'react';

const TopDashBar = () => {
    return (
        <div className='grid lg:grid-cols-3 gap-4 p-3'>
             <div className=' bg-slate-200 flex  justify-between  border p-2 gap-4 rounded-lg'>
                <div className='flex flex-col pb-4'>
                    <p className='text-2xl font-bold'>454566</p>
                    <p>Daily user</p>
                </div>
                <div className='bg-green-300 p-2 flex justify-center items-center rounded-lg'>
                    <span className='text-lg'>98%</span>
                </div>
            </div>
             <div className=' bg-slate-200 flex  justify-between  border p-2 rounded-lg'>
                <div className='flex flex-col pb-4'>
                    <p className='text-2xl font-bold'>454</p>
                    <p>Daily post</p>
                </div>
                <div className='bg-green-300 p-2 flex justify-center items-center rounded-lg'>
                    <span className='text-lg'>58%</span>
                </div>
            </div>
             <div className=' bg-slate-200 flex  justify-between  border p-2 rounded-lg'>
                <div className='flex flex-col pb-4'>
                    <p className='text-2xl font-bold'>4566</p>
                    <p>Daily chat</p>
                </div>
                <div className='bg-green-300 p-2 flex justify-center items-center rounded-lg'>
                    <span className='text-lg'>68%</span>
                </div>
            </div>
        </div>
    );
};

export default TopDashBar;