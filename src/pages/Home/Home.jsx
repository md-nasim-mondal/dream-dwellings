import { useContext } from "react";
import AllEstates from "../../components/AllEstates/AllEstates";
import Sliders from "../../components/Sliders/Sliders";
import { AuthContext } from "../../providers/AuthProvider";
import Icon from "../../assets/logo/logo.svg"
import "animate.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { Helmet } from "react-helmet-async";
AOS.init();

const Home = () => {
    const { loading } = useContext(AuthContext);
    if (loading) {
        return (
            <div className=" flex mt-16 justify-center">
                <span className="loading loading-infinity loading-lg"></span>
            </div>
        );
    }
    return (
        <div>
            <Helmet>
                <title>DreamDwellings || Home</title>
                <link
                    rel="icon"
                    type="image/svg+xml"
                    href={Icon}
                />
            </Helmet>
            <Sliders></Sliders>
            <AllEstates></AllEstates>
        </div>
    );
};

export default Home;
