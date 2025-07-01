import { useEffect, useRef, useState } from "react";


const slides = [

        'https://cdn.smartslider3.com/wp-content/uploads/2019/05/sliderimages.png',

        'https://png.pngtree.com/thumb_back/fh260/background/20230702/pngtree-vibrant-geometric-design-a-3d-render-perfect-for-website-sliders-and-image_3744278.jpg',

        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRSfmsaYw5QJAt7OkjG7RLcTtYyxYFQTZOSA&s',

        'https://wallpapercave.com/wp/wp9433338.jpg',

]

const Slider = () => {

    const [current , setCurrent]  = useState(0)

    const [isPause, setIsPause ] = useState(false)

    const touceStartX = useRef(null)
    const touceEndX = useRef(null)

    useEffect(()=>{

        if(isPause) return ;

        const timer = setInterval(()=>{
            setCurrent((prev) => (prev+1) % slides.length)
        },4000) ;

        return () => clearInterval(timer)


    },[isPause])

    const handleMouseEnter = () => setIsPause(true)
    const handleMouseLeave = () => setIsPause(false)

    const handleTouchStart = (e) => {
        touceStartX.current = e.touches[0].clientX
    }

    const handleTouchMove = (e) => {
        touceEndX.current = e.touches[0].clientX
    }

    const handleTouchEnd = () =>{
        if(touceStartX.current === null || touceEndX.current ===null) return ;
        const distance = touceStartX.current - touceEndX.current ;

        if(Math.abs(distance) > 50){
            setCurrent((prev) => (prev+1) % slides.length)
        }else{
            setCurrent((prev)=>(prev-1 +slides.length) % slides.length)
        }

        touceStartX.current = null
        touceEndX.current = null
    }


    return (
        <div className="relative w-full mx-auto overflow-hidden rounded-lg shadow-sm h-[200px] sm:h-[250px] md:h-[300px] lg:h-[350px]" 
        onMouseEnter={handleMouseEnter} 
        onMouseLeave={handleMouseLeave}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}

        >
            { slides.map((src, index) =>(

                <img 

                key={index}
                
                src={src}

                alt={`Slide ${index+1}`}
                
                className={`
                    
                    absolute top-0 left-0 w-full h-full object-cover
                    transition-opacity duration-1000 ease-in-out

                    ${index === current ? 'opacity-100 z-10' : 'opacity-0 z-0'}

                    
                    `}

                    style={{ pointerEvents : index === current? 'auto':'none'}}
                
                /> 

            ))}

            <div className="absolute bottom-4 left-1/2 transfom -translate-x-1/2 flex space-x-2 z-20">

            { slides.map((_, index) =>(
                <button
                    key={index}
                    className={`w-3 h-3 rounded-full transition-all ${
                        current === index ? 'bg-white' : 'bg-white/50'
                    } `}

                    onClick={()=>setCurrent(index)}
                
                
                >


                </button>
            ))

            }

            </div>


        </div>
    );
};

export default Slider;