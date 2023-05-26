import React from 'react';
import { FaThumbsUp } from 'react-icons/fa';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Link } from 'react-router-dom';

const ChefCard = ({ chef }) => {
    const { id, name, years_of_experience, num_recipes, likes, picture } = chef;



    const handleClicks = () => {

    }

    return (

        <div onClick={handleClicks()} to='' className="flex flex-col items-center bg-slate-200 border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
            <LazyLoadImage style={{ height: '400px', width: '300px' }} className="object-cover w-ful rounded-t-lg w-[400px] h-[400px] md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src={picture} alt="" ></LazyLoadImage>
            <div className="flex flex-col justify-between p-4 leading-normal ml-10">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-amber-400 dark:text-white">{name}</h5>
                <p className=' text-lg font-bold text-slate-500'>{years_of_experience} Years of experience.</p>
                <p className=' text-lg font-bold text-slate-500'>{num_recipes.length} Special Recipes</p>
                <p className='flex gap-2 mb-5'><FaThumbsUp className=' text-slate-500 text-2xl' /> <span className=' text-lg font-bold text-slate-500'>{likes}</span></p>

                {/* <p className="mb-3 font-normal text-gray-700 dark:text-gray-400"> {bio.slice(0, 250)}... </p> */}

                <button type="button" className="text-white bg-gradient-to-r from-amber-500 via-amber-600 to-amber-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-amber-300 dark:focus:ring-amber-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 w-28"><Link to={`/recipes/${id}`}>Recepes</Link></button>
            </div>
        </div>

    );
};

export default ChefCard;