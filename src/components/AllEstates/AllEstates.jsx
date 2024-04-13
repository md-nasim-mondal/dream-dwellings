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
                <h1 className="text-2xl font-bold lg:text-5xl text-center my-12">
                    {" "}
                    Estates{" "}
                </h1>
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
