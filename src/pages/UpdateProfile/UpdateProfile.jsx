import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { getAuth, updateProfile } from "firebase/auth";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import Bg from "../../assets/images/bg-1.jpg";
import Icon from "../../assets/logo/update-profile-user.svg";
import "animate.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { Helmet } from "react-helmet-async";
AOS.init();

const auth = getAuth();

const UpdateProfile = () => {
    const { user, setUser, loading } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    if (loading) {
        return (
            <div className=" flex mt-16 justify-center">
                <span className="loading loading-infinity loading-lg"></span>
            </div>
        );
    }

    const handleUpdate = (e) => {
        e.preventDefault();
        const name = e.target.userName.value;
        const photo = e.target.userPhoto.value;
        const email = user.email;
        const uid = user.uid;
        const emailVerified = user?.emailVerified;
        updateProfile(auth.currentUser, {
            displayName: `${name}`,
            photoURL: `${photo}`,
        })
            .then(() => {
                setUser({
                    displayName: `${name}`,
                    photoURL: `${photo}`,
                    uid: `${uid}`,
                    email: `${email}`,
                    emailVerified: `${emailVerified}`,
                });

                Swal.fire({
                    text: "Profile Successfully Updated Now See Your Profile",
                    icon: "success",
                    showConfirmButton: false,
                    position: "top-end",
                    timer: 1000,
                });
                navigate(location?.state ? location.state : "/profile");
            })
            .catch((error) => {
                toast.error(error.message);
            });
    };
    return (
        <div
            className="w-[94%] md:w-full mx-auto p-4 md:p-8 rounded-3xl bg-cover bg-center bg-no-repeat bg-opacity-60 my-10 flex flex-col justify-center"
            style={{ backgroundImage: `url(${Bg})` }}>
            <Helmet>
                <title>DreamDwellings-User-Update-Profile</title>
                <link rel="icon" type="image/svg+xml" href={Icon} />
            </Helmet>
            <div className=" animate__animated animate__delay-5s animate_zoomInDown">
                <form
                    data-aos="flip-right"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="1600"
                    onSubmit={handleUpdate}
                    className=" animate__animated animate__delay-3s animate_rollIn card-body md:w-3/4 lg:w-1/2 mx-auto bg-gradient-to-b from-purple-400 to-purple-600 p-6 rounded-xl my-10">
                    <h2
                        data-aos="zoom-out-right"
                        data-aos-duration="2000"
                        className="text-4xl my-8 text-center text-white font-bold">
                        Update Your Profile
                    </h2>
                    <div>
                        <p className="text-lg text-center text-black">
                            Please First Clear Your Old Information than Write
                            New Information
                        </p>
                    </div>
                    <div className="form-control mb-4">
                        <label htmlFor="userName" className="label">
                            <span className="label-text text-white">
                                Your Name
                            </span>
                        </label>
                        <input
                            type="text"
                            name="userName"
                            id="userName"
                            placeholder="Enter your new name"
                            className="w-full px-4 py-3 rounded-md border focus:border-4 border-gray-700 bg-gray-900 text-gray-100 focus:border-green-600"
                            defaultValue={user.displayName}
                            contentEditable="true"
                            required
                        />
                    </div>
                    <div className="form-control mb-4">
                        <label htmlFor="userPhoto" className="label">
                            <span className="label-text text-white">
                                Your Photo URL
                            </span>
                        </label>
                        <input
                            type="url"
                            name="userPhoto"
                            id="userPhoto"
                            placeholder="Enter your new photo URL"
                            className="w-full px-4 py-3 rounded-md border focus:border-4 border-gray-700 bg-gray-900 text-gray-100 focus:border-green-600"
                            defaultValue={user.photoURL}
                            required
                        />
                    </div>
                    <div className="form-control">
                        <button
                            type="submit"
                            className="btn btn-primary w-full">
                            Update Profile
                        </button>
                    </div>
                </form>
                <button>nasim</button>

                <ToastContainer />
            </div>
        </div>
    );
};

export default UpdateProfile;
