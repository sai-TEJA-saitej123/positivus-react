import React from 'react'
import arrow from "../asessts/images/arrow1.svg"
const CaseStudies: React.FC = () => {
    return (
        <>
            <div className='w-[1434px] h-[326px] bg-black text-white mainCard'>
                <div className='subText'>
                    <p>For a local restaurant, we implemented a targeted PPC campaign that resulted in a 50% increase in website traffic and a 25% increase in sales.</p>
                    <div className='w-p[140px] h-[28px] flex '>
                        <p className='text-[#B9FF66]'>Learn More</p>
                        <img src={arrow} alt="" />

                    </div>
                </div>
                <div className='middle subText'>
                    <p>For a B2B software company, we developed an SEO strategy that resulted in a first page ranking for key keywords and a 200% increase in organic traffic.</p>
                    <div className='w-p[140px] h-[28px] flex'>
                        <p className='text-[#B9FF66]'>Learn More</p>
                        <img src={arrow} alt="" />

                    </div>
                </div>
                <div className='subText'>
                    <p>For a national retail chain, we created a social media marketing campaign that increased followers by 25% and generated a 20% increase in online sales.</p>
                    <div className='w-p[140px] h-[28px] flex'>
                        <p className='text-[#B9FF66] '>Learn More</p>
                        <img src={arrow} alt="" />
                    </div>
                </div>
            </div>

        </>)
}

export default CaseStudies