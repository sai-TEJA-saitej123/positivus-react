import React, { useState } from 'react'
import plus from "../asessts/images/Plus icon.svg"
import minus from "../asessts/images/minus icon.svg"
type AccordionProps = {
    id: string;
    title: string;
    description: string;
}
const list: AccordionProps[] = [
    {
        id: "1",
        title: "Consultation",
        description: "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements."
    },
    {
        id: "2",
        title: "Research and Strategy Deployment",
        description: "In this phase, we conduct in-depth market research to understand your industry, competitors, and target audience. Using this data, we develop a customized strategy that aligns with your goals and ensures a solid foundation for success."
    },
    {
        id: "3",
        title: "Implementation",
        description: "Once the strategy is finalized, our team moves forward with executing the plan. From setting up the necessary tools to launching campaigns, we ensure everything is seamlessly integrated to deliver consistent and impactful results."
    },
    {
        id: '4',
        title: 'Monitoring Optimization',
        description: "After implementation, we continuously track performance metrics and user engagement. Our team analyzes the data to identify areas of improvement and makes real-time adjustments to optimize effectiveness and maximize ROI."
    },
    {
        id: "5",
        title: 'Reporting and Communication',
        description: 'We believe in full transparency and regular communication. You’ll receive comprehensive reports outlining key metrics, progress, and insights. Our team will walk you through the results and provide clear explanations to keep you fully informed.'
    },
    {
        id: "6",
        title: "Continual Improvement",
        description: 'The journey doesn’t stop after launch. We’re committed to ongoing growth and refinement. By regularly reviewing performance and incorporating feedback, we ensure your strategy evolves to meet changing market demands and long-term goals.'
    }
];

const Accordion: React.FC = () => {
    const [accordion, setAccordion] = useState<string | null>(null);
    const handleAccordion = (index: string) => {
        let activeId: string | null = index
        if (index === accordion) activeId = null
        setAccordion(activeId)
    }

    return (
        <>
            <div className='flex space-x-4 my-20 mx-auto'>
                <div>
                    <h3 className='bg-[#b9ff66] w-fit h-[51px] working text-black text-3xl font-bold '>Our Working Process </h3>
                </div>
                <div>
                    <p className='desc'> Step-by-Step Guide to Achieving Your Business Goals</p>
                </div>
            </div>

            <div>
                {list.map((item, index) => (
                    <div key={index} className="wrapper2">
                        <div
                            onClick={() => handleAccordion(item.id)}
                            className={`cursor-pointer w-[1234px] h-[159px] rounded-2xl accordionTop text-3xl font-bold my-3 px-6 py-6 flex justify-between items-center ${accordion === item.id ? "bg-[#B9FF66]" : "bg-[#f3f3f3]"
                                }`}
                        >
                            {/* Left side (id + title) */}
                            <div className="flex items-center gap-4">
                                <span>{item.id}</span>
                                <span>{item.title}</span>
                            </div>

                            {/* Right side (icon) */}
                            <div className=" flex items-center justify-center rounded-full border border-gray-400 bg-white className='w-14 h-14'">
                                {accordion === item.id ? (
                                    <img src={minus} alt="" className='w-14 h-14' />
                                ) : (
                                    <img src={plus} alt="" className='w-14 h-14' />

                                )}
                            </div>
                        </div>

                        {accordion === item.id && (
                            <div className="bg-[#B9FF66] text-lg px-12 py-4 -mt-3 rounded-b-2xl h-[120px] font-bold">
                                {item.description}
                            </div>
                        )}
                    </div>
                ))}
            </div>


        </>
    )
}

export default Accordion;