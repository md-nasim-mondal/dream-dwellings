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
            <form onSubmit={handleUpdate}>
                <div>
                    <label htmlFor="userName">User Name</label>
                    <input type="text" name="userName" id="userName" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                </div>
                <div>
                    <label htmlFor="userPhoto">User Photo URL</label>
                    <input type="url" name="userPhoto" id="userPhoto" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                </div>
                <div>
                    <button type="submit" className="btn btn-primary border-none">Save Change</button>
                </div>
            </form>
        </div>
    );
};

export default UpdateProfile;