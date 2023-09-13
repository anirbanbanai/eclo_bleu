"use client"

import { AuthContext } from "@/components/authContext";
import axios from "axios";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

// import { AuthContext } from '@/app/components/AuthContext';
// import axios from 'axios';
// import React, { useContext } from 'react';
// import { useForm } from 'react-hook-form';
// import Swal from 'sweetalert2';

const Createe = () => {
    const {user} = useContext(AuthContext)

    const { register, handleSubmit } = useForm();
    const onSubmit = data =>{
        const alldata =  {post : data?.post,email: user?.email}
        console.log(data);

        axios.post("http://localhost:5000/all",alldata)
        .then(res=>{
            // console.log(res.data);
            if(res.data.acknowledged === true){
                
                Swal.fire({
                    position: 'top',
                    icon: 'success',
                    title: 'Post created successfully',
                    showConfirmButton: false,
                    timer: 1500
                  })
            }
        })
        .catch(error=>{
            console.log(error.message);
        })
    }
    return (
        <form onSubmit={handleSubmit(onSubmit)} className='nnn2'>
            <h2 className='text-4xl font-bold text-center'> Create Post</h2>
            <div className='p-10'>
                

                <div className="form-control">
                 
                    <textarea {...register("post", { required: true })} className=" textarea textarea-bordered h-24" placeholder="create a post"></textarea>

                </div>
            </div>
            <button className='btn btn-primary flex  mx-auto'>Post</button>
        </form>
    );
};

export default Createe;