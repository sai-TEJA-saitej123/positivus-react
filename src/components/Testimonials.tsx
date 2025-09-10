import React, { useState } from 'react'

interface TestimonialData {
    id: number,
    data: string,
    name: string,
    role: string,
}
const testimonial: TestimonialData[] = [
    {
        id: 1,
        data: 'We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence.',
        name: "John Smith",
        role: "Marketing Director at XYZ Corp"
    },
    {
        id: 2,
        data: 'We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence.',
        name: "John Smith",
        role: "Marketing Director at XYZ Corp"

    }, {
        id: 3,
        data: 'We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence.',
        name: "John Smith",
        role: "Marketing Director at XYZ Corp"

    }, {
        id: 4,
        data: 'We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence.',
        name: "John Smith",
        role: "Marketing Director at XYZ Corp"

    }, {
        id: 5,
        data: 'We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence.',
        name: "John Smith",
        role: "Marketing Director at XYZ Corp"

    },
]
const Testimonials: React.FC = () => {
    const [current, setCurrent] = useState(0);
    const length = testimonial.length;

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1);

    }
    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);


    }
    return (
        <>
            <div className='bg-[#1a1a1a] py-12 px-6 rounded-3xl relative'>
                {/* carousel  */}
                <div className='overflow-hidden'>
                    <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${current * 100}%)` }}>
                        {testimonial.map(data => (
                            <div className=' text-white rounded-md m-3 border-white' >
                                {data.data}
                                <div className='text-white w-fit'>
                                    {data.name}
                                </div>
                                {/*navigation btns  */}
                                <div className="flex justify-between items-center mt-6">
                                    <button onClick={prevSlide} className="text-white text-2xl">←</button>

                                    {/* Dots */}
                                    <div className="flex gap-2">
                                        {testimonial.map((_, index) => (
                                            <span
                                                key={index}
                                                onClick={() => setCurrent(index)}
                                                className={`cursor-pointer w-3 h-3 rounded-full ${index === current ? "bg-lime-400" : "bg-white"
                                                    }`}
                                            ></span>
                                        ))}
                                    </div>

                                    <button onClick={nextSlide} className="text-white text-2xl">→</button>
                                </div>

                            </div>

                        ))}
                    </div>



                </div>

                {/* btns */}
                <div>
                </div>


            </div>

        </>
    )
}

export default Testimonials