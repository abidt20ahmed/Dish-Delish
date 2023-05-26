import React, { useState } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const Traditionals = (recipe) => {
    const [show, setShow] = useState(false)
    const { image, name } = recipe.recipe;
    const method = 'Italian cuisine is renowned for its traditional dishes that have been perfected over generations. From the crispy pizza to the hearty pasta, Italian food is a celebration of flavors, textures, and aromas. Some of the most famous Italian dishes include lasagna, spaghetti carbonara, risotto alla milanese, osso buco, and tiramisu. Each region of Italy has its own specialty and ingredients, such as fresh seafood in the coastal areas and rich cheeses and cured meats in the mountains. With a focus on simplicity, quality ingredients, and passion, Italian cuisine continues to be one of the most beloved and sought-after cuisines in the world.';



    return (

        <div className="max-w-sm bg-transparent backdrop-blur-3xl border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
                <LazyLoadImage className="rounded-t-lg" src={image} alt="" />
            </a>
            <div className="p-5 backdrop-blur-3xl">
                <a href="#">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{name}</h5>
                </a>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{!show ? method.slice(0, 250) : method}...<small><button onClick={() => setShow(!show)}>{!show ? 'See more' : 'See less'}</button></small></p>

            </div>
        </div>

    );
};

export default Traditionals;