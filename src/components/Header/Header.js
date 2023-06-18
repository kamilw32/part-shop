import React from 'react';
import { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import logo from "../../images/logo.png"
import './Header.css';      


const Header = () => {

    const isSmallScreen = useMediaQuery({ query: '(max-width: 1024px)' });
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const linkValue = window.location.pathname

    return (
        <header className="bggray">
            <nav className="flex text-gray-300 items-center justify-between lg:mx-32 mx-5 p-1 ">
                    <a href="/" >

                    LOGO
                    </a>
                <h1 className="text-white font-bold"></h1>
                {isSmallScreen ? (
                    <button
                        className={`block text-gray-300 hover:text-white focus:text-white focus:outline-none ${isMenuOpen ? 'hidden' : 'visible'
                            }`}
                        onClick={toggleMenu}
                    >
                        <svg
                            className="h-6 w-6 fill-current"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            {isMenuOpen ? (
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M4 6h16v2H4V6zm0 5h16v2H4v-2zm16 4H4v2h16v-2z"
                                />
                            ) : (
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M4 6h16v2H4V6zm0 5h16v2H4v-2zm0 5h16v2H4v-2z"
                                />
                            )}
                        </svg>
                    </button>
                ) : (
                    <ul className="flex text-gray-300">
                        <li>
                            <a
                                href="/"
                                className={`${linkValue === '/start' ? 'bg-gray-200 hover:bg-gray-300 text-black' : ''}  hover:text-black hover:bg-gray-200 px-5 py-4 text-base font-medium header-element`}
                            >
                                START
                            </a>
                        </li>
                        <li>
                            <a
                                href="/nasza-oferta"
                                className={`${linkValue === '/nasza-oferta' ? 'bg-gray-200 hover:bg-gray-300 text-black' : ''}  hover:text-black hover:bg-gray-200 px-5 py-4 text-base font-medium header-element`}
                            >
                                NASZA OFERTA
                            </a>
                        </li>
                        <li>
                            <a
                                href="/o-nas"
                                className={`${linkValue === '/o-nas' ? 'bg-gray-200 hover:bg-gray-300 text-black' : ''}  hover:text-black hover:bg-gray-200 px-5 py-4 text-base font-medium header-element`}
                            >
                                O NAS
                            </a>
                        </li>
                        <li>
                            <a
                                href="/kontakt"
                                className={`${linkValue === '/kontakt' ? 'bg-gray-200 hover:bg-gray-300 text-black' : ''}  hover:text-black hover:bg-gray-200 px-5 py-4 text-base font-medium header-element`}
                            >
                                KONTAKT
                            </a>
                        </li>
                    </ul>
                )}
            </nav>
            {isSmallScreen && (
                <>
                    <div
                        className={`fixed inset-0 bg-gray-800 transition-opacity ${isMenuOpen ? 'opacity-75 visible' : 'opacity-0 invisible'
                            } z-50`}
                        onClick={toggleMenu}
                    ></div>
                    <div
                        className={`fixed inset-y-0 right-0 w-full max-w-md bg-white overflow-y-auto transition duration-300 transform ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'
                            } z-50`}
                    >
                        <div className="p-4">
                            <button
                                className="text-gray-700 hover:text-gray-900 focus:text-gray-900 focus:outline-none"
                                onClick={toggleMenu}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" className="bi bi-x" viewBox="0 0 16 16"> <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" /> </svg>
                            </button>
                        </div>
                        <ul className="py-2 px-4">
                            <li className="mb-2">
                                <a
                                    href="/"
                                    className="text-gray-700 hover:text-gray-900 font-medium block"
                                >
                                    Home
                                </a>
                            </li>
                            <li className="mb-2">
                                <a
                                    href="/products"
                                    className="text-gray-700 hover:text-gray-900 font-medium block"
                                >
                                    Products
                                </a>
                            </li>
                            <li className="mb-2">
                                <a
                                    href="/about"
                                    className="text-gray-700 hover:text-gray-900 font-medium block"
                                >
                                    About
                                </a>
                            </li>
                            <li>
                           <a href="/contact">
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </div>
                </>)}
        </header>
    );
}
export default Header;
