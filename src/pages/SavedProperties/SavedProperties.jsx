import { Link } from "react-router-dom";
import Estate from "../../components/Estate/Estate";
import { Helmet } from "react-helmet";
import Icon from "../../assets/logo/file-favorite-7-svgrepo-com.svg";

const SavedProperties = () => {
    const properties = JSON.parse(localStorage.getItem("properties") || "[]");

    if (properties.length > 0) {
        return (
            <div className="py-16">
            <Helmet>
                <title>DreamDwellings-Saved-Properties</title>
                <link rel="icon" type="image/svg+xml" href={Icon} />
            </Helmet>
                <h1 className="text-2xl text-black font-bold lg:text-5xl text-center my-12">
                    Your Saved Properties
                </h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-between">
                    {properties.map((estate, idx) => (
                        <Estate key={idx} estate={estate}></Estate>
                    ))}
                </div>
            </div>
        );
    }
    return (
        <div className="text-center">
            <h1 className="text-2xl text-black font-bold lg:text-5xl text-center my-12">
                Your Saved Properties
            </h1>
            <p className="text-lg text-center w-[94%] md:w-[90%] mx-auto text-black font-normal pb-12">
                Your haven&apos;t Saved Any Property.
                <br />
                To add property please click on the button value.
            </p>
            <Link
                to={"/"}
                className="btn btn-primary bg-green-600 border-none mb-12">
                Add Property
            </Link>
        </div>
    );
};

export default SavedProperties;
