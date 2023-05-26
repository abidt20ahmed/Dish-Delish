import React from 'react';
import { FaDribbble, FaFacebook, FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
    return (

        <footer className=" bg-slate-900 dark:bg-gray-900 px-0 lg:px-48  ">
            <div className="mx-auto w-full p-4 py-6 lg:py-8">
                <div className="flex flex-col text-center md:text-left items-center md:items-stretch md:justify-between">
                    <div className="mb-6 md:mb-0 text-right">
                        <a href="" className="flex items-center justify-center lg:justify-start flex-row-reverse">
                            <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">Dish Delish</span>
                        </a>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-6 sm:grid-cols-3">
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-300 uppercase dark:text-white">Contact Us</h2>
                            <ul className="text-gray-600 dark:text-gray-400 font-medium">
                                <li className="mb-4">
                                    <a href="#" className="hover:underline ">+10987654321</a>
                                </li>
                                <li>
                                    <a href="#" className="hover:underline">dish.delish@gmail.com</a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-300 uppercase dark:text-white">Follow us</h2>
                            <ul className="text-gray-600 dark:text-gray-400 font-medium">
                                <li className="mb-4">
                                    <a href="https://github.com/themesberg/flowbite" className="hover:underline ">Github</a>
                                </li>
                                <li>
                                    <a href="https://discord.gg/4eeurUVvTy" className="hover:underline">Discord</a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-300 uppercase dark:text-white">Legal</h2>
                            <ul className="text-gray-600 dark:text-gray-400 font-medium">
                                <li className="mb-4">
                                    <a href="#" className="hover:underline">Privacy Policy</a>
                                </li>
                                <li>
                                    <a href="#" className="hover:underline">Terms &amp; Conditions</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                {/* <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" /> */}
                <div className="sm:flex sm:items-center sm:justify-between mt-10 gap-5 ">
                    <p className="text-center text-sm text-gray-500 sm:text-center dark:text-gray-400 ">© 2023 Dish Delish. All Rights Reserved.
                    </p>
                    <div className="flex mt-4 space-x-6 sm:justify-center sm:mt-0 justify-center">
                        <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                            <FaFacebook />
                            <span className="sr-only">Facebook page</span>
                        </a>
                        <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                            <FaInstagram />
                            <span className="sr-only">Instagram page</span>
                        </a>
                        <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                            <FaTwitter />
                            <span className="sr-only">Twitter page</span>
                        </a>
                        <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                            <FaGithub />
                            <span className="sr-only">GitHub account</span>
                        </a>
                        <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                            <FaDribbble />
                            <span className="sr-only">Dribbble account</span>
                        </a>
                    </div>
                </div>
            </div>
        </footer>

    );
};

export default Footer;