import { Outlet } from "react-router-dom";
import Navbar from "../pages/Shared/Navbar/Navbar";
import 'animate.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();


const Root = () => {
    return (
        <div className="container mx-auto font-poppins">
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;
