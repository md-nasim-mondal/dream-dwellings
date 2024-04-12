import Swal from "sweetalert2";
import { useContext, useState } from "react";
import userDefaultPic from "../../../assets/user.png";
import { IoClose, IoMenu } from "react-icons/io5";
import { NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";
const Navbar = () => {
    const [open, setOpen] = useState(false);
    const { user, logOut, loading } = useContext(AuthContext);
    const photoURL = user?.photoURL;
    const displayName = user?.displayName;
    const navigate = useNavigate();

    if (loading) {
        return (
            <div className=" flex mt-16 justify-center">
                <span className="loading loading-infinity loading-lg"></span>
            </div>
        );
    }

    const handleSignOut = () => {
        logOut()
            .then(() => {
                Swal.fire({
                    text: "LogOut Successful",
                    icon: "success",
                    showConfirmButton: false,
                    position: "top-right",
                    timer: 1500,
                });
                navigate("/");
            })
            .catch((error) => {
                Swal.fire({
                    text: `${error.message}`,
                    icon: "error",
                    showConfirmButton: false,
                    position: "top-right",
                    timer: 1500,
                });
            });
    };

    const navLinks = (
        <>
            <p>
                <NavLink
                    className={({ isActive }) =>
                        !isActive
                            ? "btn lg:text-lg font-semibold btn-outline bg-none border-solid border border-[#23BE0A] rounded-lg text-[#23BE0A]  mb-2 lg:mb-0 md:mr-2"
                            : "btn  btn-outline lg:text-lg bg-[#23BE0A] border-none btn-ghost mb-2 lg:mb-0 md:mr-2"
                    }
                    to="/">
                    Home
                </NavLink>
            </p>
            {user && (
                <>
                    <p>
                        <NavLink
                            className={({ isActive }) =>
                                !isActive
                                    ? "btn lg:text-lg font-semibold btn-outline bg-none border-solid border border-[#23BE0A] rounded-lg text-[#23BE0A]  mb-2 lg:mb-0 md:mr-2"
                                    : "btn  btn-outline lg:text-lg bg-[#23BE0A] border-none btn-ghost mb-2 lg:mb-0 md:mr-2"
                            }
                            to="/updateProfile">
                            Update Profile
                        </NavLink>
                    </p>
                    <p>
                        <NavLink
                            className={({ isActive }) =>
                                !isActive
                                    ? "btn lg:text-lg font-semibold btn-outline bg-none border-solid border border-[#23BE0A] rounded-lg text-[#23BE0A]  mb-2 lg:mb-0 md:mr-2"
                                    : "btn  btn-outline lg:text-lg bg-[#23BE0A] border-none btn-ghost mb-2 lg:mb-0 md:mr-2"
                            }
                            to="/profile">
                            UserProfile
                        </NavLink>
                    </p>
                </>
            )}
            <p>
                <NavLink
                    className={({ isActive }) =>
                        !isActive
                            ? "btn lg:text-lg font-semibold btn-outline bg-none border-solid border border-[#23BE0A] rounded-lg text-[#23BE0A]  mb-2 lg:mb-0 md:mr-2"
                            : "btn  btn-outline lg:text-lg bg-[#23BE0A] border-none btn-ghost mb-2 lg:mb-0 md:mr-2"
                    }
                    to="/reviews">
                    Customer Reviews
                </NavLink>
            </p>
            <p>
                <NavLink
                    className={({ isActive }) =>
                        !isActive
                            ? "btn lg:text-lg font-semibold btn-outline bg-none border-solid border border-[#23BE0A] rounded-lg text-[#23BE0A]  mb-2 lg:mb-0 md:mr-2"
                            : "btn  btn-outline lg:text-lg bg-[#23BE0A] border-none btn-ghost mb-2 lg:mb-0 md:mr-2"
                    }
                    to="/contact">
                    Contact Us
                </NavLink>
            </p>
        </>
    );
    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown relative">
                        <div
                            tabIndex={0}
                            onClick={() => setOpen(!open)}
                            role="button"
                            className="btn-ghost lg:hidden">
                            {open ? (
                                <IoClose className="text-2xl" />
                            ) : (
                                <IoMenu className="text-2xl" />
                            )}
                        </div>
                        <div className="menu menu-sm dropdown-content absolute z-10 lg:hidden mt-3 md:mt-5 ">
                            <div
                                className={`list-none p-4 shadow bg-gray-200
                        ${
                            open ? "" : "hidden"
                        } rounded-box w-auto flex flex-col`}>
                                {navLinks}
                            </div>
                        </div>
                    </div>
                    <NavLink className="btn-ghost md:text-3xl">
                        <img
                            className="w-20 md:w-24 lg:w-40"
                            src="/public/logo3.svg"
                            alt=""
                        />
                    </NavLink>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">{navLinks}</ul>
                </div>
                <div className="navbar-end">
                    {user ? (
                        <div className="flex items-center">
                            <div
                                className="tooltip tooltip-left"
                                data-tip={displayName}>
                                <div
                                    tabIndex={0}
                                    role="button"
                                    className="btn btn-ghost btn-circle avatar">
                                    <div className="w-12 rounded-full">
                                        <img
                                            alt="Photo Coming Soon.."
                                            src={photoURL || userDefaultPic}
                                        />
                                    </div>
                                </div>
                            </div>
                            <button
                                onClick={handleSignOut}
                                className="btn btn-sm md:btn-md ml-0.5 md:ml-4 text-lg font-semibold btn-outline bg-none border-solid border border-[#23BE0A] rounded-lg text-[#23BE0A]">
                                LogOut
                            </button>
                        </div>
                    ) : (
                        <div className="flex flex-col md:flex-row gap-2">
                            <NavLink
                                className={({ isActive }) =>
                                    !isActive
                                        ? "btn btn-sm md:btn-md mr-0.5 md:mr-4 text-lg font-semibold btn-outline bg-none border-solid border border-[#23BE0A] rounded-lg text-[#23BE0A]"
                                        : "btn btn-sm md:btn-md btn-outline bg-[#23BE0A] border-none  btn-ghost mr-0.5 md:mr-4"
                                }
                                to={"/login"}>
                                <button>Login</button>
                            </NavLink>
                            <NavLink
                                className={({ isActive }) =>
                                    !isActive
                                        ? "btn p btn-sm md:btn-md text-lg font-semibold btn-outline bg-none border-solid border border-[#23BE0A] rounded-lg text-[#23BE0A]"
                                        : "btn btn-sm md:btn-md btn-outline bg-[#23BE0A] border-none btn-ghost"
                                }
                                to={"/register"}>
                                <button>Register</button>
                            </NavLink>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};
export default Navbar;
