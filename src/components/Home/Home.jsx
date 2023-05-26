import React, { useContext } from 'react';
import { Outlet } from 'react-router-dom';
import Marquee from 'react-fast-marquee'; import Footer from '../Footer/Footer';
import Banner from '../Banner/Banner';
import NavBar from '../NavBar/NavBar';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import About from './About';
import { AuthContext } from '../../provider/AuthProvider';
import { Carousel, Spinner } from 'flowbite-react';


const Home = () => {

    const { loading } = useContext(AuthContext)


    return (
        <div className=' bg-slate-400'>
            {
                loading && <Spinner></Spinner>
            }


            <Spinner></Spinner>

            <div className='h-[500px] relative'>
                <LazyLoadImage className=' object-cover blur-[2px] brightness-95 filter object-center h-[700px] w-full opacity-90' src="https://img.freepik.com/free-photo/fresh-vegetable-salad-with-grilled-chicken-breast_2829-14105.jpg?w=1380&t=st=1683262915~exp=1683263515~hmac=589e6f3d606386fa0c5a67eb1423ce4fde6aba5df2c1987f26054194ea0fbfab" alt="" />
                {/* <div className='bg-gradient-to-r from-slate-900 to-[rgba(21, 21, 21, 0)] w-full h-[700px] absolute top-0 object-cover'></div> */}
                <h1 className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 text-2xl md:text-6xl font-bold text-amber-500 drop-shadow-2xl'>Transport Your Taste Buds to Italy: Delicious Recipes Await</h1>
            </div>

            <Marquee className='max-w-[80vw] mx-auto'><Banner></Banner> </Marquee>

            <h1 className='text-7xl font-semibold text-center pt-2 pb-5 hidden lg:block text-amber-500 absolute top-[450px] left-1/2 transform -translate-x-1/2 -translate-y-1/2'>Special Recipes</h1>

            <h1 className='text-7xl text-center font-semibold bg-slate-400 mt-0 lg:mt-14 py-10 hidden lg:block text-amber-500'>Our Traditionals</h1>


            <div className="max-w-screen-xl  items-center mx-auto p-4 rounded-full">
                <NavBar></NavBar>
                <Outlet></Outlet>
            </div>
            <h1 className=' text-4xl lg:text-7xl text-center font-semibold text-amber-500'>About Us</h1>
            <About></About>
            <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">

            </div>
            <Footer></Footer>

        </div>
    );
};

export default Home;