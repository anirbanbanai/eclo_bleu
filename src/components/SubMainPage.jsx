// import { FcLikePlaceholder } from "@react-icons/fc";

import { FcLikePlaceholder } from 'react-icons/fc';
import { VscCommentDiscussion } from 'react-icons/vsc';
import { FaShare } from 'react-icons/fa';
import Image from 'next/image';
import { BsBookmarks } from 'react-icons/bs';

const SubMainpage = ({ main }) => {
    const { post, email } = main
    return (
        <div className=' p-3 border border-stone-600  m-4 rounded-xl'>
            <div className='mb-5 flex gap-2'>

                <Image src="/next.svg" alt='svg' className='bg-red-500 rounded-full' width={34} height={34} />
                <div>
                    <p className='font-bold '>{email}</p>
                    <p>time date</p>
                </div>
            </div>
            <div className='bg-white p-2 rounded-xl'>
                <h1>{post}</h1>
            </div>
            <div className='md:flex md:justify-between'>

                <div className='flex  max-md:justify-between items-center mt-5 md:gap-10'>
                    <p className='flex'><FcLikePlaceholder className='text-2xl mr-2' /> <span>React</span></p>
                    <p className='flex'><VscCommentDiscussion className='text-2xl mr-2' /> <span>Comment</span></p>
                    <p className='flex'><FaShare className='text-2xl mr-2' /> <span>Share</span></p>
                </div>

                <div className='max-md:hidden flex items-center'>
                    <p><BsBookmarks className='text-2xl' /></p>
                </div>
            </div>
        </div>
    );
};

export default SubMainpage;