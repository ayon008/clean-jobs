'use client'
import Lottie from "lottie-react";
import animation from '../../public/assets/Animation - 1720847517077.json'

const Sale = () => {
    return (
        <div>
            <Lottie animationData={animation} loop={true} className="h-auto w-[50px]" />
        </div>
    );
};

export default Sale;