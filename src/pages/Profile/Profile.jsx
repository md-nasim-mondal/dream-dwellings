import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const Profile = () => {
    const { user } = useContext(AuthContext);
    if (user !== null) {
        const displayName = user?.displayName;
        // const email = user?.email;
        const photoURL = user?.photoURL;
        // const emailVerified = user?.emailVerified;
        // const uid = user?.uid;

        return (
            <div>
                <img src={photoURL} alt="userImg" />
                <h2 className="text2xl">User Name: {displayName}</h2>
            </div>
        );
    }
};

export default Profile;
