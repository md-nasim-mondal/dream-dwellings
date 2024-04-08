import { IoMenu } from "react-icons/io5";
import {Link, NavLink } from "react-router-dom";
import userDefaultPic from "../../../assets/user.png";
const Navbar = () => {


    // const handleSignOut = () => {
    //     logOut()
    //     .then()
    //     .catch()
    // }

    const navLinks = <>
        <li className="mr-4"><NavLink to='/'>Home</NavLink></li>
        <li className="mr-4"><NavLink to='/updateProfile'>Update Profile</NavLink></li>
        <li className="mr-4"><NavLink to='/profile'>Profile</NavLink></li>
        <li className="mr-4"><NavLink to='/register'>Register</NavLink></li>
    </>
    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div
                            tabIndex={0}
                            role="button"
                            className="btn btn-ghost lg:hidden">
                            <IoMenu />
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navLinks}
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl">DreamDwellings</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navLinks}
                    </ul>
                </div>
                <div className="navbar-end">
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
                <Link to={"/login"}>
                        <button className="btn">Login</button>
                    </Link>
                {/* {user ? (
                    <button onClick={handleSignOut} className="btn">Sign Out</button>
                ) : (
                    <Link to={"/login"}>
                        <button className="btn">Login</button>
                    </Link>
                )} */}
                </div>
            </div>
        </div>
    );
};

export default Navbar;
