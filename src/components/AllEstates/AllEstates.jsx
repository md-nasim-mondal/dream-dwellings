import { useEffect, useState } from "react";
import Estate from "../Estate/Estate";

const AllEstates = () => {
    const [allEstates, setAllEstates] = useState([]);
    useEffect(() => {
        fetch('/estates.json')
        .then(res => res.json())
        .then(data => setAllEstates(data));
    },[])
    return (
        <div className="my-20">
            <h1 className="text-3xl text-center my-12"> Estates </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-between">
            {
                allEstates.map((estate, idx) => <Estate key={idx} estate={estate}></Estate> )
            }
            </div>
        </div>
    );
};

export default AllEstates;