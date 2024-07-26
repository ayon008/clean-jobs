import Image from 'next/image';
import image1 from '../../public/assets/image 11.svg'
import image2 from '../../public/assets/image 12.svg'
import image3 from '../../public/assets/image 12 (1).svg';
import image4 from '../../public/assets/image 13.svg';

const Utilities = () => {
    return (
        <div>
            <div className="grid grid-cols-2 gap-20 w-fit mx-auto mt-20">
                <div>
                    <div className="bg-[#C7F2AB] py-16 px-11 rounded-3xl">
                        <Image src={image1} alt="" />
                    </div>
                    <div className="mt-10 space-y-10">
                        <h3 className="inter font-bold text-2xl">Smart Scrubbers: Cleaning Estimators</h3>
                        <p className="inter text-base font-normal">Empower your bidding process with our intuitive Smart Scrubbers calculators, designed to simplify pricing complexities and help you efficiently generate competitive proposals that secure contracts</p>
                    </div>
                    <div className="mt-10">
                        <button className="bg-primary btn text-white">Get start for free</button>
                    </div>
                </div>
                <div>
                    <div className="bg-[#C7F2AB] py-16 px-11 rounded-3xl">
                        <Image src={image2} alt="" />
                    </div>
                    <div className="mt-10 space-y-10">
                        <h3 className="inter font-bold text-2xl">Smart Scrubbers: Cleaning Estimators</h3>
                        <p className="inter text-base font-normal">Empower your bidding process with our intuitive Smart Scrubbers calculators, designed to simplify pricing complexities and help you efficiently generate competitive proposals that secure contracts</p>
                    </div>
                    <div className="mt-10">
                        <button className="bg-primary btn text-white">Get start for free</button>
                    </div>
                </div>
                <div>
                    <div className="bg-[#C7F2AB] py-16 px-11 rounded-3xl">
                        <Image src={image3} alt="" />
                    </div>
                    <div className="mt-10 space-y-10">
                        <h3 className="inter font-bold text-2xl">Smart Scrubbers: Cleaning Estimators</h3>
                        <p className="inter text-base font-normal">Empower your bidding process with our intuitive Smart Scrubbers calculators, designed to simplify pricing complexities and help you efficiently generate competitive proposals that secure contracts</p>
                    </div>
                    <div className="mt-10">
                        <button className="bg-primary btn text-white">Get start for free</button>
                    </div>
                </div>
                <div>
                    <div className="bg-[#C7F2AB] py-16 px-11 rounded-3xl">
                        <Image src={image4} alt="" />
                    </div>
                    <div className="mt-10 space-y-10">
                        <h3 className="inter font-bold text-2xl">Smart Scrubbers: Cleaning Estimators</h3>
                        <p className="inter text-base font-normal">Empower your bidding process with our intuitive Smart Scrubbers calculators, designed to simplify pricing complexities and help you efficiently generate competitive proposals that secure contracts</p>
                    </div>
                    <div className="mt-10">
                        <button className="bg-primary btn text-white">Get start for free</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Utilities;