
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

interface TestimonialData {
    id: number;
    data: string;
    name: string;
    role: string;
}

const testimonial: TestimonialData[] = [
    {
        id: 1,
        data: 'We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence.',
        name: "John Smith",
        role: "Marketing Director at XYZ Corp"
    },
    {
        id: 2,
        data: 'We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence.',
        name: "John Smith",
        role: "Marketing Director at XYZ Corp"

    }, {
        id: 3,
        data: 'We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence.',
        name: "John Smith",
        role: "Marketing Director at XYZ Corp"

    }, {
        id: 4,
        data: 'We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence.',
        name: "John Smith",
        role: "Marketing Director at XYZ Corp"

    }, {
        id: 5,
        data: 'We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence.',
        name: "John Smith",
        role: "Marketing Director at XYZ Corp"

    },
]
const Testimonials = () => {
    return (
        <>
            <div className="bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto">
                    <Swiper
                        modules={[Navigation, Pagination]}
                        navigation
                        pagination={{ clickable: true }}
                        spaceBetween={30}
                        slidesPerView={1}
                        loop
                    >
                        {testimonial.map((t: TestimonialData) => (
                            <SwiperSlide key={t.id}>
                                <div className="border-2 border-green-400 rounded-xl p-6 bg-gray-800 text-white shadow-lg">
                                    <p className="text-lg italic mb-6">“{t.data}”</p>
                                    <div>
                                        <p className="text-green-400 font-semibold">{t.name}</p>
                                        <p className="text-gray-300 text-sm">{t.role}</p>
                                    </div>
                                </div>
                            </SwiperSlide>

                        ))}
                    </Swiper>
                </div>
            </div >
        </>
    );
}
export default Testimonials;