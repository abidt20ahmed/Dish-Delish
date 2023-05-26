import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import ChefCard from '../../ChefCard/ChefCard';
import Traditionals from '../../Traditionals/Traditionals';
import { AuthContext } from '../../../provider/AuthProvider';

const Chefs = () => {
    const chefs = useLoaderData();
    const params = useParams();


    const { loading } = useContext(AuthContext)


    const [recipes, setRecipes] = useState([])
    const traditionals = recipes.slice(0, 9)

    useEffect(() => {
        fetch('https://dish-delish-gamma.vercel.app/recipes')
            .then(res => res.json())
            .then(data => setRecipes(data))
            .catch(error => console.log(error))
    }, [])





    return (

        <>

            <div className="grid grid-cols lg:grid-cols-3 justify-center  gap-5 mb-28 mt-52 lg:mt-0">
                {traditionals[0]?.image &&
                    traditionals.map(recipe => <Traditionals key={recipe.id} recipe={recipe}></Traditionals>)
                }
            </div>


            <h1 className=' text-amber-500 text-4xl lg:text-7xl font-semibold text-center'>Our Chefs</h1>
            <div className="grid grid-cols lg:grid-cols-2 justify-center  gap-5 ml-0 lg:ml-6 my-28">


                {
                    chefs.map(chef =>
                        <ChefCard key={chef.id} chef={chef} ></ChefCard>
                    )
                }

            </div>
        </>

    );
};

export default Chefs;