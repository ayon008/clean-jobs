import PageTitle from "@/Shared/PageTitle";

const page = () => {
    return (
        <div className="py-40 2xl:pt-60 px-10">
            <PageTitle heading={'Profile'} subHeading={'Lorem ipsum dolor sit amet cons ectetur. Id aenean in a est.'} />
            <form className="mt-20">
                <div className="grid grid-cols-2 justify-between gap-10">
                    <div className="form-control relative">
                        <label className="label absolute bg-white left-[2%] -top-[50%]">
                            <span className="label-text text-primary font-normal text-base poppins">Company Name</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Enter your company name"
                            className="input input-bordered rounded-[10px] bg-white border border-[#5C6272]"
                        />
                    </div>
                    <div className="form-control relative">
                        <label className="label absolute bg-white left-[2%] -top-[50%]">
                            <span className="label-text text-primary font-normal text-base poppins">Main Contact</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Enter your name"
                            className="input input-bordered rounded-[10px] bg-white border border-[#5C6272]"
                        />
                    </div>
                    <div className="form-control relative">
                        <label className="label absolute bg-white left-[2%] -top-[50%]">
                            <span className="label-text text-primary font-normal text-base poppins">Company Mail</span>
                        </label>
                        <input
                            type="email"
                            placeholder="Enter your business email address"
                            className="input input-bordered rounded-[10px] bg-white border border-[#5C6272]"
                        />
                    </div>
                    <div className="form-control relative">
                        <label className="label absolute bg-white left-[2%] -top-[50%]">
                            <span className="label-text text-primary font-normal text-base poppins">Phone Number</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Enter your phone number"
                            className="input input-bordered rounded-[10px] bg-white border border-[#5C6272]"
                        />
                    </div>
                    <div className="form-control relative">
                        <label className="label absolute bg-white left-[2%] -top-[50%]">
                            <span className="label-text text-primary font-normal text-base poppins">Company Website</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Enter your company website"
                            className="input input-bordered rounded-[10px] bg-white border border-[#5C6272]"
                        />
                    </div>

                    <div className="form-control relative">
                        <label className="label absolute bg-white left-[2%] -top-[50%]">
                            <span className="label-text text-primary font-normal text-base poppins">Social Media</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Enter your social media link"
                            className="input input-bordered rounded-[10px] bg-white border border-[#5C6272]"
                        />
                    </div>
                    <div className="form-control relative">
                        <label className="label absolute bg-white left-[2%] -top-[50%]">
                            <span className="label-text text-primary font-normal text-base poppins">Company Logo</span>
                        </label>
                        <input
                            type="file"
                            placeholder="Enter your social media link"
                        />
                    </div>
                    <div className="form-control relative">
                        <label className="label absolute bg-white left-[2%] -top-[50%]">
                            <span className="label-text text-primary font-normal text-base poppins">Social Media</span>
                        </label>
                        <textarea
                            rows={8}
                            type="text"
                            placeholder="Enter your social media link"
                            className="input input-bordered rounded-[10px] bg-white border border-[#5C6272]"
                        />
                    </div>
                </div>
            </form>
        </div>
    );
};

export default page;