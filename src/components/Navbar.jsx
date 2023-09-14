"use client"
import Image from "next/image";
import NavLink from "./Navlinks";
import Link from "next/link";
import { NavRouteLink, RouteLinks } from "@/lib/AllRoute";
// import { RouteLinks } from "@/utils/RouteLinks";
import { CgMenuRound } from 'react-icons/cg';
import { FiMenu } from 'react-icons/fi';
import { useContext } from "react";
import { AuthContext } from "./authContext";
import Swal from "sweetalert2";
import { BsChatDots } from "react-icons/bs";
import { BiLogInCircle } from "react-icons/bi";
import { FcRegisteredTrademark } from "react-icons/fc";
import { FaUserClock } from "react-icons/fa";
import { RiLogoutCircleLine } from "react-icons/ri";
import { PiSketchLogo } from "react-icons/pi";


const Navbar = () => {
    const {user,LogOut} = useContext(AuthContext)
    console.log(user);
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
        <div className='fixed top-0 z-10 w-full  bg-glassmorphism  backdrop-blur-lg xs:px-7 md:hidden nnn'>
            <div className='flex justify-between items-center p-3'>
                {/* <Image alt='logo' src="/logo.svg" width={55} height={55}></Image> */}
                <PiSketchLogo className="text-6xl bg-purple-700 p-1 rounded-3xl  text-white "/>
                {
                    NavRouteLink.map(({ route, icon, exact }) => (
                        <NavLink activeClassName="bg-red-500  p-1 rounded-3xl" href={route} exact={route === "/"} key={route}><h1 className='text-2xl bg-blue-100 rounded-3xl p-3'>{icon}</h1></NavLink>
                    ))
                }




                <div>
                    <div className="dropdown dropdown-end">
                        <label tabIndex={0} className=" ">
                       {user ? <Image className="rounded-full" src={user?.photoURL} alt="image" width={44} height={34}/> : <FiMenu className="text-3xl"/>}
                        </label>
                        <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-36">
                            
                            <li>
                            <Link href='/chat'>
                            <h1 className='text-3xl '><BsChatDots/></h1>
                            </Link>
                            </li>
                            <li>
                               <Link href="/profile">
                               <span><FaUserClock className="text-3xl"/></span>
                               </Link>
                            </li>
                            <li>
                                {!user ? <Link href="/login">
                                    <span><BiLogInCircle className="text-3xl"/></span>
                                </Link> :
                                    <button onClick={handleLogOut} className='text-3xl'>
                                        <RiLogoutCircleLine/></button>}
                            </li>
                            <li><Link href="/register">
                                <span>
                                    <FcRegisteredTrademark className="text-3xl"/>
                                </span>
                            </Link></li>
                        </ul>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Navbar;