import React from 'react';
import { useState } from 'react';
import '../AboutUs/AboutUs.css'
import Footer from '../Footer/Footer';

const AboutUs = () => {
    return (
        <div className="flex flex-col items-center galleryflex">
            <h1 className="text-4xl font-bold text-gray-800 mt-10 mb-6">About Us</h1>
            <div className="flex flex-col md:flex-row w-full max-w-7xl">
                <div className="md:w-1/2 p-6">
                    <h2 className="text-2xl font-bold text-gray-800 mb-6">Our Mission</h2>
                    <p className="text-gray-700 mb-6">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut leo
                        ut justo commodo fermentum eu eget nisl. Nunc volutpat, lorem nec
                        mollis rutrum, quam odio tincidunt orci, eu bibendum risus elit sed
                        sem. Duis imperdiet consectetur felis, eget pellentesque augue
                        tristique a. Mauris vel ante nulla.
                    </p>
                    <p className="text-gray-700 mb-6">
                        Nullam bibendum nisi nec lacus maximus lacinia. Morbi tempor mauris
                        sit amet justo consequat porttitor. Nullam dictum semper quam, ac
                        tristique leo placerat at. Proin eget ultrices leo, nec eleifend
                        lacus. In ac nulla non libero rhoncus vestibulum.
                    </p>
                </div>
                <div className="md:w-1/2 p-6">
                    <h2 className="text-2xl font-bold text-gray-800 mb-6">Our Gallery</h2>
                    <div className="flex flex-wrap -mx-4">
                        <div className="w-full sm:w-1/2 p-4">
                            <img
                                className="rounded-lg shadow-md h-64 w-full object-cover object-center"
                                src="https://source.unsplash.com/random/800x800?sig=1"
                                alt="Gallery item"
                            />
                        </div>
                        <div className="w-full sm:w-1/2 p-4">
                            <img
                                className="rounded-lg shadow-md h-64 w-full object-cover object-center"
                                src="https://source.unsplash.com/random/800x800?sig=2"
                                alt="Gallery item"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;


