import { useContext } from "react";
import userDefaultPic from "../../../assets/user.png";
import { IoMenu } from "react-icons/io5";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";
const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleSignOut = () => {
        logOut().then().catch();
    };

    const navLinks = (
        <>
            <li>
                <NavLink to="/">Home</NavLink>
            </li>
            {user && (
                <>
                    <li>
                        <NavLink to="/updateProfile">Update Profile</NavLink>
                    </li>
                    <li>
                        <NavLink to="/profile">UserProfile</NavLink>
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
                            role="button"
                            className="btn-ghost lg:hidden">
                            <IoMenu />
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
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
                        <>
                            <div
                                tabIndex={0}
                                role="button"
                                className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                    <img
                                        alt="Tailwind CSS Navbar component"
                                        src={userDefaultPic}
                                    />
                                </div>
                            </div>
                            <button onClick={handleSignOut} className="btn">
                                Sign Out
                            </button>
                        </>
                    ) : (
                        <>
                            <Link to={"/login"}>
                                <button className="btn btn-outline btn-primary mr-0.5 md:mr-4">
                                    Login
                                </button>
                            </Link>
                            <Link to={"/register"}>
                                <button className="btn btn-outline btn-primary">
                                    Register
                                </button>
                            </Link>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Navbar;
