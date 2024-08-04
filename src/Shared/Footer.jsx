import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import Logo from "./Logo";

const Footer = () => {
    return (
        <footer className="bg-[#EBF1EC] text-base-content md:px-10 px-6 py-16 justify-between max-w-screen-2xl mx-auto">
            <div className="flex md:flex-row flex-col md:justify-between md:items-start justify-center md:gap-0 gap-10">
                <Logo />
                <div className="flex md:flex-row flex-col items-center md:gap-7 gap-4">
                    <p className="text-base font-medium inter">Ready to get started?</p>
                    <button className="btn bg-primary text-white rounded-lg px-10 text-base inter font-bold">Get Started</button>
                </div>
            </div>
            <div className="flex md:flex-row flex-col md:justify-between md:items-end justify-center">
                <aside>
                    <div className="my-20">
                        <h3 className="text-2xl inter font-bold">
                            Subscribe to our <br />
                            newsletter
                        </h3>
                        <fieldset className="form-control w-80 mt-7">
                            <div className="join">
                                <input
                                    type="text"
                                    placeholder="Email Address"
                                    className="input input-bordered join-item rounded-none border-b-[rgba(29,30,37,0.1)]
                                focus:border-b-black focus:border-b-2 focus:outline-none border-t-0 border-l-0 border-r-0 bg-[#EBF1EC]" />
                                <button className="btn bg-primary text-white join-item rounded-none">Subscribe</button>
                            </div>
                        </fieldset>
                    </div>
                    <div className="flex items-center gap-14">
                        <p className="font-medium text-base inter">Terms & Conditions</p>
                        <p className="font-medium text-base inter">Privacy Policy</p>
                    </div>
                </aside>
                <aside className="w-fit mx-auto md:mx-0 md:mt-0 mt-10">
                    <div className="flex items-center gap-10">
                        <FaFacebookF color="#246532" size={'1.5rem'} />
                        <FaTwitter color="#246532" size={'1.5rem'} />
                        <FaInstagram color="#246532" size={'1.5rem'} />
                    </div>
                </aside>
            </div>
        </footer>
    );
};

export default Footer;