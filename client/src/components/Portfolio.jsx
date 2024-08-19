import React, { useEffect, useState } from 'react';
import {fa} from 'react-icons'

const Portfolio = () => {
    const [portfolios, setPortfolios] = useState([]);

    useEffect(() => {
        const fetchPortfolios = async () => {
            try {
                const response = await fetch('/api/projects');
                const data = await response.json();
                setPortfolios(data);
            } catch (error) {
                console.error('Error fetching portfolios:', error);
            }
        };

        fetchPortfolios();
    }, []);

    return (
        <div className='bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen'>
            <div className='max-w-screen-lg p-4 mx-auto flex flex-col w-full h-full'>
                <div className='pb-8 mx-auto text-center'>
                    <p className='text-4xl text-gray-300 font-bold inline border-b-4 border-gray-500'>Portfolio</p>
                    <p className='py-6'>Check out some of my work right now</p>
                </div>

                <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>
                    {portfolios.map(({ id, src, demoUrl, codeUrl, name }) => (
                        <div key={id} className='shadow-lg shadow-cyan-800 rounded-lg'>
                            <img src={src} alt={name} className='rounded-md duration-200 hover:scale-105' />
                            <div className='flex justify-center items-center text-2xl font-bold pt-4 text-gray-300'>
                                {name}
                            </div>
                            <div className='flex items-center justify-center'>
                                <button 
                                    className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 font-bold text-gray-500 text-xl hover:text-cyan-500'
                                    onClick={() => window.open(demoUrl, '_blank')}
                                >
                                    Demo
                                </button>
                                <button 
                                    className='w-1/2 px-6 py-3 m-4 flex gap-2 duration-200 hover:scale-105 font-bold text-xl text-gray-300 hover:text-cyan-500'
                                    onClick={() => window.open(codeUrl, '_blank')}
                                >
                                    Code
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Portfolio;
