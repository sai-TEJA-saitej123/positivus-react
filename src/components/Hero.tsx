import React from "react";
import illustration from "../asessts/images/Illustration.svg"
const Hero: React.FC = () => {
    return (
        <>
            <div className="flex home justify-around">

                <div className="my-auto">
                    <h2 className="font-semibold text-6xl leading-[5.4rem] mr-5">
                        Navigating the <br /> digital  landscape <br /> for success
                    </h2>
                    <p className="text-[18px]">Our digital marketing agency helps businesses grow and <br /> succeed online through a range of services including SEO, <br /> PPC, social media marketing, and content creation.</p>
                    <button className="p-3 w-[264px] h-[68px] text-[20px] mt-8 consultation">Book a consultation</button>
                </div>
                <div >
                    <img src={illustration} alt="" />
                </div>
            </div>
        </>)
}
export default Hero;