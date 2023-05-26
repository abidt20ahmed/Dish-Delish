import React, { useState } from 'react';
import { FaStar, FaStarHalfAlt } from 'react-icons/fa';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { toast } from 'react-toastify';

const RecipesCard = ({ recipeCards }) => {
    const { image, name, method, ingredients, rating } = recipeCards;

    const [favorite, setFavorite] = useState(false);
    const handleClick = () => {
        setFavorite(!favorite)
        toast('The recipe is your favorite')

    }

    return (
        <div to='' className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-4xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
            <LazyLoadImage style={{ height: '400px', width: '300px' }} className="object-cover  md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src={image} alt=""></LazyLoadImage>
            <div className="flex flex-col justify-between p-4 leading-normal ml-10">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-amber-500 dark:text-white">{name}</h5>

                <div className='flex gap-2 mb-2'>
                    <p className=' text-md font-bold text-slate-500'>Ingredients: </p>

                    <ul className='text-xs mt-1 font-bold'>
                        <li className=' text-slate-500'>

                            {ingredients.map(ingredient => ingredient)}
                        </li>

                    </ul>
                </div>
                <p className=' text-sm mb-2 text-slate-500 font-semibold'> <span className=' text-md font-bold text-slate-500'>Cooking Method:</span> {method}</p>
                <p className='flex gap-2 mb-5 text-amber-500'><span className=' text-lg font-bold text-slate-500'>{rating}</span> <FaStar className='mt-1' /><FaStar className='mt-1' /><FaStarHalfAlt className='mt-1' /> </p>
                <button onClick={handleClick} disabled={favorite} type="button" className="text-white bg-gradient-to-r from-amber-500 via-amber-600 to-amber-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-amber-300 dark:focus:ring-amber-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 w-28">Favorite</button>



            </div>
        </div>
    );
};

export default RecipesCard;