import React, { useState } from 'react'
import contactDesign from "../asessts/images/contactDesign.svg"

const ContactUs: React.FC = () => {
    const [selectedOption, setselectedOption] = useState("sayHi");
    const submitForm = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("the btn has been clicked!");

    }
    return (

        <>


            <div className="px-6 md:px-20 py-10">
                <h3 className="bg-[#b9ff66] w-fit px-4 py-2 text-black text-3xl font-bold rounded-md mb-8">
                    Contact Us
                </h3>

                <div className="flex flex-col lg:flex-row justify-between bg-[#F3F3F3] rounded-[45px] px-16 py-28 relative overflow-hidden md:p-14 gap-10">
                    {/* Form Section */}
                    <form onSubmit={submitForm} className="flex-1 space-y-6 w-full max-w-lg  flex flex-col gap-10 relative z-[2px]">
                        {/* Radio Options */}
                        <div className="flex gap-6">
                            <label className="flex items-center gap-2 cursor-pointer">
                                <input
                                    type="radio"
                                    name="contactType"
                                    checked={selectedOption === "sayHi"}
                                    onChange={() => setselectedOption("sayHi")}
                                    className="accent-black"
                                />
                                <span className="text-lg">Say Hi</span>
                            </label>
                            <label className="flex items-center gap-2 cursor-pointer">
                                <input
                                    type="radio"
                                    name="contactType"
                                    checked={selectedOption === "getQuote"}
                                    onChange={() => setselectedOption("getQuote")}
                                    className="accent-black"
                                />
                                <span className="text-lg">Get a Quote</span>
                            </label>
                        </div>

                        {/* Name Field */}
                        <div>
                            <label className="block mb-1 font-medium">Name *</label>
                            <input
                                type="text"
                                name="name"
                                placeholder="Name"
                                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black"
                            />
                        </div>

                        {/* Email Field */}
                        <div>
                            <label className="block mb-1 font-medium">Email *</label>
                            <input
                                type="email"
                                name="email"
                                placeholder="Email"
                                required
                                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black"
                            />
                        </div>

                        {/* Message Field */}
                        <div>
                            <label className="block mb-1 font-medium">Message *</label>
                            <textarea
                                name="message"
                                placeholder="Message"
                                required
                                rows={5}
                                className="w-full border border-gray-300 rounded-md px-4 py-2 resize-none focus:outline-none focus:ring-2 focus:ring-black"
                            />
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            className="bg-black text-white px-6 py-2 rounded-md hover:bg-gray-800 transition"
                        >
                            Send Message
                        </button>
                    </form>

                    {/* Image Section */}
                    <div className="flex-1 flex justify-center items-center">
                        <img
                            src={contactDesign}
                            alt="Contact Design"
                            className="max-w-full h-auto object-contain absolute py-[60px] right-0 translate-x-2/4"
                        />
                    </div>
                </div>
            </div>




        </>)
}

export default ContactUs;