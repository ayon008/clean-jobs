'use client'

import Modal from "@/Components/Modal";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import logo from "../../public/assets/Vector.png";
import Button from "@/Components/Button";

const Navbar = () => {
    const user = true;
    const [isBlue, setIsBlue] = useState(false);

    const handleClick = () => {
        setIsBlue(!isBlue);
    };


    const navItems = <>
        {
            user ?
                <>
                    <div className="dropdown dropdown-end z-50">
                        <div tabIndex={0} role="button" className="text-base tracking-wider flex items-center gap-2 font-normal hover:text-blue-600"><span>Janitorial Appointments</span> <FaChevronDown size={'0.7rem'} /></div>
                        <ul tabIndex={0} className={`dropdown-content menu bg-base-100 mt-4 z-[1] w-[350px] border border-gray-200 py-6 shadow rounded-none px-0`}>
                            <li className="text-sm text-primary hover:bg-white px-6">Home</li>
                            <li className="text-base px-6 hover:bg-gray-200 cursor-pointer py-1">Dashboard</li>
                            <hr className="mt-2" />
                            <li className="text-sm text-primary hover:bg-white px-6 mt-4">Search</li>
                            <li className="text-base px-6 hover:bg-gray-200 cursor-pointer py-1" onClick={() => document.getElementById('my_modal_3').showModal()}>Exclusive Leads</li>
                            <li className="text-base px-6 hover:bg-gray-200 cursor-pointer py-1" onClick={() => document.getElementById('my_modal_4').showModal()}>LayUps (Warm Leads)</li>
                            <li className="text-base px-6 hover:bg-gray-200 cursor-pointer py-1" onClick={() => document.getElementById('my_modal_5').showModal()}>Opportunities</li>
                            <Link href='/decisionmakersinglesearch'><li className="text-base px-6 hover:bg-gray-200 cursor-pointer py-1">Single Decision Maker</li></Link>
                            <Link href='/decisionmakersearch'><li className="text-base px-6 hover:bg-gray-200 cursor-pointer py-1">Decision Makers</li></Link>
                            <Link href="/localsearch"><li className="text-base px-6 hover:bg-gray-200 cursor-pointer py-1">Local Business</li></Link>
                            <hr className="mt-2" />
                            <li className="text-sm text-primary hover:bg-white px-6 mt-4">List</li>
                            <Link href="/leadlist">
                                <li className="text-base px-6 hover:bg-gray-200 cursor-pointer py-1">Lead Lists</li>
                            </Link>
                            <Link href='/masterlist'>
                                <li className="text-base px-6 hover:bg-gray-200 cursor-pointer py-1">Master Lists</li>
                            </Link>
                            <li className="text-base px-6 hover:bg-gray-200 cursor-pointer py-1">Solicitations Lists</li>
                            <hr className="mt-2" />
                            <li className="text-sm text-primary hover:bg-white px-6 mt-4">Resources</li>
                            <li className="text-base px-6 hover:bg-gray-200 cursor-pointer py-1">Blog</li>
                            <li className="text-base px-6 hover:bg-gray-200 cursor-pointer py-1">Free Lists</li>
                            <li className="text-base px-6 hover:bg-gray-200 cursor-pointer py-1">Pay Rate Checker</li>
                            <li className="text-base px-6 hover:bg-gray-200 cursor-pointer py-1">Cleaning Calculators</li>
                            <li className="text-base px-6 hover:bg-gray-200 cursor-pointer py-1">Help</li>
                            <hr className="mt-2" />
                            <li className="text-sm text-primary hover:bg-white px-6 mt-4">Company Information</li>
                            <Link href={'/profile'}><li className="text-base px-6 hover:bg-gray-200 cursor-pointer py-1">Profile</li></Link>
                            <li className="text-base px-6 hover:bg-gray-200 cursor-pointer py-1">Email Credentials</li>
                            <li className="text-base px-6 hover:bg-gray-200 cursor-pointer py-1">Email Templates</li>
                            <li className="text-base px-6 hover:bg-gray-200 cursor-pointer py-1">My Subscription</li>
                            <hr className="mt-2" />
                            <li className="text-base px-6 hover:bg-gray-200 cursor-pointer py-1 mt-4">Logout</li>
                        </ul>
                    </div>
                </>
                :
                <>
                    <li>
                        <Link className="text-sm text-primary" href={'/login'}>Login</Link>
                    </li>

                    <li>
                        <Link className="text-sm text-primary" href={'/register'}>Sign Up</Link>
                    </li>

                    <li>
                        <Link className="text-sm text-primary" href={'/blog'}>Blog</Link>
                    </li>
                    <li>
                        <Link className="text-sm text-primary" href={'/about'}>About Us</Link>
                    </li>
                </>
        }
    </>
    return (
        <div className="navbar h-[80px] px-16">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        {navItems}
                    </ul>
                </div>
                <a href="/" className="btn btn-ghost">
                    <Image src={logo} alt="logo" className="w-[25px] h-[40px]" />
                    <div className="text-left">
                        <span className="text-lg font-bold">
                            <span className="text-green-500">Clean</span>Jobs
                        </span>
                        <p className="text-xs text-primary font-normal">Clean, Green, Reliable</p>
                    </div>
                </a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 font-semibold text-lg">
                    {navItems}
                </ul>
            </div>

            <div className="navbar-end lg:flex hidden">
                <button className="btn bg-green-500 text-white px-8 py-0">Pricing</button>
            </div>

            <Modal id={'my_modal_3'} name={'Find Exclusive Leads By State'} />
            <Modal id={'my_modal_4'} name={'Search LayUps By State'} />
            <Modal id={'my_modal_5'} name={'Search By State'} />
        </div>
    );
};

export default Navbar;