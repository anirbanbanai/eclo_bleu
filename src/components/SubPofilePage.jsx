import axios from 'axios';
import Image from 'next/image';
import React from 'react';
import { BsBookmarks } from 'react-icons/bs';
import { FaShare } from 'react-icons/fa';
import { FcLikePlaceholder } from 'react-icons/fc';
import { FiDelete } from 'react-icons/fi';
import { MdOutlinePublic } from 'react-icons/md';
import { RiDeleteBin5Line } from 'react-icons/ri';
import { VscCommentDiscussion } from 'react-icons/vsc';
import Swal from 'sweetalert2';

const SubPofilePage = ({ m }) => {
    const { email, img, name, post,_id } = m;
    // console.log(_id);
    const handleDelete = () => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
                axios.delete(`https://bleust-server-6ihqyhyba-anirbanbanai.vercel.app/all/${_id}`)
                .then(data=>{
                  // console.log(data);
                  if(data.data.acknowledged === true){
                      Swal.fire(
                          'Deleted!',
                          'Your file has been deleted.',
                          'success'
                        )
                  }
                })
            }
          })
      
    }
    return (
        <div className=' p-2 md:p-3 border border-stone-600  m-4 rounded-xl'>
            <div className='mb-5 flex justify-between items-center gap-2'>

                <div>
                    <Image src={img} alt='svg' className=' rounded-full' width={34} height={34} />
                    <div>
                        <p className='font-bold '>{name}</p>
                        <p className='flex gap-1 items-center'>2 hour ago <span><MdOutlinePublic /></span></p>
                    </div>
                </div>
                <div>
                    <button onClick={handleDelete}><RiDeleteBin5Line className='text-2xl text-red-500' /></button>

                </div>
            </div>
            <div className='bg-white p-2 rounded-xl'>
                <h1>{post}</h1>
            </div>
            <div className='md:flex md:justify-between'>

                <div className='flex  max-md:justify-between items-center mt-5 md:gap-10'>
                    <p className='flex'><FcLikePlaceholder className='text-2xl mr-2' /> <span className='max-sm:hidden'>React</span></p>
                    <p className='flex'><VscCommentDiscussion className='text-2xl mr-2' /> <span className='max-sm:hidden'>Comment</span></p>
                    <p className='flex'><FaShare className='text-2xl mr-2' /> <span className='max-sm:hidden'>Share</span></p>
                    <p className='md:hidden'><BsBookmarks className='text-2xl' /></p>
                </div>

                <div className='max-md:hidden flex items-center'>
                    <p><BsBookmarks className='text-2xl' /></p>
                </div>
            </div>
        </div>
    );
};

export default SubPofilePage;