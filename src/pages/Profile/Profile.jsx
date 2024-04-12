import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { FaRegEdit } from "react-icons/fa";
import { Link } from "react-router-dom";

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
            <div className="flex items-center justify-center md:min-h-[80vh]  bg-gray-100 shadow-lg my-12 border-4 border-gray-100 rounded-3xl">
                <div className="card w-[550px] bg-gradient-to-r from-purple-500 to-indigo-600 shadow-lg my-12 mx-auto border-2 border-purple-700 rounded-xl">
                    <div>
                        <div className="text-xl justify-end flex items-center text-white gap-2 pr-2 pt-2">Edit Profile <Link to={'/updateProfile'}><FaRegEdit className="text-lime-600"/></Link></div>
                    </div>
                    <figure className="mt-6 flex justify-center">
                        <img
                            src={photoURL}
                            alt="userImg"
                            className="w-[200px] h-[200px] rounded-full border-4 border-white"
                        />
                    </figure>
                    <div className="card-body text-white  ml-20 md:ml-0">
                        <h2 className="text-3xl text-center pt-5 text-white">
                            User Information
                        </h2>
                        <h2 className="card-title text-xl mt-6">
                            Name: {displayName}
                        </h2>
                        <p className="font-medium">Uid: {uid}</p>
                        <p className="font-medium">Email Address: {email}</p>
                        <p className="font-medium break-words">Photo URL: {photoURL}</p>
                        <p></p>
                        <div className="card-actions justify-end mt-4">
                            <div className="badge bg-purple-500 border border-white rounded-md py-1 px-2">
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
