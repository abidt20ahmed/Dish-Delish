import React, { useContext, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import image from '../../../src/assets/icons8-taco-96.png'


const NavBar = () => {
    const [hidden, setHidden] = useState(true)

    const { logOut, avatar, name, auth } = useContext(AuthContext)
    const handleLogout = () => {
        logOut()
    }


    return (

        <nav className="bg-slate-900 text-white dark:bg-gray-900 fixed w-full z-20 top-0 left-0  dark:border-gray-600">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <div className='flex gap-1'>
                    <img className='hidden md:block w-14 h-14' title='Dish Delish' src={image} /><span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">  Dish Delish</span>
                </div>



                <div className="flex md:order-2">
                    <div className='flex gap-4'>
                        {auth.currentUser && <div className="relative w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600 hidden md:block">

                            {auth.currentUser ? <LazyLoadImage src={auth.currentUser.photoURL || avatar} title={auth.currentUser.displayName || name} alt="Name" /> : <LazyLoadImage src="https://avatar.cdnpk.net/1409847.jpg" title={name} alt="" />}


                        </div>}

                        {
                            auth.currentUser ?
                                <button onClick={handleLogout} type="button" className="text-white bg-gradient-to-r from-amber-500 via-amber-600 to-amber-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-amber-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Logout</button>
                                :
                            <button type="button" className="text-white bg-gradient-to-r from-amber-500 via-amber-600 to-amber-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-amber-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"><Link to='/login'>Login</Link></button>
                        }

                    </div>
                    <button onClick={() => setHidden(!hidden)} data-collapse-toggle="navbar-sticky" type="button" className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule='evenodd' d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
                    </button>

                </div>
                <div className={`items-center justify-between ${hidden ? 'hidden' : ''} w-full md:flex md:w-auto md:order-1`} id="navbar-sticky">
                    <ul className="flex flex-col p-4 text-right md:p-0 mt-4 font-medium rounded-lg bg-a-500 md:flex-row md:space-x-8 md:mt-0 md:border-0  dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                        <li>
                            <NavLink to="/" className={({ isActive }) => (isActive ? 'text-blue-600' : 'hover:text-blue-700')} aria-current="page">Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="/blog" className={({ isActive }) => (isActive ? 'text-blue-600' : 'hover:text-blue-700')} aria-current="page">Blog</NavLink>

                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;

