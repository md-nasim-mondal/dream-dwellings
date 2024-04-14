import Icon from "../../assets/logo/customer-evaluation-review.svg";
import "animate.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";

import { toast, ToastContainer } from "react-toastify";
import { Helmet } from "react-helmet-async";
import { IoIosStar } from "react-icons/io";
AOS.init();
const CustomerReviews = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(()=> {
        fetch("/reviews.json")
        .then(res => res.json())
        .then(data => setReviews(data));
    },[])
    const handleReviewsButton = () => {
        toast("This section is under maintaining process, Please be patient..........");
    };
    return (
        <div className="w-[94%] md:w-full mx-auto">
            <Helmet>
                <title>DreamDwellings-Customer-Reviews</title>
                <link rel="icon" type="image/svg+xml" href={Icon} />
            </Helmet>
            <div>
            <h1 className=" text-2xl md:text-3xl lg:text-5xl text-black font-bold text-center pt-16 pb-6">Here is Our Customer Reviews </h1>
            <p className="text-lg text-center w-[94%] md:w-[90%] mx-auto text-black font-normal pb-12">Discover why DreamDwellings is the go-to destination for discerning home buyers. Read testimonials from satisfied clients who found their perfect home with us. Join the ranks of delighted homeowners and experience excellence in real estate.</p>
            </div>
            <div className="p-8 border border-orange-500 rounded-2xl ">
                {
                    reviews.map((review, idx) => <div className="p-3 lg:p-6 border-2 border-teal-600 rounded-xl space-y-4 mb-4"  key={idx}>
                        <div className="flex justify-between gap-8 text-black flex-wrap">
                            <h2 className="text-2xl font-semibold">User Name: {review.user_name}</h2>
                            <p className="font-semibold">time: {review.time}</p>
                        </div>
                        <div className="flex flex-wrap justify-between gap-8 text-black font-medium">
                            <p className="text-lg">{review.comment}</p>
                            <p className="text-lg flex items-center">{review.rating_star} <IoIosStar /></p>
                        </div>
                    </div> )
                }
                <div className="flex flex-col md:flex-row gap-4">
                <textarea name="" id=""  className="flex-1 rounded-lg px-4 py-2 h-24 lg:h-40" placeholder="Write Your Review Here"></textarea>
                <button type="submit" onClick={handleReviewsButton} className="btn  btn-active bg-green-600 text-black text-sm">Add to Reviews</button>
                </div>
            </div>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default CustomerReviews;
