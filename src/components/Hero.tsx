import React from "react";
import heroDesign from "../asessts/images/HeroDesign.svg"
const Hero: React.FC = () => {
    return (
        <>
            <div className="flex  justify-around gap-2 mt-10">

                <div className="my-auto mr-44 ">
                    <h2 className="font-bold text-6xl leading-[5.4rem] mr-20">
                        Navigating the <br /> digital  landscape <br /> for success
                    </h2>
                    <p className="text-[20px]  leading-7 mt-6">Our digital marketing agency helps businesses grow and <br /> succeed online through a range of services including SEO, <br /> PPC, social media marketing, and content creation.</p>
                    <button className="p-2 w-[264px] h-[68px] text-[20px] mt-8 consultation bg-[#191a23] text-white  rounded-2xl semibold hover:bg-[#b9ff66] duration-100 ease-in-out border-black">Book a consultation</button>
                </div>
                <div >
                    <img src={heroDesign} alt="" className="w-[600px] h-[515px] " />
                </div>
            </div>
        </>)
}
export default Hero;