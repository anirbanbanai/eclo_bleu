// import { FcLikePlaceholder } from "@react-icons/fc";

import { FcLikePlaceholder } from 'react-icons/fc';
import { VscCommentDiscussion } from 'react-icons/vsc';
import { FaShare } from 'react-icons/fa';
import { MdOutlinePublic } from 'react-icons/md';
import Image from 'next/image';
import { BsBookmarks } from 'react-icons/bs';
import { RiDeleteBin5Line } from 'react-icons/ri';
import { useContext } from 'react';
import { AuthContext } from './authContext';

const SubMainpage = ({ main }) => {
    const { user } = useContext(AuthContext)
    console.log(main);
    const { post, email, img, name } = main
    return (
        <div className=' p-2 md:p-3 border border-stone-600  m-4 rounded-xl'>
            <div className='mb-5 flex items-center gap-2'>

                <Image src={img} alt='svg' className=' rounded-full' width={34} height={34} />
                <div>
                    <p className='font-bold '>{name}</p>
                    <p className='flex gap-1 items-center'>2 hour ago <span><MdOutlinePublic /></span></p>
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

export default SubMainpage;