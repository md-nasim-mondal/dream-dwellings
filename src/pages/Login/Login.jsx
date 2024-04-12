import Swal from "sweetalert2";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Login = () => {
    const [loginError, setLoginError] = useState(null);
    const [showPassword, setShowPassword] = useState(false);

    const { signIn, googleLogin, setUser, githubLogin } =
        useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    const handleLogin = (e) => {
        e.preventDefault();
        console.log(e.currentTarget);
        const form = new FormData(e.currentTarget);
        const email = form.get("email");
        const password = form.get("password");
        console.log(email, password);

        setLoginError(null);

        signIn(email, password)
            .then((result) => {
                setUser(result.user);

                // navigate after login
                navigate(location?.state ? location.state : "/");
                Swal.fire({
                    text: "LogIn Successfully!!",
                    icon: "success",
                    showConfirmButton: false,
                    position: "top-right",
                    timer: 1500,
                });
            })
            .catch((error) => {
                Swal.fire({
                    text: "Please Check Your Email and Password than Try Again!!",
                    icon: "error",
                    showConfirmButton: false,
                    position: "top-right",
                    timer: 1500,
                });
                setLoginError(error.message);
            });
    };
    const handleGoogleLogin = (e) => {
        e.preventDefault();
        googleLogin()
            .then((result) => {
                setUser(result.user);
                // navigate(location.state)
                navigate(location?.state ? location.state : "/");
                Swal.fire({
                    text: "LogIn Successfully With Google!!",
                    icon: "success",
                    showConfirmButton: false,
                    position: "top-right",
                    timer: 1500,
                });
            })
            .catch((error) => {
                Swal.fire({
                    text: "Please Check Your Email and Password than Try Again!!",
                    icon: "error",
                    showConfirmButton: false,
                    position: "top-right",
                    timer: 1500,
                });
                setLoginError(error.message);
            });
    };
    const handleGithubLogin = (e) => {
        e.preventDefault();
        githubLogin()
            .then((result) => {
                setUser(result.user);
                // navigate(location.state)
                navigate(location?.state ? location.state : "/");
                Swal.fire({
                    text: "LogIn Successfully With Google!!",
                    icon: "success",
                    showConfirmButton: false,
                    position: "top-right",
                    timer: 1500,
                });
            })
            .catch((error) => {
                Swal.fire({
                    text: "Please Check Your Email and Password than Try Again!!",
                    icon: "error",
                    showConfirmButton: false,
                    position: "top-right",
                    timer: 1500,
                });
                setLoginError(error.message);
            });
    };
    return (
        <div>
            <div>
                <form
                    onSubmit={handleLogin}
                    className="card-body md:w-3/4 lg:w-1/2 mx-auto bg-primary-content p-2 md:p-6 lg:p-10  rounded-xl my-12">
                    <h2 className="text-3xl my-10 text-center">
                        Login your account
                    </h2>
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
                        <label className="label">
                            <a
                                href="#"
                                className="label-text-alt link link-hover">
                                Forgot password?
                            </a>
                        </label>
                    </div>
                    {loginError && <p className="text-red-500">{loginError}</p>}
                    <div className="form-control mt-6">
                        <button className="btn btn-ghost  btn-outline bg-[#23BE0A] border-none">
                            Login
                        </button>
                    </div>
                    <p className="text-center mt-4">
                        Don&apos;t have an account?{" "}
                        <Link
                            className=" text-blue-600 font-bold"
                            to={"/register"}>
                            Register
                        </Link>{" "}
                    </p>
                    <h2 className="text-3xl font-bold text-center">Or</h2>
                    <div className="flex gap-4 justify-center">
                        <button
                            onClick={handleGoogleLogin}
                            className="btn btn-outline btn-ghost">
                            Login With Google
                        </button>
                        <button
                            onClick={handleGithubLogin}
                            className="btn btn-outline btn-ghost">
                            Login With Github
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;
