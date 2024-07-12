'use client'
import Lottie from "lottie-react";
import animation from '../../public/assets/Animation - 1719510545811.json'

const Banner = () => {
    return (
        <Lottie animationData={animation} loop={true} className="h-[400px]" />
    );
};

export default Banner;