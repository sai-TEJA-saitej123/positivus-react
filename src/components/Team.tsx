import React from 'react'
import pp1 from "../asessts/images/pp1.svg"
import pp2 from "../asessts/images/pp2.svg"
import pp3 from "../asessts/images/pp3.svg"
import pp4 from "../asessts/images/pp4.svg"
import pp5 from "../asessts/images/pp5.svg"
import pp6 from "../asessts/images/pp6.svg"
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
        linkedinLink: "#home",
    },
    {
        id: "2",
        image: pp2,
        founderName: "Jane Doe",
        role: "Director of Operations",
        roleDetails: "7+ years of experience in project management and team leadership. Strong organizational and communication skills",
        linkedinLink: "#home",
    },
    {
        id: "3",
        image: pp3,
        founderName: "Michael Brown",
        role: "SEO Specialist",
        roleDetails: "5+ years of experience in SEO and content creation. Proficient in keyword research and on-page optimization",
        linkedinLink: '#home'
    },
    {
        id: "4",
        image: pp4,
        founderName: "Emily Johnson",
        role: "PP3Manager",
        roleDetails: "3+ years of experience in paid search advertising. Skilled in campaign management and performance analysis",
        linkedinLink: '#home'
    },
     {
        id: "5",
        image: pp5,
        founderName: "Emily Johnson",
        role: "PP3Manager",
        roleDetails: "3+ years of experience in paid search advertising. Skilled in campaign management and performance analysis",
        linkedinLink: '#home'
    }, {
        id: "6",
        image: pp6,
        founderName: "Emily Johnson",
        role: "PP3Manager",
        roleDetails: "3+ years of experience in paid search advertising. Skilled in campaign management and performance analysis",
        linkedinLink: '#home'
    },

]
const Team: React.FC = () => {
    return (


        <>
            <div>
                <div>
                    <h3 className='bg-[#b9ff66] w-fit h-[51px] working text-black text-3xl font-bold '>The Team </h3>

                </div>
                <div>
                    <p>Meet the skilled and experienced team behind our successful digital marketing strategies</p>
                </div>
            </div>
            {/* teams div */}
            <div>

                {
                    list.map((item, index) => (
                        <div className='card' key={index}>
                            <img src={item.id} alt="" />

                        </div>
                    ))
                }
            </div>
        </>
    )
}

export default Team;