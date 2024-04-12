import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { getAuth, updateProfile } from "firebase/auth";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
const auth = getAuth();

const UpdateProfile = () => {
    const { user, setUser } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();

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
                setUser({displayName: `${name}`, photoURL: `${photo}`, uid: `${uid}`, email: `${email}`, emailVerified: `${emailVerified}`            })

                Swal.fire({
                    text: "Profile Successfully Updated Now See Your Profile",
                    icon: "success",
                    showConfirmButton: false,
                    position: "top-right",
                    timer: 1500,
                });
                navigate(location?.state ? location.state : "/profile");
            })
            .catch((error) => {
                toast.error(error.message);
            });
    };
    return (
        <div>
            <form
                onSubmit={handleUpdate}
                className="card-body md:w-3/4 lg:w-1/2 mx-auto bg-gradient-to-b from-purple-400 to-purple-600 p-6 rounded-xl my-10">
                <h2 className="text-4xl my-8 text-center text-white font-bold">
                    Update Your Profile
                </h2>
                <div>
                    <p className="text-lg text-center">Please First Clear Your Old Information than Write New Information</p>
                </div>
                <div className="form-control mb-4">
                    <label htmlFor="userName" className="label">
                        <span className="label-text text-white">Your Name</span>
                    </label>
                    <input
                        type="text"
                        name="userName"
                        id="userName"
                        placeholder="Enter your new name"
                        className="input input-bordered"
                        defaultValue={user.displayName}
                        contentEditable = 'true'
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
                        className="input input-bordered"
                        defaultValue={user.photoURL}
                        required
                    />
                </div>
                <div className="form-control">
                    <button type="submit" className="btn btn-primary w-full">
                        Update Profile
                    </button>
                </div>
            </form>

            <ToastContainer />
        </div>
    );
};

export default UpdateProfile;
