"use client"

import SubMainpage from "@/components/SubMainPage";
import { AuthContext } from "@/components/authContext";
import { useContext, useEffect } from "react";

// import SubMainpage from "@/components/SubMainPage";
// import axios from "axios";
import { useState } from "react";

const page = () => {

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const {user} = useContext(AuthContext)

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [data, setData] = useState()


    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
        fetch("https://bleust-server-886sy7kxr-anirbanbanai.vercel.app/all")
            .then(res => res.json())
            .then(data => {
                setData(data)
            })
    }, [])
    console.log(data);
    return (
        <div className='m-5   '>
           
            {
            data?.map(m=><SubMainpage key={m._id} main={m}></SubMainpage>)
           }
        </div>
    );
};

export default page;