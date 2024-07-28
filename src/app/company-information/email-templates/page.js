import PageTitle from "@/Shared/PageTitle";
import { FaArrowRight } from "react-icons/fa";

const page = () => {
    return (
        <div className="pt-40 pb-20 px-10">
            <PageTitle heading={"Email Template"} subHeading={"Email templates streamline communication with consistent, professional messaging"} />
            <form className="mt-10">
                <div className="space-y-6">
                    <div className="form-control">
                        <label className="label pl-0">
                            <span className="label-text text-primary poppins font-normal text-xl nunito">Template Name</span>
                        </label>
                        <input
                            type="text"
                            placeholder="emailaddress@gmail.com"
                            className="input input-bordered rounded-[10px] bg-[#FAFAFB] border border-[#5C6272] w-[500px]"
                        />
                    </div>
                    <div className="form-control">
                        <label className="label pl-0">
                            <span className="label-text text-primary poppins font-normal text-xl nunito">Subject</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Enter your text"
                            className="input input-bordered rounded-[10px] bg-[#FAFAFB] border border-[#5C6272] w-[750px]"
                        />
                    </div>
                    <div className="form-control">
                        <label className="label pl-0">
                            <span className="label-text text-primary poppins font-normal text-xl nunito">Body</span>
                        </label>
                        <textarea
                            rows="10"
                            type="text"
                            placeholder="Enter your text"
                            className="textarea textarea-bordered rounded-[10px] bg-[#FAFAFB] border border-[#5C6272] w-[850px]"
                        />
                    </div>
                    <div className="form-control">
                        <label className="label pl-0">
                            <span className="label-text text-primary poppins font-normal text-xl nunito">Email Signature</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Add your name, position and company name"
                            className="input input-bordered rounded-[10px] bg-[#FAFAFB] border border-[#5C6272] w-[600px]"
                        />
                    </div>
                    <div className="form-control">
                        <label className="label pl-0">
                            <span className="label-text text-primary poppins font-normal text-xl nunito">Attachment</span>
                        </label>
                        <input
                            type="file"
                            placeholder="Add your name, position and company name"
                            className="file-input file-input-bordered  rounded-[10px] bg-[#FAFAFB] border border-[#5C6272] w-[500px]"
                        />
                    </div>
                </div>
                <div className="form-control mt-16">
                    <button
                        type="submit"
                        placeholder="Add your name, position and company name"
                        className="btn bg-primary text-white rounded-[22px] w-fit"
                    >
                        <span>Make my email templates</span>
                        <FaArrowRight />
                    </button>
                </div>
            </form>
        </div>
    );
};

export default page;