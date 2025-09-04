import React from 'react'
import SEO from "../asessts/images/SEO.svg"
import PCA from "../asessts/images/PCA.svg"
import SMM from "../asessts/images/SMM.svg"
import EM from "../asessts/images/EM.svg"
import CC from "../asessts/images/CC.svg"
import AT from "../asessts/images/AT.svg"
import lm1 from "../asessts/images/learnmore1.svg"
import lm2 from "../asessts/images/learnmore2.svg"
const Services: React.FC = () => {
    return (
        <>
            <div className='flex mt-[70px] pb-[65px] '>
                <div>
                    <h3 className=' bg-[#B9FF66] text-black w-max p-[10px] font-bold text-4xl rounded-lg'>Services</h3>
                </div>
                <div>
                    <p className='text-wrap ml-4 font-normal text-xl'>At our digital marketing agency, we offer a range of services to help <br /> businesses grow and succeed online. These services include:</p>
                </div>
            </div>
            <div className='flex justify-around mt-8'>
                <div className="bg-[#F3F3F3] p-6 shadow-md flex justify-between items-center w-[627px] h-[320px] rounded-[45px]  subCard">
                    <div>
                        <h2 className="text-3xl font-semibold text-gray-900 title">
                            Search Engine <br /> Optimization
                        </h2>
                        <div className='flex'>
                            <img src={lm1} alt="" className='w-[31px] h-[31px]' />
                            <button className="flex items-center gap-2 mt-6 text-black font-medium text-[17px] w-[125px] h-[35px] learnMore">
                                Learn More
                            </button>
                        </div>
                    </div>
                    <div className="text-gray-600">
                        <img src={SEO} alt="SEO pic" />

                    </div>

                </div>
                <div className="bg-[#b9ff66] p-6 shadow-md flex justify-between items-center w-[627px] h-[320px] rounded-[45px] subCard">
                    <div>
                        <h2 className="text-2xl font-semibold text-gray-900">
                            Pay-per-click <br /> advertising
                        </h2>
                        <div className='flex'>
                            <img src={lm1} alt="" className='w-[31px] h-[31px]' />
                            <button className="flex items-center gap-2 mt-6 text-black font-medium text-[17px] w-[125px] h-[35px] learnMore2">
                                Learn More
                            </button>
                        </div>
                    </div>
                    <div className="text-gray-600">
                        <img src={PCA} alt="PCA pic" />

                    </div>

                </div>
            </div>
            <div className='flex justify-around mt-8'>
                <div className="bg-[#191A23] p-6 shadow-md flex justify-between items-center w-[627px] h-[320px] rounded-[45px]  text-white subCard">
                    <div>
                        <h2 className="text-3xl font-semibold text-white ">
                            Social media  <br /> Marketing
                        </h2>
                        <div className='flex'>
                            <img src={lm2} alt="" className='w-[31px] h-[31px]' />
                            <button className="flex items-center gap-2 mt-6 text-black font-medium text-[17px] w-[125px] h-[35px] learnMore">
                                Learn More
                            </button>
                        </div>
                    </div>
                    <div className="text-gray-600">
                        <img src={SMM} alt="SEO pic" />

                    </div>

                </div>
                <div className="bg-[#F3F3F3] p-6 shadow-md flex justify-between items-center w-[627px] h-[320px] rounded-[45px]  subCard">
                    <div>
                        <h2 className="text-3xl font-semibold text-black">
                            Email <br /> Marketing
                        </h2>
                        <div className='flex'>
                            <img src={lm1} alt="" className='w-[31px] h-[31px]' />
                            <button className="flex items-center gap-2 mt-6 text-black font-medium text-[17px] w-[125px] h-[35px] learnMore">
                                Learn More
                            </button>
                        </div>
                    </div>
                    <div className="text-gray-600">
                        <img src={EM} alt="SEO pic" />

                    </div>

                </div>
            </div>
            <div className='flex justify-around mt-8'>
                <div className="bg-[#b9ff66] p-6 shadow-md flex justify-between items-center w-[627px] h-[320px] rounded-[45px]  text-white subCard">
                    <div>
                        <h2 className="text-3xl font-semibold text-white ">
                            Content  <br /> Creation
                        </h2>
                        <div className='flex'>
                            <img src={lm1} alt="" className='w-[31px] h-[31px]' />
                            <button className="flex items-center gap-2 mt-6 text-black font-medium text-[17px] w-[125px] h-[35px] learnMore">
                                Learn More
                            </button>
                        </div>
                    </div>
                    <div className="text-gray-600">
                        <img src={CC} alt="SEO pic" />

                    </div>

                </div>
                <div className="bg-[#191A23] p-6 shadow-md flex justify-between items-center w-[627px] h-[320px] rounded-[45px]  subCard">
                    <div>
                        <h2 className="text-3xl font-semibold text-black">
                            Analytics and  <br /> Tracking
                        </h2>
                        <div className='flex'>
                            <img src={lm2} alt="" className='w-[31px] h-[31px]' />
                            <button className="flex items-center gap-2 mt-6 text-black font-medium text-[17px] w-[125px] h-[35px] learnMore">
                                Learn More
                            </button>
                        </div>
                    </div>
                    <div className="text-gray-600">
                        <img src={AT} alt="SEO pic" />

                    </div>

                </div>
            </div>


        </>
    )
}

export default Services