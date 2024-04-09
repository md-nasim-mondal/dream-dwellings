import { getAuth, updateProfile } from "firebase/auth";
const auth = getAuth();

const UpdateProfile = () => {

    const handleUpdate = (e) => {
        e.preventDefault();
        const name = e.target.userName.value;
        const photo = e.target.userPhoto.value;

        updateProfile(auth.currentUser, {
            displayName: `${name}`, photoURL: `${photo}`
          }).then(() => {
            console.log('profile updated');
          }).catch((error) => {
            console.error(error.message);
          });
        

    }
    return (
        <div>
            <h2 className="text-3xl my-10 text-center">Update Your Profile</h2>
                <form onSubmit={handleUpdate} className="card-body md:w-3/4 lg:w-1/2 mx-auto bg-primary-content p-2 md:p-6 lg:p-10  rounded-xl">
                    <div className="form-control">
                        <label htmlFor="userName" className="label">
                            <span className="label-text">Your New Name</span>
                        </label>
                        <input
                            type="text"
                            name="userName"
                            id="userName"
                            placeholder="Enter your new name"
                            className="input input-bordered"
                            required
                        />
                    </div>
                    <div className="form-control relative">
                        <label htmlFor="userPhoto" className="label">
                            <span className="label-text">New Photo URL</span>
                        </label>
                        <input
                            type="url"
                            name="userPhoto"
                            id="userPhoto"
                            placeholder="Enter your new photo URL"
                            className="input input-bordered"
                            required
                        />
                    </div>
                    <div className="form-control mt-6">
                        <button type="submit" className="btn btn-primary">Update</button>
                    </div>
                </form>
        </div>
    );
};

export default UpdateProfile;