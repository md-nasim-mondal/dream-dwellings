import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { FaRegEdit } from "react-icons/fa";
import { Link } from "react-router-dom";
import Bg from "../../assets/images/bg-3.jpg";
import Icon from "../../assets/logo/user-profile.svg";
import "animate.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { Helmet } from "react-helmet-async";
AOS.init();

const Profile = () => {
    const { user, loading } = useContext(AuthContext);
    if (loading) {
        return (
            <div className=" flex mt-16 justify-center">
                <span className="loading loading-infinity loading-lg"></span>
            </div>
        );
    }
    if (user !== null) {
        const displayName = user?.displayName;
        const email = user?.email;
        const photoURL = user?.photoURL;
        const emailVerified = user?.emailVerified;
        const uid = user?.uid;

        return (
            <div
                className="flex items-center justify-center md:min-h-[80vh]  bg-cover bg-center bg-no-repeat bg-opacity-60   shadow-lg my-12  rounded-3xl"
                style={{ backgroundImage: `url(${Bg})` }}>
                <Helmet>
                    <title>DreamDwellings-User-Profile</title>
                    <link
                        rel="icon"
                        type="image/svg+xml"
                        href={photoURL || Icon}
                    />
                </Helmet>
                <div className="animate__animated animate__delay-2s animate__flip  card w-[550px] bg-gradient-to-r from-purple-500 to-indigo-600 shadow-lg my-12 mx-auto  rounded-xl ">
                    <div>
                        <div className="animate__animated animate__backInLeft text-xl justify-end flex items-center text-white gap-2 pr-2 pt-2">
                            Edit Profile{" "}
                            <Link to={"/updateProfile"}>
                                <FaRegEdit className="text-lime-600" />
                            </Link>
                        </div>
                    </div>
                    <figure className="mt-6 flex justify-center animate__animated animate_backInDown  ">
                        <img
                            src={photoURL}
                            alt="userImg"
                            className="animate__animated animate__backInDown w-[200px] h-[200px] rounded-full border-4 border-white"
                        />
                    </figure>
                    <div className="card-body text-white  ml-20 md:ml-0">
                        <h2 className=" animate__animated animate__lightSpeedInLeft text-3xl text-center pt-5 text-white">
                            User Information
                        </h2>
                        <h2 className=" animate__animated animate__zoomInDown card-title text-xl mt-6">
                            Name: {displayName}
                        </h2>
                        <p className="font-medium animate__animated animate__lightSpeedInRight">Uid: {uid}</p>
                        <p className="  animate__animated animate__heartBeat font-medium">
                            Email Address: {email}
                        </p>
                        <p className="animate__animated animate__bounceInRight font-medium break-words">
                            Photo URL: {photoURL}
                        </p>
                        <div className="card-actions justify-end mt-4  animate__animated animate_fadeInBottomLeft">
                            <div className="animate__animated animate__zoomInUp badge bg-purple-500 border-2 border-black rounded-md py-3 px-4 text-lg font-semibold">
                                {emailVerified ? (
                                    <p className="font-semibold">
                                        Verified User
                                    </p>
                                ) : (
                                    <p className="font-semibold">
                                        Non-Verified User
                                    </p>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};

export default Profile;
