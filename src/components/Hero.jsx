import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
    return ( 
        <section className='bg-indigo-600  text-white py-20'>
            <div className='container mx-auto px-4 text-center'>
                <h2 className='text-4xl md:text-5xl font-bold mb-4'>Welcome to our site</h2>
            </div>

            <p className='text-lg md:text-xl mb-8'>
                Build modern websites with Tailwind CSS quickly and efficiently
            </p>

        <Link to="/" className='bg-white text-indigo-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition'>
            Get Started
        </Link>

        </section>
    );
};

export default Hero;