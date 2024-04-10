
import { useLoaderData, useParams } from "react-router-dom";
const EstateDetails = () => {
    const allEstates = useLoaderData();
    const {estateId} = useParams();
    const idInt = parseInt(estateId);
    const estate = allEstates.find(estate => estate.id == idInt)
    return (
        <div>
            <h2 className="text-2xl">Here is Estate Details Coming </h2>
        </div>
    );
};

export default EstateDetails;