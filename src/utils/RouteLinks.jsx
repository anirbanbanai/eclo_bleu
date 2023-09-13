
import { BiHome } from 'react-icons/bi';
import { BsChatDots } from 'react-icons/bs';
import { IoCreateOutline } from 'react-icons/io5';
import { RxDashboard } from 'react-icons/rx';

export const RouteLinks=[
    {
       route: "/",
       name: "Home",
       icon: <BiHome/>
    },
    {
       route: "/dashboard",
       name: "Dashboard",
       icon: <RxDashboard/>
    },
    {
       route: "/create",
       name: "Create",
       icon: <IoCreateOutline/>
    },
   
    {
       route: "/chat",
       name: "Chat",
       icon: <BsChatDots/>
    }, 
    // {
    //     route: "/member",
    //     name: "Member",
    //     icon: <BsPeopleFill/>
    //  },
]