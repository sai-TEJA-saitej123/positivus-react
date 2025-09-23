import React from 'react'
import footerIcon from "../asessts/images/footerIcon.svg"
import socialIcon1 from "../asessts/images/Social icon1.svg";
import socialIcon2 from "../asessts/images/Social icon2.svg";
import socialIcon3 from "../asessts/images/Social icon3.svg";
const Footer: React.FC = () => {
    return (
        <>
            <div className='w-[1241px] h-[514px] bg-[#191A23] rounded-t-3xl mt-20 px-14 py-16 flex flex-col gap-14'>
                <div className='flex justify-between items-center '>
                    <div className='flex gap-5'>
                        <img src={footerIcon} alt="positivuslogo" className="h-9 w-9 block max-w-full
" />
                        <h3 className="font-medium text-4xl text-white tracking-wide">Positivus</h3>
                    </div>
                    <div className='flex list-none items-center gap-5 text-white cursor-pointer'>
                        <li>About</li>
                        <li>Services</li>
                        <li>Use Cases
                        </li>
                        <li>Pricing
                        </li>
                        <li>Blog</li>
                    </div>
                    <div className='flex  gap-3'>
                        <img src={socialIcon1} alt="" />
                        <img src={socialIcon2} alt="" />
                        <img src={socialIcon3} alt="" />
                    </div>
                </div>
                {/* contact us  */}

                <div className=' flex justify-between'>
                    {/* physical info */}
                    <div className='text-white'>

                        <p className='w-32 h-7'>contact us</p>
                        <p>Email: info@positivus.com</p>
                        <p> Phone: 555-567-8901</p>


                        <p>Address: 1234 Main St <br />
                            Moonstone City, Stardust State 12345
                        </p>
                    </div>
                    {/* virtual info */}

                    <div className='  justify-between bg-[#292a32] rounded-2xl px-14 py-10 flex gap-5'>
                        <input type="text" placeholder='Email' className='flex-grow flex-shrink rounded-2xl w-72 bg-transparent text-white border-white border-2 flex items-center px-9  ' />
                        <button className='rounded-2xl bg-[#B9FF66] h-[68px] w-60 px-0 py-6 overflow-hidden relative'>Subscribe to News</button>
                    </div>


                </div>

                <div className="w-full h-[2px] bg-white"></div>
                <div className='flex gap-10'>
                    <p className='text-white'>© 2023 Positivus. All Rights Reserved.


                    </p>
                    <button className=' border-none bg-transparent hover:text-[#B9FF66] duration-300 ease-out'> Privacy Policy </button>
                </div>
            </div>

        </>


    )
}

export default Footer