"use client"

import { AuthContext } from "@/components/authContext";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

const Login = () => {
    const router = useRouter();
    const {LoginUser} = useContext(AuthContext)
    const { register, handleSubmit } = useForm();
    const onSubmit = data =>{
        // console.log(data);
        LoginUser(data.email, data.pass)
        // createJWT(data.email)
        .then(data=>{
            router.push("/")
          
            // console.log(data);
            Swal.fire({
                position: 'top',
                icon: 'success',
                title: 'Login sucessfull',
                showConfirmButton: false,
                timer: 1500
              })
        })
    }
    return (
        <div className="">
        <h2 className="text-5xl font-bold text-center">Login Now</h2>
       <form onSubmit={handleSubmit(onSubmit)} className="w-[90%] md:w-2/4 mx-auto nnn3 p-10">
         
          <div className=" w-full ">
               <label className="label">
                   <span className="label-text text-xl font-semibold">Email</span>
                  
               </label>
               <input  {...register("email", { required: true })} type="email" placeholder="Your Email" className="input  w-full " />
           </div>
          <div className="form-control w-full ">
               <label className="label">
                   <span className="label-text text-xl font-semibold">Confirm Password</span>
                  
               </label>
               <input  {...register("pass", { required: true })} type="password" placeholder=" Password" className="input input-bordered w-full " />
           </div>
          

           <div className="flex items-center justify-center mt-4">
    <button className="btn btn-warning">Login</button>
           </div>
          {/* <h3 className="text-green-500 text-center">{success}</h3> */}
       <h3 className="text-center">Already have an accunt? <Link className="text-red-500" href='/register'>Register</Link></h3>
       </form>
   </div>
    );
};

export default Login;