import Swal from "sweetalert2";
import { useContext, useState } from "react";
import userDefaultPic from "../../../assets/user.png";
import { IoClose, IoMenu } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";
const Navbar = () => {
    const [open, setOpen] = useState(false);
    const { user, logOut } = useContext(AuthContext);
    const photoURL = user?.photoURL;
    const displayName = user?.displayName;

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
                    className={({ isActive }) =>
                        !isActive
                            ? "btn btn-xs md:btn-md text-lg font-semibold btn-outline bg-none border-solid border border-[#23BE0A] rounded-lg text-[#23BE0A]  mr-0.5 md:mr-2"
                            : "btn btn-xs md:btn-md btn-outline bg-[#23BE0A] border-none btn-ghost mr-0.5 md:mr-2"
                    }
                    to="/">
                    Home
                </NavLink>
            </li>
            {user && (
                <>
                    <li>
                        <NavLink
                            className={({ isActive }) =>
                                !isActive
                                    ? "btn btn-xs md:btn-md text-lg font-semibold btn-outline bg-none border-solid border border-[#23BE0A] rounded-lg text-[#23BE0A]  mr-0.5 md:mr-2"
                                    : "btn btn-xs md:btn-md btn-outline bg-[#23BE0A] border-none btn-ghost mr-0.5 md:mr-2"
                            }
                            to="/updateProfile">
                            Update Profile
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            className={({ isActive }) =>
                                !isActive
                                    ? "btn btn-xs md:btn-md text-lg font-semibold btn-outline bg-none border-solid border border-[#23BE0A] rounded-lg text-[#23BE0A]  mr-0.5 md:mr-2"
                                    : "btn btn-xs md:btn-md btn-outline bg-[#23BE0A] border-none btn-ghost  mr-0.5 md:mr-2"
                            }
                            to="/profile">
                            UserProfile
                        </NavLink>
                    </li>
                </>
            )}
        </>
    );
    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
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
                        <ul
                            tabIndex={0}
                            className={`menu menu-sm dropdown-content
                                ${open ? "" : "hidden"}
                                mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52`}>
                            {navLinks}
                        </ul>
                    </div>
                    <a className="btn-ghost md:text-3xl">DreamDwellings</a>
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
                                            alt="Tailwind CSS Navbar component"
                                            src={photoURL || userDefaultPic}
                                        />
                                    </div>
                                </div>
                            </div>
                            <button
                                onClick={handleSignOut}
                                className="btn btn-sm md:btn-md  btn-neutral  bg-[#23BE0A] border-none ml-2">
                                Sign Out
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
