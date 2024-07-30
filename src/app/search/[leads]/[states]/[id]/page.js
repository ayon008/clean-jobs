import Dot from "@/Components/Dot";
import FireIcon from "@/Components/FireIcon";
import RedDot from "@/Components/RedDot";
import { FaArrowRight } from "react-icons/fa";

const page = () => {
    const sold = true;
    return (
        <div className="pt-40 pb-20 px-10">
            <div>
                {
                    sold ?
                        <div className="flex items-center bg-red-100 rounded-[20px] py-[3px] pl-[10px] pr-[20px] w-fit mx-auto">
                            <RedDot />
                            <p className="text-red-600
                                     inter text-sm font-medium">Sold</p>
                        </div>
                        :
                        <div className="flex items-center bg-[#ECFDF3] rounded-[20px] py-[3px] pl-[10px] pr-[20px] w-fit mx-auto">
                            <Dot />
                            <p className="text-[#027A48] inter text-sm font-medium">Available</p>
                        </div>
                }
                <div className="flex justify-center items-end">
                    <h3 className="inter text-7xl font-black text-center mt-6">Office Cleaning</h3>
                    <FireIcon width={"30"} />
                </div>
                <p className="text-center text-[#585860] font-medium text-2xl mt-4">Posted 5 month ago</p>
                <div className="mt-10 grid grid-cols-3 gap-10">
                    <div className="bg-white p-12 border-4 border-[#F4F4F5] rounded-[24px]">
                        <h4 className="text-[#246532] poppins text-xs font-black px-4 py-2 w-fit bg-[#DDFFE4] rounded-[100px] mx-auto">Location</h4>
                        <p className="text-[#72777A] inter text-sm font-medium text-center mt-4">Oakley Avenue, Hammond, IN</p>
                    </div>
                    <div className="bg-white p-12 border-4 border-[#F4F4F5] rounded-[24px]">
                        <h4 className="text-[#246532] poppins text-xs font-black px-4 py-2 w-fit bg-[#DDFFE4] rounded-[100px] mx-auto">Type</h4>
                        <p className="text-[#72777A] inter text-sm font-medium text-center mt-4">Office</p>
                    </div>
                    <div className="bg-white p-12 border-4 border-[#F4F4F5] rounded-[24px]">
                        <h4 className="text-[#246532] poppins text-xs font-black px-4 py-2 w-fit bg-[#DDFFE4] rounded-[100px] mx-auto">Scope</h4>
                        <p className="text-[#72777A] inter text-sm font-medium text-center mt-4">General Cleaning - Vacuum, dust, mop and clean bathrooms, etc.</p>
                    </div>
                    <div className="bg-white p-12 border-4 border-[#F4F4F5] rounded-[24px]">
                        <h4 className="text-[#246532] poppins text-xs font-black px-4 py-2 w-fit bg-[#DDFFE4] rounded-[100px] mx-auto">Cleaning</h4>
                        <p className="text-[#72777A] inter text-sm font-medium text-center mt-4">Outsourced</p>
                    </div>
                    <div className="bg-white p-12 border-4 border-[#F4F4F5] rounded-[24px]">
                        <h4 className="text-[#246532] poppins text-xs font-black px-4 py-2 w-fit bg-[#DDFFE4] rounded-[100px] mx-auto">Size</h4>
                        <p className="text-[#72777A] inter text-sm font-medium text-center mt-4">2500sf</p>
                    </div>
                    <div className="bg-white p-12 border-4 border-[#F4F4F5] rounded-[24px]">
                        <h4 className="text-[#246532] poppins text-xs font-black px-4 py-2 w-fit bg-[#DDFFE4] rounded-[100px] mx-auto">Frequency</h4>
                        <p className="text-[#72777A] inter text-sm font-medium text-center mt-4">1 day/week (weekends)</p>
                    </div>
                    <div className="bg-white p-12 border-4 border-[#F4F4F5] rounded-[24px]">
                        <h4 className="text-[#246532] poppins text-xs font-black px-4 py-2 w-fit bg-[#DDFFE4] rounded-[100px] mx-auto">Note</h4>
                        <p className="text-[#72777A] inter text-sm font-medium text-center mt-4">They are very dissatisfied with their current cleaning service</p>
                    </div>
                    <div className="bg-white p-12 border-4 border-[#F4F4F5] rounded-[24px]">
                        <h4 className="text-[#246532] poppins text-xs font-black px-4 py-2 w-fit bg-[#DDFFE4] rounded-[100px] mx-auto">Posted</h4>
                        <p className="text-[#72777A] inter text-sm font-medium text-center mt-4">20 Jan 2022 (5 months ago)</p>
                    </div>
                </div>
                {
                    sold ?
                        <div className="w-1/2 mx-auto mt-10">
                            <h3 className="poppins text-6xl font-semibold text-center">Oops! You missed</h3>
                            <p className="poppins text-xl font-medium text-center mt-5">Looks like you missed this one. Get an Unlimited subscription and get instant notifications when leads are posted</p>
                        </div>
                        :
                        <div className="w-1/2 mx-auto mt-10">
                            <h3 className="poppins text-6xl font-semibold text-center">Buy This Lead</h3>
                            <p className="poppins text-xl font-medium text-center mt-5">The preset walkthrough date for this exclusive lead is 1/24/2024. Walkthrough dates and times may possibly be changed after purchasing but there is no guarantee.</p>
                            <div className="w-3/4 mx-auto mt-10">
                                <button className="bg-primary flex items-center gap-2 justify-center w-full rounded-[22px] font-medium text-xl py-7 px-16">
                                    <span>Only $50</span>
                                    <FaArrowRight />
                                </button>
                                <p className="mt-5 poppins font-medium text-base text-center">Get an Unlimited subscription and get 10% off of all exclusive leads!</p>
                            </div>
                        </div>
                }
            </div>
        </div>
    );
};

export default page;