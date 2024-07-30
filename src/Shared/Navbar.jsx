'use client'
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { useSpring, animated } from "@react-spring/web";
import Logo from "./Logo";
import { MdOutlineNotifications } from 'react-icons/md';
import useAuth from "@/Hooks/useAuth";
import Dropdown from "@/Components/Dropdown";
import ArrowRight from "@/Components/ArrowRight";
import Link from "next/link";

const Navbar = () => {
    const { user, logOut } = useAuth();
    console.log(user);

    const handleLogOut = () => {
        logOut()
            .then()
            .catch(error => {
                console.log(error);
            })
    }

    const pathName = usePathname();
    console.log(pathName);

    const firstLetter = user?.displayName[0];

    const navStarts = <>
        <li>
            <Link className={`text-sm mr-3 ${pathName.startsWith('/about') ? 'font-bold' : 'font-normal'}`} href={'/about'}>About</Link>
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
                            <li><Link href={'/dashboard'} className="text-base inter font-normal hover:bg-[#F9FAFB] rounded-none pl-5">Dashboard</Link></li>
                        </ul>
                    </li>
                    <li className="dropdown dropdown-hover">
                        <a tabIndex={0} role="button" className={`text-sm gap-0 disabled-link ${pathName.startsWith('/list') ? 'font-bold' : 'font-normal'}`}>
                            <span>List</span>
                            <Dropdown color={"#6E7C87"} />
                        </a>
                        <ul tabIndex={0} className="dropdown-content menu bg-white border z-[1] w-80 px-0 py-2 rounded-lg">
                            <li><Link href={'leadlists'} className="text-base inter font-normal hover:bg-[#F9FAFB] rounded-none pl-5">Lead Lists</Link></li>
                            <li><Link href={'masterlist'} className="text-base inter font-normal hover:bg-[#F9FAFB] rounded-none pl-5">Master List</Link></li>
                            <li><Link href={'solicitationsList'} className="text-base inter font-normal hover:bg-[#F9FAFB] rounded-none pl-5">Solicitations List</Link></li>
                        </ul>
                    </li>
                    <li className="dropdown dropdown-hover">
                        <a tabIndex={0} role="button" className={`text-sm gap-0 disabled-link ${pathName.startsWith('/resources') ? 'font-bold' : 'font-normal'}`} href={'/resources'}>
                            <span>Resources</span>
                            <Dropdown color={"#6E7C87"} />
                        </a>
                        <ul tabIndex={0} className="dropdown-content menu bg-white border z-[1] w-80 px-0 py-2 rounded-lg">
                            <li>
                                <Link href="/resources/blogs" className="text-base inter font-normal hover:bg-[#F9FAFB] rounded-none pl-5">Blog</Link>
                            </li>
                            <li>
                                <Link href="/free-lists" className="text-base inter font-normal hover:bg-[#F9FAFB] rounded-none pl-5">Free Lists</Link>
                            </li>
                            <li>
                                <Link href="/pay-rate-checker" className="text-base inter font-normal hover:bg-[#F9FAFB] rounded-none pl-5">Pay Rate Checker</Link>
                            </li>
                            <li>
                                <Link href="/cleaning-calculators" className="text-base inter font-normal hover:bg-[#F9FAFB] rounded-none pl-5">Cleaning Calculators</Link>
                            </li>
                            <li>
                                <Link href="/help" className="text-base inter font-normal hover:bg-[#F9FAFB] rounded-none pl-5">Help</Link>
                            </li>
                        </ul>
                    </li>
                    <li className="dropdown dropdown-hover">
                        <a tabIndex={0} role="button" className={`text-sm gap-0 disabled-link ${pathName.startsWith('/company-information') ? 'font-bold' : 'font-normal'}`} href={'/company-information'}>
                            <span>Company Information</span>
                            <Dropdown color={"#6E7C87"} />
                        </a>
                        <ul tabIndex={0} className="dropdown-content menu bg-white border z-[1] w-80 px-0 py-2 rounded-lg">
                            <li>
                                <Link href="/company-information/profile" className="text-base inter font-normal hover:bg-[#F9FAFB] rounded-none pl-5">Profile</Link>
                            </li>
                            <li>
                                <Link href="/company-information/messages" className="text-base inter font-normal hover:bg-[#F9FAFB] rounded-none pl-5">Messages</Link>
                            </li>
                            <li>
                                <Link href="/company-information/email-credentials" className="text-base inter font-normal hover:bg-[#F9FAFB] rounded-none pl-5">Email Credentials</Link>
                            </li>
                            <li>
                                <Link href="/company-information/email-templates" className="text-base inter font-normal hover:bg-[#F9FAFB] rounded-none pl-5">Email Templates</Link>
                            </li>
                            <li>
                                <Link href="/company-information/my-subscription" className="text-base inter font-normal hover:bg-[#F9FAFB] rounded-none pl-5">My Subscription</Link>
                            </li>
                        </ul>
                    </li>
                    <li className="dropdown dropdown-hover">
                        <a tabIndex={0} role="button" className={`text-sm gap-0 disabled-link ${pathName.startsWith('/search') ? 'font-bold' : 'font-normal'}`} href={'/search'}>
                            <span>Search</span>
                            <Dropdown color={"#6E7C87"} />
                        </a>
                        <ul tabIndex={0} className="dropdown-content menu bg-white border z-[1] w-80 px-0 py-2 rounded-lg">
                            <li>
                                <Link href="/search/exclusive-leads" className="text-base inter font-normal hover:bg-[#F9FAFB] rounded-none pl-5">Exclusive Leads</Link>
                            </li>
                            <li>
                                <Link href="/search/layups" className="text-base inter font-normal hover:bg-[#F9FAFB] rounded-none pl-5">LayUps (Warm leads)</Link>
                            </li>
                            <li>
                                <Link href="/search/opportunities" className="text-base inter font-normal hover:bg-[#F9FAFB] rounded-none pl-5">Opportunities</Link>
                            </li>
                            <li>
                                <Link href="/search/single-decision-maker" className="text-base inter font-normal hover:bg-[#F9FAFB] rounded-none pl-5">Single Decision Maker</Link>
                            </li>
                            <li>
                                <Link href="/search/decision-makers" className="text-base inter font-normal hover:bg-[#F9FAFB] rounded-none pl-5">Decision Makers</Link>
                            </li>
                            <li>
                                <Link href="/search/local-businesses" className="text-base inter font-normal hover:bg-[#F9FAFB] rounded-none pl-5">Local Businesses</Link>
                            </li>
                        </ul>
                    </li>

                </>
                :
                <>
                    <li>
                        <Link href="/blogs" className={`text-sm ${pathName.startsWith('/blogs') ? 'font-bold' : 'font-normal'}`}>
                            Blogs
                        </Link>
                    </li>
                    <li>
                        <Link href="/otherservices" className={`text-sm ${pathName.startsWith('/otherservices') ? 'font-bold' : 'font-normal'}`}>
                            Other Services
                        </Link>
                    </li>
                    <li>
                        <Link href="/contact" className={`text-sm ${pathName.startsWith('/contact') ? 'font-bold' : 'font-normal'}`}>
                            Contact
                        </Link>
                    </li>
                </>
        }

        <li>
            <a className={`text-sm gap-0 disabled-link text-primary ${pathName.startsWith('/other-services') ? 'font-bold' : 'font-normal'}`} href={'/other-services'}>
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
                            <div className="dropdown dropdown-hover">
                                <h4 tabIndex={0} role="button" className="text-sm inter font-semibold w-fit">{user?.displayName}</h4>
                                <ul tabIndex={0} className="dropdown-content menu bg-white border z-[1] w-52 -right-[20%] px-0 py-2 rounded-lg">
                                    <li>
                                        <button onClick={() => handleLogOut()}
                                            className="text-base border-none shadow-none inter font-normal hover:bg-[#F9FAFB] rounded-none w-full">
                                            Logout
                                        </button>
                                    </li>
                                </ul>
                            </div>
                            <Dropdown color={'black'} />
                        </div>
                    </>
                    :
                    <>
                        <Link href={'/login'}><button className="font-semibold">Sign In</button></Link>
                        <Link href={'/register'} className="btn bg-primary text-white px-6 py-0 rounded-[100px]">Get Started Free</Link>
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