'use client'
import SubPofilePage from '@/components/SubPofilePage';
import { AuthContext } from '@/components/authContext';
import Image from 'next/image';
import React, { useContext, useEffect, useState } from 'react';
import { FiEdit2 } from 'react-icons/fi';

const page = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { user } = useContext(AuthContext);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [data, setData] = useState()
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
        fetch(`https://bleust-server.vercel.app/a?email=${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setData(data)
            })
    }, [])
    // console.log(data);
    return (
        <div>
            <div className='mx-auto flex  justify-center p-5'>
                <div className=''>
                   
                    <Image className='rounded-full' src={user?.photoURL} alt='pic' width={84} height={84} />
                    <h2 className='text-2xl font-semibold'>
                    {user?.displayName}
                    </h2>
                   <div>
                    <span><FiEdit2 className='text-2xl text-left '/></span>
                   <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum quidem non, tempore dolorum mollitia nobis sed natus veritatis perspiciatis animi voluptate incidunt hic facilis atque? Aliquid possimus assumenda, aliquam impedit quisquam quia dolores.</p>
                   </div>
                </div>
            </div>
            <hr className='border-2' />
            <div>
               {
                data?.map(m=> <SubPofilePage key={m._id} m={m}/>)
               }
            </div>
        </div>
    );
};

export default page;