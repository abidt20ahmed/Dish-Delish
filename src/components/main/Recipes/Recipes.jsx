import React, { useEffect, useState } from 'react';
import { FaThumbsUp } from 'react-icons/fa';
import { Link, useLoaderData, useParams } from 'react-router-dom';
import NavBar from '../../NavBar/NavBar';
import './Recipes.css'
import RecipesCard from '../../../RecipesCard/RecipesCard';
import { Footer } from 'flowbite-react';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const Recipes = () => {
    const chef = useLoaderData();
    const { num_recipes } = chef;
    
    const [recipes, setRecipes] = useState([])
    const [chefRecipes, setChefRecipes] = useState([])

    
    useEffect(() => {
        fetch('https://dish-delish-gamma.vercel.app/recipes')
        .then(res => res.json())
        .then(data => setRecipes(data))
        .catch(error => console.log(error))
    }, [])
    


    const triRecipe = recipes.filter(recipe => num_recipes.includes(recipe.id) )

    
    
    return (
        <>
            <div className=' flex justify-center bg-slate-200 recipe-bg'>
        
        
        <NavBar></NavBar>
        
        <div className="grid grid-cols lg:grid-cols-2 justify-center items-center  gap-5 ml-0 lg:ml-6 my-28 mt-40">
        <div className='w-full flex justify-center'>
                        <LazyLoadImage className='w-1/2 h-96 object-cover object-center rounded-md border-8 border-amber-500 ' src={chef.picture} alt="" />
        </div>
        <div className=' w-2/3 bg-slate-300 bg-opacity-20 p-8 rounded-xl mx-auto lg:mx-0 '>
        <h5 className=" text-xl font-bold tracking-tight text-amber-500 dark:text-white mb-2">{chef.name}</h5>
        <p className=' text-md font-bold text-slate-200 mb-2'>Chef John Smith has over 10 years of experience in the culinary industry, specializing in Italian cuisine. He has worked in various Michelin-starred restaurants across Europe and has won several awards for his innovative dishes. Chef John believes in using only the freshest and locally sourced ingredients to create delicious and healthy meals for his customers. When hes not in the kitchen, you can find him traveling the world, discovering new flavors and ingredients to incorporate into his cooking.</p>
        <p className=' text-lg font-bold text-slate-200 mb-2'>{chef.years_of_experience} Years of experience.</p>
        <p className=' text-lg font-bold text-slate-200 mb-2'>Special Recipes</p>
        <p className='flex gap-2 mb-5'> <FaThumbsUp className=' text-amber-500 text-2xl' /> <span className=' text-lg font-bold text-slate-200'>{chef.likes}</span></p>
        </div>
        
        </div>
        
        </div>
            <div className='flex flex-col items-center gap-10 mt-10 mb-40'>

        {
            triRecipe.map(recipeCards => <RecipesCard key={recipeCards.id} recipeCards={recipeCards}></RecipesCard>)
        }
        </div>
        <Footer></Footer>
        </>
        
        );
    };
    
    export default Recipes;
    
    
    
    
    
    
    
    
    
    
    
    // {/* <Link onClick={handleClicks()} to='' className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
    //                 <img style={{ height: '400px', width: '300px' }} className="object-cover w-ful rounded-t-lg w-[400px] h-[400px] md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src={picture} alt="" />
    //                 <div onClick={handleClick()} className="flex flex-col justify-between p-4 leading-normal ml-10">
    //                     <h5 className="mb-2 text-2xl font-bold tracking-tight text-amber-400 dark:text-white">{name}</h5>
    
    //                     <p className=' text-lg font-bold text-slate-500'>{years_of_experience} Years of experience.</p>
    //                     <p className=' text-lg font-bold text-slate-500'>{num_recipes.length} Special Recipes</p>
    //                     <p className='flex gap-2 mb-5'><FaThumbsUp className=' text-slate-500 text-2xl' /> <span className=' text-lg font-bold text-slate-500'>{likes}</span></p>
    
    //                     {/* <p className="mb-3 font-normal text-gray-700 dark:text-gray-400"> {bio.slice(0, 250)}... </p> */}
    
    //                 </div>
//             </Link> */}