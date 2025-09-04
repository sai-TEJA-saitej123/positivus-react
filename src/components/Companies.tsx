import React from "react";
import amazonLogo from "../asessts/images/amazon logo.svg"
import dribbleLogo from "../asessts/images/dribble logo.svg"
import hubspotLogo from "../asessts/images/hubspot logo.svg"
import netflixLogo from "../asessts/images/netflix logo.svg"
import notionLogo from "../asessts/images/notion logo.svg"
import zoomLogo from "../asessts/images/zoom logo.svg"
interface ImageItem {
    id: number,
    src: string,
    alt: string

}

const items: ImageItem[] = [
    { id: 1, src: amazonLogo, alt: 'Description of image 1' },
    { id: 2, src: dribbleLogo, alt: 'Description of image 2' },
    { id: 3, src: hubspotLogo, alt: 'Description of image 3' },
    { id: 4, src: netflixLogo, alt: 'Description of image 3' },
    { id: 5, src: notionLogo, alt: 'Description of image 3' },
    { id: 6, src: zoomLogo, alt: 'Description of image 3' },

]
const Companies: React.FC = () => {
    return (
        <>
            <div>
                <ul className="flex  mt-6 justify-evenly">
                    {items.map(item=>(
                        <li key={item.id}>
                            <img src={item.src} alt={item.alt} />
                        </li>
                    ))}
                </ul>
            </div>
        </>
    )
}
export default Companies;