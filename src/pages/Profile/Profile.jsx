import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const Profile = () => {
    const { user } = useContext(AuthContext);
    if (user !== null) {
        const displayName = user?.displayName;
        const email = user?.email;
        const photoURL = user?.photoURL;
        const emailVerified = user?.emailVerified;
        const uid = user?.uid;

        return (
            <div className="flex items-baseline justify-center">
                <div className="card w-[600px] bg-base-100 shadow-xl my-24 border-2">
                    <h2 className="text-2xl text-center pt-5">User Profile </h2>
                    <figure>
                        <img
                            src={photoURL}
                            alt="userImg"
                            className="w-full rounded-xl m-6 h-[50%]"
                        />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">User Name: {displayName}</h2>
                        <p className="font-medium">User Uid: {uid} </p>
                        <p className="font-medium">
                            User Email Address: {email}{" "}
                        </p>
                        <div className="card-actions justify-end">
                            <div className="badge badge-outline">
                                {emailVerified ? (
                                    <p className="text-green-600 font-bold">
                                        verified user
                                    </p>
                                ) : (
                                    <p className="text-red-400 font-semibold">
                                        non verified user
                                    </p>
                                )}{" "}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};

export default Profile;
