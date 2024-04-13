import { Outlet } from "react-router-dom";
import Navbar from "../pages/Shared/Navbar/Navbar";
import 'animate.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Footer from "../pages/Shared/Footer/Footer";
AOS.init();


const Root = () => {
    return (
        <div className="mx-auto font-poppins">
            <div className="container mx-auto">
            <Navbar></Navbar>
            <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Root;
