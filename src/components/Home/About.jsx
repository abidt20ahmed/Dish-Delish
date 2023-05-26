import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const About = () => {
    return (
        <div className="grid grid-cols lg:grid-cols-2 justify-center items-center  gap-5 ml-0 lg:ml-6 my-28">
            <div className='w-full flex justify-center'>
                <LazyLoadImage className='w-1/2 h-96 object-cover object-center rounded-md border-8 border-amber-500 ' src='https://img.freepik.com/free-photo/multiethnic-male-cooks-standing-restaurant-professional-kitchen-with-arms-crossed-while-preparing-ingredients-dish-culinary-experts-wearing-chef-hats-while-standing-near-cooking-station_482257-43346.jpg?w=1380&t=st=1683304081~exp=1683304681~hmac=dc2fc7ef16f8b85b5dcd0b073f31076a677d127052cfb33d7602f28ed1e27c52' alt="" />
            </div>
            <div className=' w-2/3 bg-slate-400 border border-slate-200 bg-opacity-20 p-8 rounded-xl mx-auto lg:mx-0 '>
                <h1 className=" text-4xl font-bold tracking-tight text-amber-500 dark:text-white mb-2">About Us</h1>
                <p className=' text-xl font-bold text-slate-600 mb-2'>At Dish Delish, we believe in the artistry of food. Our expert chefs and bakers use their skills and knowledge to create visually stunning and delicious products. We prioritize sourcing high-quality ingredients from ethical and sustainable suppliers, ensuring that our dishes are not only healthier but also taste better. We're committed to reducing our environmental impact through waste reduction and carbon footprint minimization. And, we pride ourselves on exceptional customer service, creating a welcoming and inclusive atmosphere for all customers.</p>
                <p className=' text-lg font-bold text-slate-600 mb-2'>ForbBetter experience. <span className='font-bold text-amber-600'>Dish Delish</span></p>

            </div>

        </div>
    );
};

export default About;