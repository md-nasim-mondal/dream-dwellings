import Swal from "sweetalert2";
import { useContext, useState } from "react";
import userDefaultPic from "../../../assets/user.png";
import { IoClose, IoMenu } from "react-icons/io5";
import { NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";
import Logo from "../../../assets/logo/logo22.png";
import "animate.css";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();
const Navbar = () => {
    const [open, setOpen] = useState(false);
    const { user, logOut } = useContext(AuthContext);
    const photoURL = user?.photoURL;
    const displayName = user?.displayName;
    const navigate = useNavigate();

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
            <li>
                <NavLink
                    onClick={() => setOpen(false)}
                    className={({ isActive }) =>
                        !isActive
                            ? "btn z-[50] xl:text-lg font-semibold btn-outline bg-none border-solid border border-[#23BE0A] rounded-lg text-[#23BE0A]  mb-2  md:mr-2"
                            : "btn  btn-outline xl:text-lg text-black bg-[#23BE0A] border-none btn-ghost mb-2  md:mr-2"
                    }
                    to="/">
                    Home
                </NavLink>
            </li>
            {user && (
                <>
                    <li>
                        <NavLink
                            onClick={() => setOpen(false)}
                            className={({ isActive }) =>
                                !isActive
                                    ? "btn z-[50] xl:text-lg font-semibold btn-outline bg-none border-solid border border-[#23BE0A] rounded-lg text-[#23BE0A]  mb-2  md:mr-2"
                                    : "btn  btn-outline xl:text-lg text-black bg-[#23BE0A] border-none btn-ghost mb-2  md:mr-2"
                            }
                            to="/updateProfile">
                            Update Profile
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            onClick={() => setOpen(false)}
                            className={({ isActive }) =>
                                !isActive
                                    ? "btn z-[50] xl:text-lg font-semibold btn-outline bg-none border-solid border border-[#23BE0A] rounded-lg text-[#23BE0A]  mb-2  md:mr-2"
                                    : "btn  btn-outline xl:text-lg text-black bg-[#23BE0A] border-none btn-ghost mb-2  md:mr-2"
                            }
                            to="/profile">
                            UserProfile
                        </NavLink>
                    </li>
                </>
            )}
            <li>
                <NavLink
                    onClick={() => setOpen(false)}
                    className={({ isActive }) =>
                        !isActive
                            ? "btn z-[50] xl:text-lg font-semibold btn-outline bg-none border-solid border border-[#23BE0A] rounded-lg text-[#23BE0A]  mb-2  md:mr-2"
                            : "btn  btn-outline xl:text-lg text-black bg-[#23BE0A] border-none btn-ghost mb-2  md:mr-2"
                    }
                    to="/reviews">
                    Customer Reviews
                </NavLink>
            </li>
            <li>
                <NavLink
                    onClick={() => setOpen(false)}
                    className={({ isActive }) =>
                        !isActive
                            ? "btn z-[50] xl:text-lg font-semibold btn-outline bg-none border-solid border border-[#23BE0A] rounded-lg text-[#23BE0A]  mb-2  md:mr-2"
                            : "btn  btn-outline xl:text-lg text-black bg-[#23BE0A] border-none btn-ghost mb-2  md:mr-2"
                    }
                    to="/contact">
                    Contact Us
                </NavLink>
            </li>
        </>
    );
    return (
        <div>
            <div className="navbar bg-gray-300 rounded-3xl md:p-4 bg-opacity-40 ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div
                            tabIndex={0}
                            role="button"
                            onClick={() => setOpen(!open)}
                            className={`btn-ghost 
                            ${user ? "xl:hidden" : "lg:hidden"}
                            `}>
                            {open ? (
                                <IoClose className="text-2xl" />
                            ) : (
                                <IoMenu className="text-2xl" />
                            )}
                        </div>
                        <ul
                            tabIndex={0}
                            //  dropdown-content
                            className={`menu menu-sm
                             absolute mt-3 z-[50] p-2 shadow 
                             ${user ? "xl:hidden" : "lg:hidden"}
                            ${open ? "" : "hidden"}
                             bg-base-100 rounded-box w-52`}>
                            {navLinks}
                        </ul>
                    </div>
                    <NavLink className="animate__animated animate__backInRight btn-ghost md:text-2xl xl:text-3xl flex gap-2 text-black items-center font-bold flex-wrap">
                        <img
                            className="w-10 lg:w-12 xl:w-14"
                            src={Logo}
                            alt="Logo Coming Soon"
                        />
                        <p>
                            Dream
                            <span className="text-green-600">Dwellings</span>
                        </p>
                    </NavLink>
                </div>
                <div
                    className={`animate__animated animate__backInUp navbar-center hidden 
                ${user ? "xl:flex" : "lg:flex"}
                `}>
                    <ul className="menu menu-horizontal px-1">{navLinks}</ul>
                </div>
                <div className="animate__animated animate__backInLeft navbar-end">
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
                                onClick={() => {
                                    setOpen(false);
                                    handleSignOut();
                                }}
                                className="btn btn-sm md:btn-md ml-0.5 md:ml-4 text-lg font-semibold btn-outline bg-none border-solid border border-[#23BE0A] rounded-lg text-[#23BE0A]">
                                LogOut
                            </button>
                        </div>
                    ) : (
                        <div className="flex flex-col md:flex-row gap-2">
                            <NavLink
                                onClick={() => setOpen(false)}
                                className={({ isActive }) =>
                                    !isActive
                                        ? "btn btn-sm md:btn-md mr-0.5 md:mr-4 text-lg font-semibold btn-outline bg-none border-solid border border-[#23BE0A] rounded-lg text-[#23BE0A]"
                                        : "btn btn-sm md:btn-md btn-outline bg-[#23BE0A] border-none  btn-ghost mr-0.5 md:mr-4"
                                }
                                to={"/login"}>
                                <button>Login</button>
                            </NavLink>
                            <NavLink
                                onClick={() => setOpen(false)}
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
