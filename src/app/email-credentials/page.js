import Time from "@/Components/Time";
import PageTitle from "@/Shared/PageTitle";
import { FaArrowRight } from "react-icons/fa";

const page = () => {
    return (
        <div className="flex gap-20 items-center pb-20 pt-40 px-10">
            <div className="w-1/2">
                <PageTitle heading={'Email Credentials'} subHeading={'Please enter your email credentials to integrate your email with us.'} />
                <form className="mt-10 space-y-10">
                    <div className="form-control relative">
                        <label className="label absolute bg-white left-[2%] -top-[50%]">
                            <span className="label-text text-primary font-normal text-base poppins">Email Provider</span>
                        </label>
                        <select
                            className="select select-bordered rounded-[10px] bg-white border border-[#5C6272]">
                            <option className="text-[#666968] poppins text-lg" selected disabled>Pick your email provider</option>
                            <option className="text-[#666968] poppins text-lg" value="gmail">Gmail</option>
                            <option className="text-[#666968] poppins text-lg" value="yahoo">Yahoo</option>
                            <option className="text-[#666968] poppins text-lg" value="outlook">Outlook</option>
                            <option className="text-[#666968] poppins text-lg" value="icloud">iCloud</option>
                            <option className="text-[#666968] poppins text-lg" value="aol">AOL</option>
                            <option className="text-[#666968] poppins text-lg" value="zoho">Zoho</option>
                            <option className="text-[#666968] poppins text-lg" value="mail">Mail.com</option>
                            <option className="text-[#666968] poppins text-lg" value="protonmail">ProtonMail</option>
                            <option className="text-[#666968] poppins text-lg" value="yandex">Yandex</option>
                            <option className="text-[#666968] poppins text-lg" value="gmx">GMX</option>
                        </select>
                    </div>
                    <div className="form-control relative">
                        <label className="label absolute bg-white left-[2%] -top-[50%]">
                            <span className="label-text text-primary font-normal text-base poppins">Pic a Port</span>
                        </label>
                        <select
                            className="select select-bordered rounded-[10px] bg-white border border-[#5C6272]">
                            <option selected disabled className="text-[#666968] poppins text-lg">Pick a Port</option>
                            <option value="" className="text-[#666968] poppins text-lg">465</option>
                            <option value="" className="text-[#666968] poppins text-lg">465</option>
                            <option value="" className="text-[#666968] poppins text-lg">587</option>
                        </select>
                    </div>
                    <div className="form-control relative">
                        <label className="label absolute bg-white left-[2%] -top-[50%]">
                            <span className="label-text text-primary font-normal text-base poppins">SMPT Security</span>
                        </label>
                        <select
                            className="select select-bordered rounded-[10px] bg-white border border-[#5C6272]">
                            <option selected disabled className="text-[#666968] poppins text-lg">Pick a SMPT Security</option>
                            <option value="" className="text-[#666968] poppins text-lg">SSL</option>
                            <option value="" className="text-[#666968] poppins text-lg">TLS</option>
                            <option value="" className="text-[#666968] poppins text-lg">STARTTLS</option>
                        </select>
                    </div>
                    <div className="form-control relative">
                        <label className="label absolute bg-white left-[2%] -top-[50%]">
                            <span className="label-text text-primary font-normal text-base poppins">Email Address</span>
                        </label>
                        <input
                            type="email"
                            placeholder="Enter your business email address"
                            className="input input-bordered rounded-[10px] bg-white border border-[#5C6272]"
                        />
                    </div>
                    <div className="form-control relative">
                        <label className="label absolute bg-white left-[2%] -top-[50%]">
                            <span className="label-text text-primary font-normal text-base poppins">App Password</span>
                        </label>
                        <input
                            type="password"
                            placeholder="password"
                            className="input input-bordered rounded-[10px] bg-white border border-[#5C6272]"
                        />
                    </div>
                    <div className="form-control relative">
                        <button className="bg-primary flex items-center gap-2 justify-center w-full rounded-xl py-3 font-medium text-xl">
                            <span>Submit</span>
                            <FaArrowRight />
                        </button>
                    </div>
                </form>
            </div>
            <div className="w-1/2">
                <Time />
            </div>
        </div>
    );
};

export default page;