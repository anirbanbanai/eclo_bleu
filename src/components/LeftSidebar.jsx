"use client"

import { useContext } from "react";
import { AuthContext } from "./authContext";
import Image from "next/image";
import NavLink from "./Navlinks";
import Link from "next/link";
import { RouteLinks } from "@/lib/AllRoute";
// import { RouteLinks } from "@/utils/RouteLinks";

// import  { useContext } from 'react';

// import Image from 'next/image';
// // import { AuthContext } from './AuthContext';
// import Swal from 'sweetalert2';
// import { RouteLinks } from '@/utils/RouteLinks';
// import NavLink from './Navlinks';
// import Link from 'next/link';

const LeftSideBar = () => {

    const {user,LogOut} = useContext(AuthContext)

    const handleLogOut=()=>{
        LogOut()
        Swal.fire({
            position: 'top',
            icon: 'success',
            title: 'Successfully logout',
            showConfirmButton: false,
            timer: 1500
          })
    }
    return (
        <div className='text-black nn gap-4 rounded-lg p-4  h-4/4 sticky left-0 top-0 z-20 flex h-screen flex-col justify-between items-center  pb-5  max-md:hidden '>

            <div className='flex gap-3 items-center'>
            <Image alt='logo' src="/logo.svg" width={55} height={55}></Image>
            <h1 className='text-4xl  font-bold max-lg:hidden'>Bleust</h1>
            </div>

            <div className='pt-10 flex w-full flex-1 flex-col gap-6 px-6  max-lg:items-center'>
 {
    RouteLinks.map(({route, name,icon, exact})=>(
        <NavLink exact={route === '/'} key={route} activeClassName="bg-red-500 px-5 py-1 rounded-xl flex gap-2" className="flex items-center gap-2" href={route}> <h1 className=' text-2xl bg-blue-100 rounded-3xl p-3'>{icon}</h1> <span className='text-2xl max-lg:hidden'>{name}</span> </NavLink>
    ))
 }

            </div>
           {!user ? <Link href="/login">
            <button className='btn btn-warning rounded-3xl'>Login</button>
            </Link> :
            <button onClick={handleLogOut} className='btn bg-red-400 rounded-3xl'>LogOut</button>}
        </div>
    );
};

export default LeftSideBar;