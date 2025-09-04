import React from 'react'
import freeProp from "../asessts/images/FreeProp.svg";
const FreeProp: React.FC = () => {
    return (
        <>
            <div className='w-[1240px] h-[347px] bg-[#F3F3F3] flex justify-around m-auto mt-7 rounded-[45px]'>
                <div className='w-[500px] h-[227px] my-auto'>
                    <h3 className='text-3xl font-bold'>Let's make things happen</h3>
                    <p className='text-[18px] max-w-md my-5'>Contact us today to learn more about how our <br /> digital marketing services can help your business <br /> grow and succeed online.</p>
                    <button className=' w-[288px] h-[68px] bg-black text-white leading-7 my-5'>Get your free proposal</button>
                </div>
                <div className='relative '>
                    <img src={freeProp} alt="" className='icon ' />
                </div>
            </div>
            {/* case studies */}
            <div className='flex space-x-4 my-20 mx-auto'>
                <div><h3 className='bg-[#B9FF66] w-[265px] h-[51px] caseStudy text-black text-3xl font-bold'>Case Studies</h3></div>
                <div><p className='desc'>  Explore Real-Life Examples of Our Proven Digital Marketing Success through Our Case Studies</p>
                </div>
            </div>
        </>)
}

export default FreeProp;