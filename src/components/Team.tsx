import React from 'react'
import pp1 from "../asessts/images/pp1.svg"
import pp2 from "../asessts/images/pp2.svg"
import pp3 from "../asessts/images/pp3.svg"
import pp4 from "../asessts/images/pp4.svg"
import pp5 from "../asessts/images/pp5.svg"
import pp6 from "../asessts/images/pp6.svg"
import linkedin from "../asessts/images/linkedin icon.svg"
type TeamProps = {
    id: string;
    image: string;
    founderName: string;
    role: string;
    roleDetails: string;
    linkedinLink: string;
}
const list: TeamProps[] = [
    {
        id: "1",
        image: pp1,
        founderName: "John Smith",
        role: "CEO and Founder",
        roleDetails: "10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy",
        linkedinLink: linkedin,
    },
    {
        id: "2",
        image: pp2,
        founderName: "Jane Doe",
        role: "Director of Operations",
        roleDetails: "7+ years of experience in project management and team leadership. Strong organizational and communication skills",
        linkedinLink: linkedin,
    },
    {
        id: "3",
        image: pp3,
        founderName: "Michael Brown",
        role: "SEO Specialist",
        roleDetails: "5+ years of experience in SEO and content creation. Proficient in keyword research and on-page optimization",
        linkedinLink: linkedin
    },
    {
        id: "4",
        image: pp4,
        founderName: "Emily Johnson",
        role: "PP3Manager",
        roleDetails: "3+ years of experience in paid search advertising. Skilled in campaign management and performance analysis",
        linkedinLink: linkedin,
    },
    {
        id: "5",
        image: pp5,
        founderName: "Brian Willians",
        role: "Social Media Specialist",
        roleDetails: "4+ years of experience in social media marketing. Proficient in creating and scheduling content, analyzing metrics, and building engagement",
        linkedinLink: linkedin,
    }, {
        id: "6",
        image: pp6,
        founderName: "Sarah Kim",
        role: "Content Creator",
        roleDetails: "2+ years of experience in writing and editing. Skilled in creating compelling, SEO-optimized content for various industries        ",
        linkedinLink: linkedin
    },

]
const Team: React.FC = () => {
    return (


        <>
            <div className='flex gap-4 '> 
                <div>
                    <h3 className='bg-[#b9ff66] w-fit h-[51px] working text-black text-3xl font-bold '>The Team </h3>

                </div>
                <div>
                    <p className='my-auto'>Meet the skilled and experienced team behind our successful digital marketing strategies</p>
                </div>
            </div>
            {/* teams div */}
            <div className='grid grid-cols-3 grid-rows-3 gap-4'>
                {
                    list.map((item, index) => (
                        <div>
                            <div className="max-w-sm p-6 rounded-2xl shadow-md border-2 border-black bg-white my-7 " key={index}>
                                {/* <!-- Profile Section --> */}
                                <div className="flex items-center justify-between">
                                    {/* <!-- Profile image with background shape --> */}


                                    <div className="relative ">

                                        <img
                                            src={item.image}
                                            alt=""
                                            className="w-28 h-28  object-cover"
                                        />

                                    </div>

                                    {/* <!-- Name & Title --> */}
                                    <div className="mt-4">
                                        <h2 className="font-bold text-lg">{item.founderName}</h2>
                                        <p className="text-gray-600 text-sm">{item.role}</p>
                                    </div>
                                    {/* <!-- LinkedIn icon --> */}

                                    <div>
                                        <img src={item.linkedinLink} alt="" />
                                    </div>

                                </div>



                                {/* <!-- Divider --> */}
                                <div className="border-t my-4"></div>

                                {/* <!-- Description --> */}
                                <p className="text-gray-700 text-sm leading-relaxed">
                                    {item.roleDetails}
                                </p>
                            </div>

                        </div>
                    ))
                }
            </div>
        </>
    )
}

export default Team;