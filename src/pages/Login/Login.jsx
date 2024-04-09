import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState(null);

    const { signIn } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    const handleLogin = (e) => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const email = form.get("email");
        const password = form.get("password");
        setError(null)

        signIn(email, password)
            .then(() => {
                // navigate after login
                navigate(location?.state ? location.state : "/");
            })
            .catch((error) => {
                toast.error("Please check your email and password!!");
                setError(error.message);
            });

        if(error === null){
            toast.success("Successfully Login!!");
        }    
    };
    return (
        <div>
            <div>
                <h2 className="text-3xl my-10 text-center">
                    Login your account
                </h2>
                <form
                    onSubmit={handleLogin}
                    className="card-body md:w-3/4 lg:w-1/2 mx-auto bg-primary-content p-2 md:p-6 lg:p-10  rounded-xl">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email address</span>
                        </label>
                        <input
                            type="email"
                            name="email"
                            placeholder="Enter your email address"
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
                            className="absolute right-[2%] top-[45%]"
                            onClick={() => setShowPassword(!showPassword)}>
                            {showPassword ? (
                                <FaEye></FaEye>
                            ) : (
                                <FaEyeSlash></FaEyeSlash>
                            )}
                        </span>
                        {
                            error && <p className="text-red-600">{error}</p>
                        }
                        <label className="label">
                            <a
                                href="#"
                                className="label-text-alt link link-hover">
                                Forgot password?
                            </a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Login</button>
                    </div>
                    <p className="text-center mt-4">
                        Don&apos;t have an account?{" "}
                        <Link
                            className=" text-blue-600 font-bold"
                            to={"/register"}>
                            Register
                        </Link>{" "}
                    </p>
                </form>
            </div>
            <ToastContainer />
        </div>
    );
};

export default Login;
