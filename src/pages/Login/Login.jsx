import Swal from "sweetalert2";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { FaEye, FaEyeSlash, FaGithub, FaGoogle } from "react-icons/fa";
import Bg from "../../assets/images/bg-4.jpg";
import Icon from "../../assets/logo/login-3-svgrepo-com.svg";
import "animate.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { Helmet } from "react-helmet-async";
AOS.init();

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
                    text: "LogIn Successfully With Github!!",
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
        <div
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="1600"
            className="p-4 md:p-8 w-[94%] md:w-full mx-auto rounded-3xl bg-cover bg-center bg-no-repeat md:min-h-screen bg-opacity-60 my-10"
            style={{ backgroundImage: `url(${Bg})` }}>
            <Helmet>
                <title>DreamDwellings-User-Login</title>
                <link rel="icon" type="image/svg+xml" href={Icon} />
            </Helmet>
            <div
                data-aos="flip-down"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="1600">
                <form
                    onSubmit={handleLogin}
                    className="card-body  md:w-3/4 lg:w-1/2 mx-auto bg-primary-content bg-opacity-30 p-2 md:p-6 lg:p-10  rounded-xl my-12 animate__animated animate_zoomInUp">
                    <h2 className=" animate__animated hover:animate__backInDown  text-3xl font-bold text-black my-10 text-center">
                        Login your account
                    </h2>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-semibold text-lg text-black">
                                Email address
                            </span>
                        </label>
                        <input
                            type="email"
                            name="email"
                            placeholder="Enter your email address"
                            className="w-full px-4 py-3 rounded-md border focus:border-4 border-gray-700 bg-gray-900 text-gray-100 focus:border-green-600"
                            required
                        />
                    </div>
                    <div className="form-control relative">
                        <label className="label">
                            <span className="label-text font-semibold text-lg text-black">
                                Password
                            </span>
                        </label>
                        <input
                            type={showPassword ? "text" : "password"}
                            name="password"
                            placeholder="Enter your password"
                            className="w-full px-4 py-3 rounded-md border focus:border-4 border-gray-700 bg-gray-900 text-gray-100 focus:border-green-600"
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
                                className="label-text text-black font-semibold text-base text-black-alt link link-hover">
                                Forgot password?
                            </a>
                        </label>
                    </div>
                    {loginError && <p className="text-red-500">{loginError}</p>}
                    <div className="form-control mt-6">
                        <button className="btn btn-ghost w-full text-lg font-semibold text-black btn-outline bg-[#23BE0A] border-none hover:md:w-[50%] mx-auto">
                            Login
                        </button>
                    </div>
                    <p className="text-center text-lg text-black font-medium mt-4 animate__animated animate_fadeInBottomLeft">
                        Don&apos;t have an account?{" "}
                        <Link
                            className=" text-blue-600 font-bold underline pl-1"
                            to={"/register"}>
                            Register
                        </Link>{" "}
                    </p>
                    <h2 className="text-3xl font-bold text-center">Or</h2>
                    <div className="flex flex-col md:flex-row gap-4 justify-center animate__animated  animate_fadeInBottomRight">
                        <button
                            onClick={handleGoogleLogin}
                            className="btn btn-outline btn-ghost text-black text-lg font-semibold">
                            <FaGoogle className="text-2xl" />
                            Login With Google
                        </button>
                        <button
                            onClick={handleGithubLogin}
                            className="btn btn-outline btn-ghost text-lg text-black font-semibold">
                            <FaGithub className="text-2xl" />
                            Login With Github
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;
