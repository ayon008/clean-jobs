'use client'
import Modal from "@/Components/Modal";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import { usePathname } from "next/navigation";
import { useSpring, animated } from "@react-spring/web";
import Logo from "./Logo";



const Navbar = () => {
    const user = false;
    const [isBlue, setIsBlue] = useState(false);

    const handleClick = () => {
        setIsBlue(!isBlue);
    };

    const pathName = usePathname();
    console.log(pathName);



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
                            <a href="/blogs"><li className="text-base px-6 hover:bg-gray-200 cursor-pointer py-1">Blog</li></a>
                            <li className="text-base px-6 hover:bg-gray-200 cursor-pointer py-1">Free Lists</li>
                            <li className="text-base px-6 hover:bg-gray-200 cursor-pointer py-1">Pay Rate Checker</li>
                            <li className="text-base px-6 hover:bg-gray-200 cursor-pointer py-1">Cleaning Calculators</li>
                            <li className="text-base px-6 hover:bg-gray-200 cursor-pointer py-1">Help</li>
                            <hr className="mt-2" />
                            <li className="text-sm text-primary hover:bg-white px-6 mt-4">Company Information</li>
                            <a href={'/profile'}><li className="text-base px-6 hover:bg-gray-200 cursor-pointer py-1">Profile</li></a>
                            {/* <li className="text-base px-6 hover:bg-gray-200 cursor-pointer py-1">Email Credentials</li> */}
                            <a href="emailtemplates">
                                <li className="text-base px-6 hover:bg-gray-200 cursor-pointer py-1">Email Templates</li>
                            </a>
                            <a href={'/subscription'}><li className="text-base px-6 hover:bg-gray-200 cursor-pointer py-1">My Subscription</li></a>
                            <hr className="mt-2" />
                            <li className="text-base px-6 hover:bg-gray-200 cursor-pointer py-1 mt-4">Logout</li>
                        </ul>
                    </div>
                </>
                :
                <>
                    {/* <li>
                        <Link className="text-sm text-primary" href={'/login'}>Login</Link>
                    </li>

                    <li>
                        <Link className="text-sm text-primary" href={'/register'}>Sign Up</Link>
                    </li> */}
                    <li>
                        <a className={`text-sm ${pathName === '/about' ? 'font-bold' : 'font-normal'}`} href={'/about'}>About</a>
                    </li>
                    <li>
                        <a className={`text-sm ${pathName === '/blog' ? 'font-bold' : 'font-normal'}`} href={'/blog'}>Blog</a>
                    </li>
                    <li>
                        <a className={`text-sm ${pathName === '/otherservices' ? 'font-bold' : 'font-normal'}`} href={'/otherservices'}>Other Services</a>
                    </li>
                    <li>
                        <a className={`text-sm ${pathName === '/contact' ? 'font-bold' : 'font-normal'}`} href={'/contact'}>Contact</a>
                    </li>

                </>
        }
    </>

    const [scrolled, setScrolled] = useState(false);
    const props = useSpring({
        backgroundColor: scrolled ? '#ffffff' : 'rgba(0, 0, 0, 0)',
        boxShadow: scrolled ? '0px 8px 20px rgba(0, 0, 0, 0.2)' : '0px 0px 0px rgba(0, 0, 0, 0)',

    });

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    return (
        <animated.div style={props} className="navbar h-[60px] bg-inherit fixed inset-0 top-0 z-50 justify-between">
            <div className="navbar-start w-fit">
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
                <Logo />
                <div className="hidden lg:flex ml-12">
                    <ul className={`menu menu-horizontal px-1 text-lg text-[#252C32]  inter`}>
                        {navItems}
                    </ul>
                </div>
            </div>
            <div className="navbar-end lg:flex hidden gap-6 w-fit">
                <a href={'/login'}><button className="font-semibold">Sign In</button></a>
                <a href={'/register'} className="btn bg-primary text-white px-6 py-0 rounded-[100px]">Get Started Free</a>
            </div>

            {/* <Modal id={'my_modal_3'} pathname={"exclusiveleads"} name={'Find Exclusive Leads By State'} />
            <Modal id={'my_modal_4'} pathname={"layups"} name={'Search LayUps By State'} />
            <Modal id={'my_modal_5'} pathname={""} name={'Search By State'} /> */}
        </animated.div>
    );
};

export default Navbar;