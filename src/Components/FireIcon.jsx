'use client'

import Lottie from "lottie-react";
import animation from '../../public/assets/Animation - 1720847116099.json'

const FireIcon = () => {
    return (
        <Lottie animationData={animation} loop={true} title="popular" className="h-auto w-[30px]" />
    );
};

export default FireIcon;