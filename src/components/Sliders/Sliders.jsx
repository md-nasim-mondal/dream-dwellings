import slide1 from "../../assets/railing-4525845_1920.jpg";
import slide2 from "../../assets/houses-336436_1920.jpg";
import slide3 from "../../assets/new-home-1540871_1920.jpg";
import slide4 from "../../assets/residential-area-3454940_1920.jpg";
import slide5 from "../../assets/villa-7130748_1920.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import "animate.css";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

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
                loop={true}
                className="mySwiper">
                <SwiperSlide>
                    <div
                        className="hero bg-cover bg-center h-[550px] lg:min-h-[660px] xl:min-h-[720px] rounded-xl md:rounded-3xl bg-no-repeat w-[94%] md:w-full mx-auto my-12 md:my-16"
                        style={{
                            backgroundImage: `url(${slide1})`,
                        }}>
                        <div className="hero-overlay rounded-xl md:rounded-3xl"></div>
                        <div className="hero-content text-center text-neutral-content ">
                            <div>
                                <h1 className="mb-5 animate__animated animate_backInDown text-white text-3xl md:text-4xl lg:text-6xl font-bold md:leading-[40px]  lg:leading-[76px]">
                                    Welcome to DreamDwellings: Where Your Home
                                    Dreams Come True!
                                </h1>
                                <p className="mb-5 font-medium text-white animate__animated animate_bounceInLeft">
                                    Embark on a journey to turn your home dreams
                                    into reality with DreamDwellings. Explore
                                    our exquisite collection of residences
                                    designed to fulfill every aspiration and
                                    desire. Welcome home to the place where
                                    dreams find their address.
                                </p>
                                <button className="btn btn-ghost btn-outline text-white text-lg font-bold ">
                                    Explore Now
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
                            <div>
                                <h1 className="mb-5 animate__animated animate_backInDown text-white text-3xl md:text-4xl lg:text-6xl font-bold md:leading-[40px]  lg:leading-[76px]">
                                    Discover Your Perfect Haven: Explore
                                    DreamDwellings Today!
                                </h1>
                                <p className="mb-5 font-medium text-white animate__animated animate_bounceInLeft">
                                    Discover the haven you&apos;ve been longing
                                    for with DreamDwellings. Explore our diverse
                                    range of homes crafted to perfection. Your
                                    perfect sanctuary awaits - start your
                                    exploration today!
                                </p>
                                <button className="btn btn-ghost btn-outline text-white text-lg font-bold ">
                                    Explore Now
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
                            <div>
                                <h1 className="mb-5 animate__animated animate_backInDown text-white text-3xl md:text-4xl lg:text-6xl font-bold md:leading-[40px]  lg:leading-[76px]">
                                    Unlock the Door to Your Dream Home:
                                    DreamDwellings Welcomes You!
                                </h1>
                                <p className="mb-5 font-medium text-white animate__animated animate_bounceInLeft">
                                    Ready to unlock the door to your dream home?
                                    DreamDwellings extends a warm welcome.
                                    Experience the joy of finding your perfect
                                    abode among our stunning collection. Your
                                    dream home is just a step away.
                                </p>
                                <button className="btn btn-ghost btn-outline text-white text-lg font-bold ">
                                    Explore Now
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
                            <div>
                                <h1 className="mb-5 animate__animated animate_backInDown text-white text-3xl md:text-4xl lg:text-6xl font-bold md:leading-[40px]  lg:leading-[76px]">
                                    Step into Serenity: DreamDwellings - Your
                                    Gateway to Home Bliss!
                                </h1>
                                <p className="mb-5 font-medium text-white animate__animated animate_bounceInLeft">
                                    Step into a realm of serenity with
                                    DreamDwellings. Our homes are your gateway
                                    to blissful living, offering peace, comfort,
                                    and unparalleled beauty. Welcome to your new
                                    haven of tranquility
                                </p>
                                <button className="btn btn-ghost btn-outline text-white text-lg font-bold ">
                                    Explore Now
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
                            <div>
                                <h1 className="mb-5 animate__animated animate_backInDown text-white text-3xl md:text-4xl lg:text-6xl font-bold md:leading-[40px]  lg:leading-[76px]">
                                    Embrace Luxury Living: DreamDwellings
                                    Presents Your Dream Abode!
                                </h1>
                                <p className="mb-5 font-medium text-white animate__animated animate_bounceInLeft">
                                    Embrace the epitome of luxury living with
                                    DreamDwellings. Indulge in the finest
                                    residences meticulously crafted for your
                                    comfort and pleasure. Your dream abode
                                    awaits your gracious presence.
                                </p>
                                <button className="btn btn-ghost btn-outline text-white text-lg font-bold ">
                                    Explore Now
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
