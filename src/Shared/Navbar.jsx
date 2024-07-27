'use client'
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import { usePathname } from "next/navigation";
import { useSpring, animated } from "@react-spring/web";
import Logo from "./Logo";
import { MdOutlineNotifications } from 'react-icons/md';
import useAuth from "@/Hooks/useAuth";
import Dropdown from "@/Components/Dropdown";
import ArrowRight from "@/Components/ArrowRight";

const Navbar = () => {
    const { user } = useAuth();
    console.log(user);

    const pathName = usePathname();
    console.log(pathName);

    const firstLetter = user?.displayName[0];

    const navStarts = <>
        <li>
            <a className={`text-sm ${pathName === '/about' ? 'font-bold' : 'font-normal'}`} href={'/about'}>About</a>
        </li>
        {
            user ?
                <>
                    <li className="dropdown dropdown-hover">
                        <a tabIndex={0} role="button" className={`text-sm gap-0 disabled-link ${pathName === '/' ? 'font-bold' : 'font-normal'}`}>
                            <span>Home</span>
                            <Dropdown color={"#6E7C87"} />
                        </a>
                        <ul tabIndex={0} className="dropdown-content menu bg-white border z-[1] w-72 px-0 py-2 rounded-lg">
                            <li><a className="text-base inter font-normal hover:bg-[#F9FAFB] rounded-none pl-5">Dashboard</a></li>
                        </ul>

                    </li>
                    <li>

                        <ul className="hidden">
                            <li>Lead List</li>
                            <li>Master List</li>
                            <li>Solicitations List</li>
                        </ul>
                    </li>
                    <li className="dropdown dropdown-hover">
                        <a tabIndex={0} role="button" className={`text-sm gap-0 disabled-link ${pathName === '/list' ? 'font-bold' : 'font-normal'}`}>
                            <span>List</span>
                            <Dropdown color={"#6E7C87"} />
                        </a>
                        <ul tabIndex={0} className="dropdown-content menu bg-white border z-[1] w-80 px-0 py-2 rounded-lg">
                            <li><a className="text-base inter font-normal hover:bg-[#F9FAFB] rounded-none pl-5">Lead Lists</a></li>
                            <li><a className="text-base inter font-normal hover:bg-[#F9FAFB] rounded-none pl-5">Master List</a></li>
                            <li><a className="text-base inter font-normal hover:bg-[#F9FAFB] rounded-none pl-5">Solicitations List</a></li>
                        </ul>
                    </li>
                    <li className="dropdown dropdown-hover">
                        <a tabIndex={0} role="button" className={`text-sm gap-0 disabled-link ${pathName === '/resources' ? 'font-bold' : 'font-normal'}`} href={'/resources'}>
                            <span>Resources</span>
                            <Dropdown color={"#6E7C87"} />
                        </a>
                        <ul tabIndex={0} className="dropdown-content menu bg-white border z-[1] w-80 px-0 py-2 rounded-lg">
                            <li><a className="text-base inter font-normal hover:bg-[#F9FAFB] rounded-none pl-5">Blog</a></li>
                            <li><a className="text-base inter font-normal hover:bg-[#F9FAFB] rounded-none pl-5">Free Lists</a></li>
                            <li><a className="text-base inter font-normal hover:bg-[#F9FAFB] rounded-none pl-5">Pay Rate Checker</a></li>
                            <li><a className="text-base inter font-normal hover:bg-[#F9FAFB] rounded-none pl-5">Cleaning Calculators</a></li>
                            <li><a className="text-base inter font-normal hover:bg-[#F9FAFB] rounded-none pl-5">Help</a></li>
                        </ul>
                    </li>
                    <li className="dropdown dropdown-hover">
                        <a tabIndex={0} role="button" className={`text-sm gap-0 disabled-link ${pathName === '/company-information' ? 'font-bold' : 'font-normal'}`} href={'/company-information'}>
                            <span>Company Information</span>
                            <Dropdown color={"#6E7C87"} />
                        </a>
                        <ul tabIndex={0} className="dropdown-content menu bg-white border z-[1] w-80 px-0 py-2 rounded-lg">
                            <li><a className="text-base inter font-normal hover:bg-[#F9FAFB] rounded-none pl-5">Profile</a></li>
                            <li><a className="text-base inter font-normal hover:bg-[#F9FAFB] rounded-none pl-5">Messages</a></li>
                            <li><a className="text-base inter font-normal hover:bg-[#F9FAFB] rounded-none pl-5">Email Credentials</a></li>
                            <li><a className="text-base inter font-normal hover:bg-[#F9FAFB] rounded-none pl-5">Email Templates</a></li>
                            <li><a className="text-base inter font-normal hover:bg-[#F9FAFB] rounded-none pl-5">My Subscription</a></li>
                        </ul>
                    </li>
                    <li className="dropdown dropdown-hover">
                        <a tabIndex={0} role="button" className={`text-sm gap-0 disabled-link ${pathName === '/search' ? 'font-bold' : 'font-normal'}`} href={'/search'}>
                            <span>Search</span>
                            <Dropdown color={"#6E7C87"} />
                        </a>
                        <ul tabIndex={0} className="dropdown-content menu bg-white border z-[1] w-80 px-0 py-2 rounded-lg">
                            <li><a className="text-base inter font-normal hover:bg-[#F9FAFB] rounded-none pl-5">Exclusive Leads</a></li>
                            <li><a className="text-base inter font-normal hover:bg-[#F9FAFB] rounded-none pl-5">LayUps (Warm leads)</a></li>
                            <li><a className="text-base inter font-normal hover:bg-[#F9FAFB] rounded-none pl-5">Opportunities</a></li>
                            <li><a className="text-base inter font-normal hover:bg-[#F9FAFB] rounded-none pl-5">Single Decision Maker</a></li>
                            <li><a className="text-base inter font-normal hover:bg-[#F9FAFB] rounded-none pl-5">Decision Makers</a></li>
                            <li><a className="text-base inter font-normal hover:bg-[#F9FAFB] rounded-none pl-5">Local Businesses</a></li>
                        </ul>
                    </li>

                </>
                :
                <>
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
        <li>
            <a className={`text-sm gap-0 disabled-link text-primary ${pathName === '/other-services' ? 'font-bold' : 'font-normal'}`} href={'/other-services'}>
                <span>Other Services</span>
                <ArrowRight />
            </a>
        </li>
    </>

    const navEnds =
        <>
            {
                user ?
                    <>
                        <MdOutlineNotifications size={24} />
                        <div className="flex items-center gap-2">
                            <div className="w-[32px] relative h-[32px] rounded-full bg-primary  text-white text-base font-normal">
                                <span className="absolute top-1/2 right-1/2 transform -translate-y-1/2 translate-x-1/2">{firstLetter}</span>
                            </div>
                            <div>
                                <h4 className="text-sm inter font-semibold w-fit">{user?.displayName}</h4>
                            </div>
                            <Dropdown color={'black'} />
                        </div>
                    </>
                    :
                    <>
                        <a href={'/login'}><button className="font-semibold">Sign In</button></a>
                        <a href={'/register'} className="btn bg-primary text-white px-6 py-0 rounded-[100px]">Get Started Free</a>
                    </>
            }
        </>


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
        handleScroll();
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    return (
        <animated.div style={props} className="navbar h-[60px] bg-inherit fixed inset-0 top-0 z-50 justify-between py-10">
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
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow navStart">
                        {navStarts}
                    </ul>
                </div>
                <Logo />
                <div className="hidden lg:flex 2xl:ml-12 ml-6">
                    <ul className={`menu menu-horizontal px-1 text-lg text-[#252C32]  inter`}>
                        {navStarts}
                    </ul>
                </div>
            </div>
            <div className="navbar-end lg:flex hidden gap-6 w-fit">
                {navEnds}
            </div>
        </animated.div>
    );
};

export default Navbar;