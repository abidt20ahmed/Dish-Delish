
import { Alert } from 'flowbite-react';
import React from 'react';
import { FaStar, FaStarHalfAlt } from 'react-icons/fa';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';


const Banner = () => {

    const handleAlert = () => {
        toast('Special Dishes')
    }

    return (
        <div onClick={handleAlert} className='hidden md:block'>

            <div className='mx-7 flex'>

                <Link href="#" className="flex items-center bg-slate-300 rounded-lg shadow flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 mr-5">
                    <LazyLoadImage style={{ height: '100%' }} className="object-cover h-full  md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src="https://img.freepik.com/free-photo/beyti-wrapped-kebab-topped-with-tomato-sauce-served-with-tomato-pepper-yoghurt_140725-545.jpg?w=1380&t=st=1683143909~exp=1683144509~hmac=f43e1a4ea8e546a4a259d599a79db0d833c1cdc57a784d29a22e6d6b3b41c788" alt="" ></LazyLoadImage>

                    <div className="flex flex-col justify-between p-4 leading-normal">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Chicken Parmesan</h5>
                        <p className="mb-3 w1 font-normal text-gray-700 dark:text-gray-400">Indulge in the rich flavors of creamy garlic shrimp pasta, topped with freshly grated parmesan and chopped parsley.</p>
                    </div>
                </Link>
                <Link href="#" className="flex items-center bg-slate-300 rounded-lg shadow flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 mr-5">
                    <LazyLoadImage style={{ height: '100%' }} className="object-cover h-full  md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src="https://images.unsplash.com/photo-1458642849426-cfb724f15ef7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="" ></LazyLoadImage>
                    <div className="flex flex-col justify-between p-4 leading-normal">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Margherita Pizza</h5>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Indulge in the rich flavors of creamy garlic shrimp pasta, topped with freshly grated parmesan and chopped parsley.</p>
                    </div>
                </Link>
                <Link href="#" className="flex items-center bg-slate-300 rounded-lg shadow flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 mr-5">
                    <LazyLoadImage style={{ height: '100%' }} className="object-cover h-full  md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src="https://img.freepik.com/free-photo/spaghetti-black-cup-with-tomatoes-lettuce_1150-23163.jpg?w=1380&t=st=1683144226~exp=1683144826~hmac=ada66acc7139f33c0eb2b94cf5a1a15945b0e3fca78e77d1f1604fbbbeafaf6e" alt="" ></LazyLoadImage>
                    <div className="flex flex-col justify-between p-4 leading-normal">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Spaghetti Carbonara</h5>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Indulge in the rich flavors of creamy garlic shrimp pasta, topped with freshly grated parmesan and chopped parsley.</p>
                    </div>
                </Link>
                <Link href="#" className="flex items-center bg-slate-300 rounded-lg shadow flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 mr-5">
                    <LazyLoadImage style={{ height: '100%' }} className="object-cover h-full  md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src="https://img.freepik.com/premium-photo/pumpkin-soup-with-croutons-wooden-background-copy-space_106885-3556.jpg?w=1380" alt="" ></LazyLoadImage>
                    <div className="flex flex-col justify-between p-4 leading-normal">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Minestrone Soup</h5>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Indulge in the rich flavors of creamy garlic shrimp pasta, topped with freshly grated parmesan and chopped parsley.</p>
                    </div>
                </Link>
            </div>
        </div>

    );
};

export default Banner;






// {/* <Link href="#" className="flex items-center bg-slate-300 rounded-lg shadow flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 mr-5">
//                     <LazyLoadImage style={{ height: '100%' }} className="object-cover h-full  md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src="https://img.freepik.com/free-photo/beyti-wrapped-kebab-topped-with-tomato-sauce-served-with-tomato-pepper-yoghurt_140725-545.jpg?w=1380&t=st=1683143909~exp=1683144509~hmac=f43e1a4ea8e546a4a259d599a79db0d833c1cdc57a784d29a22e6d6b3b41c788" alt="" ></LazyLoadImage>
//                     {/* <img style={{ height: '100%' }} className="object-cover h-full  md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src="https://img.freepik.com/free-photo/beyti-wrapped-kebab-topped-with-tomato-sauce-served-with-tomato-pepper-yoghurt_140725-545.jpg?w=1380&t=st=1683143909~exp=1683144509~hmac=f43e1a4ea8e546a4a259d599a79db0d833c1cdc57a784d29a22e6d6b3b41c788" alt="" /> */}
//                     <div className="flex flex-col justify-between p-4 leading-normal">
//                         <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
//                         <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
//                     </div>
//                 </Link>
//                 <Link href="#" className="flex flex-col items-center bg-slate-300 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 mr-5">
//                     <LazyLoadImage className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src="https://images.unsplash.com/photo-1551024601-bec78aea704b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80" alt="" />
//                     <div className="flex flex-col justify-between p-4 leading-normal">
//                         <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2022</h5>
//                         <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
//                     </div>
//                 </Link>
//                 <Link href="#" className="flex flex-col items-center bg-slate-300 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 mr-5">
//                     <LazyLoadImage className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src="https://images.unsplash.com/photo-1551024601-bec78aea704b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80" alt="" />
//                     <div className="flex flex-col justify-between p-4 leading-normal">
//                         <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2023</h5>
//                         <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
//                     </div>
//                 </Link> */}