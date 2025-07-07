import React, { useEffect, useState } from 'react';
import { allFQAs } from '../ApiRequest/ApiRequest';

const Accordion = () => {

 const [items , setItems] = useState([])

    const [openIndex , setOpenIndex] = useState(null)

    const Toggle = (index) =>{
        setOpenIndex(openIndex === index? null:index)
    }


  useEffect(() => {
    // iif = immedeately invocated function
    (async () => {
      let res = await allFQAs();

      setItems(res.data);
    })();
  }, []);



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
                                    
                                        <span className='text-lg font-medium'>{item.question}</span>
                                    {openIndex === index ? '-' : '+'} 
                                    </button>

                                    { openIndex === index &&(
                                        <div className='p-4 bg-gray-50'>
                                        <p>{item.answer}</p>
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