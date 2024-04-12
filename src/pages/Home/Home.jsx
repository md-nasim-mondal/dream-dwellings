import { useContext } from "react";
import AllEstates from "../../components/AllEstates/AllEstates";
import Sliders from "../../components/Sliders/Sliders";
import { AuthContext } from "../../providers/AuthProvider";


const Home = () => {
    const {loading} = useContext(AuthContext);
    if (loading) {
        return (
            <div className=" flex mt-16 justify-center">
                <span className="loading loading-infinity loading-lg"></span>
            </div>
        );
    }
    return (
        <div>
            <Sliders></Sliders>
            <AllEstates></AllEstates>
        </div>
    );
};

export default Home;