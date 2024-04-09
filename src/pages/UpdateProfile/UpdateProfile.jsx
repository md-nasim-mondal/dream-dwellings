import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { getAuth, updateProfile } from "firebase/auth";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
const auth = getAuth();

const UpdateProfile = () => {
    const {user} = useContext(AuthContext);

    const handleUpdate = (e) => {
        e.preventDefault();
        const name = e.target.userName.value;
        const photo = e.target.userPhoto.value;

        updateProfile(auth.currentUser, {
            displayName: `${name}`, photoURL: `${photo}`
          }).then(() => {
            toast('Profile Successfully Updated');
          }).catch((error) => {
            toast.error(error.message);
          });
        

    }
    return (
        <div>
            <h2 className="text-3xl my-10 text-center">Update Your Profile</h2>
                <form onSubmit={handleUpdate} className="card-body md:w-3/4 lg:w-1/2 mx-auto bg-primary-content p-2 md:p-6 lg:p-10  rounded-xl">
                <div>
                    <h3 className="text-lg text-center">Pleaser First Clear Default Value from input field than Write Your New Info</h3>
                </div>
                    <div className="form-control">
                        <label htmlFor="userName" className="label">
                            <span className="label-text">Your Name</span>
                        </label>
                        <input
                            type="text"
                            name="userName"
                            id="userName"
                            placeholder="Enter your new name"
                            className="input input-bordered"
                            value={user.displayName}
                            required
                        />
                    </div>
                    <div className="form-control relative">
                        <label htmlFor="userPhoto" className="label">
                            <span className="label-text">Your Photo URL</span>
                        </label>
                        <input
                            type="url"
                            name="userPhoto"
                            id="userPhoto"
                            placeholder="Enter your new photo URL"
                            className="input input-bordered"
                            value={user.photoURL}
                            required
                        />
                    </div>
                    <div className="form-control mt-6">
                        <button type="submit" className="btn btn-primary">Update</button>
                    </div>
                </form>
                <ToastContainer />
        </div>
    );
};

export default UpdateProfile;