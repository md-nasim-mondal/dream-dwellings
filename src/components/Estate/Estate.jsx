import PropTypes from "prop-types";
import { Link } from "react-router-dom";
const Estate = ({ estate }) => {
    const {
        id,
        estate_title,
        img,
        segment_name,
        area,
        location,
        price,
        status,
        facilities,
    } = estate;
    console.log(img);
    return (
        <div>
            <div className="card  h-[780px] border border-gray-300 rounded-lg p-8 bg-white shadow-lg">
                <figure className="relative h-[250px] mb-8 rounded-xl overflow-hidden">
                    <img
                        src={`${img}`}
                        alt="Property Image"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute bg-[#FF5733] text-xl font-semibold p-2 rounded-lg top-2 left-2">
                        {status}
                    </div>
                </figure>
                <h2 className="card-title text-[#FF5733] text-3xl text-center font-bold mb-4">
                    {estate_title}
                </h2>
                <div className="card-body p-0">
                    <div className="flex justify-between">
                        <p className=" text-[#4CAF50] text-lg font-bold mb-2">
                            <i>#{segment_name}</i>
                        </p>
                        <p className="text-lg font-semibold mb-4 text-end">
                            Area: {area}
                        </p>
                    </div>
                    <div className="flex items-center justify-between text-lg font-semibold mb-4">
                        <p className="text-gray-700">{location}</p>
                        <p className="text-blue-600">{price}</p>
                    </div>
                    <div className="leading-8 mb-6">
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

                    <Link to={`/details/${id}`}>
                        <button className="btn bg-[#4CAF50] border-0 btn-primary text-white font-bold text-lg py-3 px-6 rounded-lg hover:bg-[#45A049] transition duration-300">
                            View Property
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

Estate.propTypes = {
    estate: PropTypes.object,
};

export default Estate;
