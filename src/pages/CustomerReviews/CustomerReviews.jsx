import Icon from "../../assets/logo/customer-evaluation-review.svg";
import "animate.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { Helmet } from "react-helmet-async";
AOS.init();
const CustomerReviews = () => {
    return (
        <div>
            <Helmet>
                <title>DreamDwellings-Customer-Reviews</title>
                <link rel="icon" type="image/svg+xml" href={Icon} />
            </Helmet>
            <h1>Here is coming customer reviews</h1>
        </div>
    );
};

export default CustomerReviews;
