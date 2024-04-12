import Swal from "sweetalert2";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { updateProfile } from "firebase/auth";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Register = () => {
    const { createUser, setUser, logOut } = useContext(AuthContext);
    const [showPassword, setShowPassword] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();

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
        }
        if (!accepted) {
            return toast.warn("Please accept our terms and conditions!");
        }
        // create user
        createUser(email, password)
            .then((result) => {
                const presentUser = result.user;
                setUser(presentUser);
                updateProfile(presentUser, {
                    displayName: `${name}`,
                    photoURL: `${photo}`,
                })
                    .then(() => {
                        Swal.fire({
                            text: "Successfully Registered Now Please Login!!",
                            icon: "success",
                            showConfirmButton: false,
                            position: "top-right",
                            timer: 1500,
                        });
                        navigate(location?.state ? location.state : "/login");
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
                <form
                    onSubmit={handleRegister}
                    className="card-body md:w-3/4 lg:w-1/2 mx-auto bg-gradient-to-b from-green-400 to-green-600 p-6 rounded-xl my-12">
                    <h2 className="text-4xl my-10 text-center text-white font-bold">
                        Register Your Account
                    </h2>
                    <div className="form-control mb-4">
                        <label className="label">
                            <span className="label-text">
                                Your Name
                            </span>
                        </label>
                        <input
                            type="text"
                            name="name"
                            placeholder="Enter your name"
                            className="input input-bordered"
                            required
                        />
                    </div>
                    <div className="form-control mb-4">
                        <label className="label">
                            <span className="label-text text-white">
                                Email Address
                            </span>
                        </label>
                        <input
                            type="email"
                            name="email"
                            placeholder="Enter your email address"
                            className="input input-bordered"
                            required
                        />
                    </div>
                    <div className="form-control mb-4">
                        <label className="label">
                            <span className="label-text text-white">
                                Photo URL
                            </span>
                        </label>
                        <input
                            type="url"
                            name="photo"
                            placeholder="Enter your photo URL"
                            className="input input-bordered"
                            required
                        />
                    </div>
                    <div className="form-control relative mb-4">
                        <label className="label">
                            <span className="label-text text-white">
                                Password
                            </span>
                        </label>
                        <input
                            type={showPassword ? "text" : "password"}
                            name="password"
                            placeholder="Enter your password"
                            className="input input-bordered"
                            required
                        />
                        <span
                            className="absolute right-[2%] bottom-[18%] cursor-pointer text-white"
                            onClick={() => setShowPassword(!showPassword)}>
                            {showPassword ? (
                                <FaEye className="text-blue-600"></FaEye>
                            ) : (
                                <FaEyeSlash className="text-blue-600"></FaEyeSlash>
                            )}
                        </span>
                    </div>
                    <div className="mb-4">
                        <input
                            type="checkbox"
                            name="terms"
                            id="terms"
                            className="mr-2 text-white"
                        />
                        <label className="text-white" htmlFor="terms">
                            Accept our{" "}
                            <a className="text-blue-500" href="#">
                                terms and conditions
                            </a>
                        </label>
                    </div>
                    <div className="form-control my-4">
                        <button className="btn btn-ghost btn-outline bg-white text-green-600 border-none">
                            Register
                        </button>
                    </div>
                    <p className="text-center text-white mt-4">
                        Already have an account?
                        <br /> Or <br />
                        want to login with a social account?
                        <br />
                        Then Go to
                        <Link
                            className="text-blue-600 font-bold ml-2"
                            to={"/login"}>
                            Login Page
                        </Link>
                    </p>
                </form>
            </div>
            <ToastContainer />
        </div>
    );
};

export default Register;
