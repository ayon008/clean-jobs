'use client'
import Image from "next/image";
import logo from '../../../public/assets/Vector.png'
import { FaCreditCard, FaLock, FaStripe } from "react-icons/fa";
import { useState } from "react";

const Page = () => {
    const [select, setSelect] = useState(true)
    console.log(select);

    return (
        <div className="px-28 mt-10 w-[90%] mx-auto">
            <div className="flex items-start justify-between gap-6">
                <div className="w-full lg:w-1/2">
                    <div>
                        <div className="flex items-center gap-1.5">
                            <Image src={logo} alt="logo" className="w-[17.5px] h-[28px]" />
                            <div className="text-left">
                                <span className="text-sm font-bold">
                                    <span className="text-green-500">Clean</span>Jobs
                                </span>
                                <p className="text-[0.525rem] text-primary font-normal">Clean, Green, Reliable</p>
                            </div>
                        </div>
                        <h3 className="text-2xl mt-2 font-semibold">Upgrade your account</h3>
                        <p className="text-primary mt-2">Subscription Details</p>
                    </div>
                    <form className="mt-10 space-y-3 w-full">
                        <label className="form-control w-full ">
                            <div className="label">
                                <span className="label-text text-primary tracking-wider">Billed To</span>
                            </div>
                            <input type="text" placeholder="Shariar Ayon" className="input input-bordered w-full  rounded-lg" />
                        </label>
                        <label className="form-control w-full ">
                            <div className="label">
                                <span className="label-text text-primary tracking-wider">Payment Details</span>
                            </div>
                            <div className="bg-green-100 py-6 pl-6 pr-16 rounded-lg w-fit">
                                <FaCreditCard />
                                <h5 className="text-sm font-medium mt-1">Credit Card</h5>
                            </div>
                        </label>
                        <div className="form-control">
                            <select className="select rounded-lg select-bordered w-full ">
                                <option disabled selected>Country</option>
                                <option>USA</option>
                            </select>
                        </div>
                        <div className="form-control">
                            <input type="text" placeholder="card details" className="input input-bordered w-full  rounded-lg" />
                        </div>
                        <div className="form-control flex flex-row items-center gap-2">
                            <button className="btn w-[30%] bg-[#e5e8eb] text-black font-semibold">Cancel</button>
                            <button type="submit" className="btn w-[70%] bg-green-500 text-white font-semibold">Subscribe</button>
                        </div>
                        <div>
                            <p className="text-primary text-xs">By providing your card information, you accepted our <span className="text-blue-400 hover:underline">terms & conditions</span></p>
                        </div>
                    </form>
                </div>
                <div className="w-full lg:w-1/2">
                    <h3 className="text-left font-semibold text-2xl">Pick your Subscription</h3>
                    <div className={`flex items-center gap-6 py-4 px-6 mt-4 cursor-pointer rounded-lg ${select ? 'border-2 border-green-500 bg-[#f4fcf8]' : 'bg-white border-none'}`} onClick={() => setSelect(true)}>
                        <input type="radio" checked={select} id="radio" name="radiogroup" className="" />
                        <div>
                            <h5 className="text-green-500 text-xl font-medium">Unlimited</h5>
                            <p className="text-primary">$60/six months</p>
                        </div>
                    </div>
                    <div className={`flex items-center gap-6 py-4 px-6 mt-4 cursor-pointer  rounded-lg ${!select ? 'border-2 border-green-500 bg-[#f4fcf8]' : 'bg-white border-none'}`} onClick={() => setSelect(false)}>
                        <input type="radio" checked={!select} id="radio2" name="radiogroup" />
                        <div>
                            <h5 className="text-black text-xl font-medium">Unlimited Annual</h5>
                            <p className="text-primary">$100/annually</p>
                        </div>
                        <p className="bg-[#834CFF] text-white p-2 rounded-lg text-xs">20% Off</p>
                    </div>
                    <hr className=" bg-gray-500 my-6 h-[2px]" />
                    <div className="flex justify-between items-center">
                        <p className="text-2xl font-bold">Total</p>
                        <p className="text-2xl font-bold">${select ? 60 : 100}</p>
                    </div>
                    <div className="mt-10 flex gap-2">
                        <FaLock className="text-primary mt-1" size={'1rem'} />
                        <p className="text-primary">Guaranteed to be safe & secure, ensuring that all transactions are protected with the highest level of security.</p>
                    </div>
                    <div className="flex items-center gap-2 px-4 py-2 rounded-md mt-6 border-2 border-gray-300 w-fit mx-auto">
                        <p className="text-xs text-primary">Powerd By</p>
                        <FaStripe className=" text-primary" size={'3rem'} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Page;