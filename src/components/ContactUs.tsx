import React from 'react'

const ContactUs: React.FC = () => {
    return (
        <>
            <div>
                <h3 className='bg-[#b9ff66] w-fit h-[51px] working text-black text-3xl font-bold '>Contact Us </h3>
            </div>

            {/* input form layout */}
            <div className='w-[1240px] h-fit p-8'>

                <div className='flex'>
                    <input type="radio" name="sayHi" id="sayHi" />
                    <label htmlFor="sayHi">Say Hi</label>
                </div>
                <div className='flex'>
                    <input type="radio" name="GetaQuote" id="GetaQuote" />
                    <label htmlFor="GetaQuote">Get a Quote</label>
                </div>
            </div>



        </>)
}

export default ContactUs;