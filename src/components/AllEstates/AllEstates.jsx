import { useEffect, useState } from "react";
import Estate from "../Estate/Estate";
import "animate.css";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const AllEstates = () => {
    const [allEstates, setAllEstates] = useState([]);
    useEffect(() => {
        fetch("/estates.json")
            .then((res) => res.json())
            .then((data) => setAllEstates(data));
    }, []);
    return (
        <div className="my-20">
            <div data-aos="flip-right" data-aos-duration="1000">
                <h1 className="text-2xl text-black font-bold lg:text-5xl text-center my-12">
                    {" "}
                    Estates{" "}
                </h1>
                <p className="text-lg text-center w-[94%] md:w-[90%] mx-auto text-black font-normal pb-12">Explore DreamDwellings&apos; Residential Estates, where luxury meets comfort. Discover exquisite homes tailored to your lifestyle, from quaint cottages to elegant mansions. Find your dream residence amidst our curated selection of premier properties.</p>
            </div>
            <div
                data-aos="fade-up-right"
                data-aos-duration="2000"
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-between">
                {allEstates.map((estate, idx) => (
                    <Estate key={idx} estate={estate}></Estate>
                ))}
            </div>
        </div>
    );
};

export default AllEstates;
