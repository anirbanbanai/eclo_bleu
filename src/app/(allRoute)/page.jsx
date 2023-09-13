"use client"

import SubMainpage from "@/components/SubMainPage";
import { useEffect } from "react";

// import SubMainpage from "@/components/SubMainPage";
// import axios from "axios";
import { useState } from "react";

const page = () => {

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [data, setData] = useState()

    // axios.get("http://localhost:5000/all")
    // .then(data=>{
    //     // console.log(data.data);
    //     setData(data.data)
    // })

    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
        fetch("http://localhost:5000/all")
            .then(res => res.json())
            .then(data => {
                setData(data)
            })
    }, [])
    return (
        <div className='m-5   '>
           
            {
            data?.map(m=><SubMainpage key={m._id} main={m}></SubMainpage>)
           }
        </div>
    );
};

export default page;