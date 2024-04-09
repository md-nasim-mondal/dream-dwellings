import slide1 from "../../assets/railing-4525845_1920.jpg";
import slide2 from "../../assets/houses-336436_1920.jpg";
import slide3 from "../../assets/new-home-1540871_1920.jpg";
import slide4 from "../../assets/residential-area-3454940_1920.jpg";
import slide5 from "../../assets/villa-7130748_1920.jpg";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper/modules";


const Sliders = () => {
    return (
        <div>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: true,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper">
                <SwiperSlide>
                    <div
                        className="hero bg-cover bg-center h-[550px] lg:min-h-[660px] xl:min-h-[720px] rounded-xl md:rounded-3xl bg-no-repeat w-[94%] md:w-full mx-auto my-12 md:my-16"
                        style={{
                            backgroundImage: `url(${slide1})`,
                        }}>
                        <div className="hero-overlay rounded-xl md:rounded-3xl"></div>
                        <div className="hero-content text-center text-neutral-content ">
                            <div className="max-w-md">
                                <h1 className="mb-5 text-5xl font-bold">
                                    Slide 1
                                </h1>
                                <p className="mb-5">
                                    Provident cupiditate voluptatem et in.
                                    Quaerat fugiat ut assumenda excepturi
                                    exercitationem quasi. In deleniti eaque aut
                                    repudiandae et a id nisi.
                                </p>
                                <button className="btn btn-primary">
                                    Get Started
                                </button>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div
                        className="hero bg-cover bg-center h-[550px] lg:min-h-[660px] xl:min-h-[720px] rounded-xl md:rounded-3xl bg-no-repeat w-[94%] md:w-full mx-auto my-12 md:my-16"
                        style={{
                            backgroundImage: `url(${slide2})`,
                        }}>
                        <div className="hero-overlay rounded-xl md:rounded-3xl"></div>
                        <div className="hero-content text-center text-neutral-content ">
                            <div className="max-w-md">
                                <h1 className="mb-5 text-5xl font-bold">
                                    Slide 1
                                </h1>
                                <p className="mb-5">
                                    Provident cupiditate voluptatem et in.
                                    Quaerat fugiat ut assumenda excepturi
                                    exercitationem quasi. In deleniti eaque aut
                                    repudiandae et a id nisi.
                                </p>
                                <button className="btn btn-primary">
                                    Get Started
                                </button>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div
                        className="hero bg-cover bg-center h-[550px] lg:min-h-[660px] xl:min-h-[720px] rounded-xl md:rounded-3xl bg-no-repeat w-[94%] md:w-full mx-auto my-12 md:my-16"
                        style={{
                            backgroundImage: `url(${slide3})`,
                        }}>
                        <div className="hero-overlay rounded-xl md:rounded-3xl"></div>
                        <div className="hero-content text-center text-neutral-content ">
                            <div className="max-w-md">
                                <h1 className="mb-5 text-5xl font-bold">
                                    Slide 1
                                </h1>
                                <p className="mb-5">
                                    Provident cupiditate voluptatem et in.
                                    Quaerat fugiat ut assumenda excepturi
                                    exercitationem quasi. In deleniti eaque aut
                                    repudiandae et a id nisi.
                                </p>
                                <button className="btn btn-primary">
                                    Get Started
                                </button>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div
                        className="hero bg-cover bg-center h-[550px] lg:min-h-[660px] xl:min-h-[720px] rounded-xl md:rounded-3xl bg-no-repeat w-[94%] md:w-full mx-auto my-12 md:my-16"
                        style={{
                            backgroundImage: `url(${slide4})`,
                        }}>
                        <div className="hero-overlay rounded-xl md:rounded-3xl"></div>
                        <div className="hero-content text-center text-neutral-content ">
                            <div className="max-w-md">
                                <h1 className="mb-5 text-5xl font-bold">
                                    Slide 1
                                </h1>
                                <p className="mb-5">
                                    Provident cupiditate voluptatem et in.
                                    Quaerat fugiat ut assumenda excepturi
                                    exercitationem quasi. In deleniti eaque aut
                                    repudiandae et a id nisi.
                                </p>
                                <button className="btn btn-primary">
                                    Get Started
                                </button>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div
                        className="hero bg-cover bg-center h-[550px] lg:min-h-[660px] xl:min-h-[720px] rounded-xl md:rounded-3xl bg-no-repeat w-[94%] md:w-full mx-auto my-12 md:my-16"
                        style={{
                            backgroundImage: `url(${slide5})`,
                        }}>
                        <div className="hero-overlay rounded-xl md:rounded-3xl"></div>
                        <div className="hero-content text-center text-neutral-content ">
                            <div className="max-w-md">
                                <h1 className="mb-5 text-5xl font-bold">
                                    Slide 1
                                </h1>
                                <p className="mb-5">
                                    Provident cupiditate voluptatem et in.
                                    Quaerat fugiat ut assumenda excepturi
                                    exercitationem quasi. In deleniti eaque aut
                                    repudiandae et a id nisi.
                                </p>
                                <button className="btn btn-primary">
                                    Get Started
                                </button>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Sliders;
