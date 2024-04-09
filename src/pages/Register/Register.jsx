import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { updateProfile } from "firebase/auth";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Register = () => {
    const { createUser, setUser, logOut} = useContext(AuthContext);
    const [showPassword, setShowPassword] = useState(false);

    const handleRegister = (e) => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const name = form.get("name");
        const photo = form.get("photo");
        const email = form.get("email");
        const password = form.get("password");
        const accepted = e.target.terms.checked;
        if (password.length < 6) {
            return toast.error("Password length should be minimum 6 digit");
        }
        if (!/[a-z]/.test(password)) {
            return toast.error(
                "Password must contain at least one lowercase letter"
            );
        }
        if (!/[A-Z]/.test(password)) {
            return toast.error(
                "Password must contain at least one uppercase letter"
            );
        }if (!accepted) {
            return toast.warn("Please accept our terms and conditions!");
            
        }
        // create user
        createUser(email, password)
            .then((result) => {
                const presentUser = result.user;
                updateProfile(presentUser, {
                    displayName: `${name}`,
                    photoURL: `${photo}`,
                })
                    .then(() => {
                        toast.success("Successfully Registered !!");
                    })
                    .catch((error) => {
                        toast.error(error.message);
                    });
                logOut();
                setUser(null);
            })
            .catch((error) => toast.error(error.message));
    };
    return (
        <div className="p-4 md:p-0">
            <div>
                <h2 className="text-3xl my-10 text-center">
                    Register your account
                </h2>
                <form
                    onSubmit={handleRegister}
                    className="card-body md:w-3/4 lg:w-1/2 mx-auto bg-primary-content p-2 md:p-6 lg:p-10  rounded-xl">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Your Name</span>
                        </label>
                        <input
                            type="text"
                            name="name"
                            placeholder="Enter your name"
                            className="input input-bordered"
                            required
                        />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email Address</span>
                        </label>
                        <input
                            type="email"
                            name="email"
                            placeholder="Enter your email address"
                            className="input input-bordered"
                            required
                        />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <input
                            type="url"
                            name="photo"
                            placeholder="Enter your photo URL"
                            className="input input-bordered"
                            required
                        />
                    </div>
                    <div className="form-control relative">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input
                            type={showPassword ? "text" : "password"}
                            name="password"
                            placeholder="Enter your password"
                            className="input input-bordered"
                            required
                        />
                        <span
                            className="absolute right-[2%] bottom-[18%]"
                            onClick={() => setShowPassword(!showPassword)}>
                            {showPassword ? (
                                <FaEye></FaEye>
                            ) : (
                                <FaEyeSlash></FaEyeSlash>
                            )}
                        </span>
                    </div>
                    <div className="mb-2">
                        <input type="checkbox" name="terms" id="terms" />
                        <label className="ml-2" htmlFor="terms">
                            Accept our <a className="text-blue-500" href="#">terms and conditions</a>
                        </label>
                    </div>
                    <div className="form-control my-2">
                        <button className="btn btn-ghost  btn-outline bg-[#23BE0A] border-none">Register</button>
                    </div>
                    <p className="text-center mt-4">
                        Already have an account?
                        <Link
                            className=" text-blue-600 font-bold"
                            to={"/login"}>
                            Login
                        </Link>
                    </p>
                </form>
            </div>
            <ToastContainer />
        </div>
    );
};

export default Register;
