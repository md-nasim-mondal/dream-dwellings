import { useLoaderData, useParams } from "react-router-dom";
import Icon from "../../assets/logo/details-media-multimedia-svgrepo-com.svg";
import 'animate.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Helmet } from "react-helmet-async";
AOS.init();

const EstateDetails = () => {
    const allEstates = useLoaderData();
    const { estateId } = useParams();
    const idInt = parseInt(estateId);
    const estate = allEstates.find((estate) => estate.id == idInt);
    const {
        img,
        estate_title,
        segment_name,
        description,
        price,
        status,
        area,
        location,
        facilities,
    } = estate;
    return (
        <div>
            <div className="flex flex-col container mx-auto p-6 space-y-6 overflow-hidden rounded-lg lg:mt-6">
            <Helmet>
                <title>DreamDwellings-Estate-Details: {estateId} </title>
                <link rel="icon" type="image/svg+xml" href={Icon} />
            </Helmet>
                <h2 className="lg:text-4xl">
                    Segment:{" "}
                    <span className="text-[#23BE0A]">#{segment_name}</span>
                </h2>
                <img
                    src={img}
                    alt=""
                    className="rounded-3xl animate__animated animate__bounceInUp hover:scale-105 hover:delay-130 w-[110vh] mb-4 max-h-[600px]"
                />

                <div>
                    <div className="flex items-center flex-wrap animate__animated animate__bounceInRight justify-between text-xl font-semibold md:gap-6 lg:gap-8 mb-3 mt-4">
                    <i className="card-title lg:text-3xl text-[#FF5733] animate__animated animate__bounceInRight  items-center pb-4">
                        #{estate_title}
                    </i>
                        <i>Area : {area}</i>
                    </div>
                    <div className="animate__animated animate__fadeInBottomRight text-lg lg:text-2xl font-semibold gap-4 my-6">
                        <i>Location : {location}</i>
                    </div>
                    <div>
                    <div className="flex justify-between items-center flex-wrap gap-5 text-xl animate__animated animate__bounceIn my-5 font-semibold">
                            <h2>
                            Status :{" "} For
                            <span className="bg-orange-600 ml-2 text-white px-6 py-2 rounded-xl">
                                {status}
                            </span>
                            </h2>
                        <h3><i className="text-red-600">{price}</i></h3>
                        </div>
                    </div>
                    <div className=" animate__animated animate__bounceInUp leading-8 mb-6">
                        <span className="text-lg font-semibold text-gray-800">
                            Facilities:
                        </span>
                        <div className="flex flex-wrap mt-2">
                            {facilities.map((facility, idx) => (
                                <div
                                    key={idx}
                                    className="flex items-center justify-center bg-[#FF57330D] text-[#FF5733] rounded-md py-1 px-2 mr-2 mb-2">
                                    <span className="text-sm">{facility}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="animate__animated animate__fadeInBottomRight text-lg lg:text-2xl font-semibold gap-4 my-6">
                        <i>Description : </i>
                    </div>

                    <p className="text-base animate__animated animate__backInDown text-gray-600 font-medium">
                        {description}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default EstateDetails;
