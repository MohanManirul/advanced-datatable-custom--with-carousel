import React, { useState } from 'react';

const Accordion = () => {

    const [openIndex , setOpenIndex] = useState(null)

    const Toggle = (index) =>{
        setOpenIndex(openIndex === index? null:index)
    }

      const items = [
                {
                    title: 'What is React?',
                    content: 'React is an open-source JavaScript library developed by Facebook for building user interfaces',
                },

                {
                    title: 'What is JSX?',
                    content: 'JSX stands for JavaScript XML. It allows you to write HTML elements in JavaScript and place them in the DOM without using createElement() or appendChild()',
                },

                {
                    title: 'What are props in React?',
                    content: 'Props (short for properties) are used to pass data from parent to child components. Props are read-only and cannot be modified by the child component.',
                },
            ];


    return (
        <section className="py-16">
            <div className="container mx-auto px-4">
                Accordion Test
                <div className='w-full max-w-xl  mx-auto mt-10'>
                    {
                      items.map((item,index)=>(
                            <div className='border-b' key={index}>
                                <button 
                                    onClick={()=>Toggle(index)}
                                    className='w-full text-left flex justify-between items-center p-4 focus:outline-none'>
                                    
                                        <span className='text-lg font-medium'>{item.title}</span>
                                    {openIndex === index ? '-' : '+'} 
                                    </button>

                                    { openIndex === index &&(
                                        <div className='p-4 bg-gray-50'>
                                        <p>{item.content}</p>
                                    </div>
                                    )

                                }
                            
                            </div>
                      ))  
                    }
                                                 

                </div>
            </div>
        </section>
    );
};

export default Accordion;