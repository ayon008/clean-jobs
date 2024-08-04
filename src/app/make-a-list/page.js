import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

const page = () => {
    const usStates = [
        "Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut", "Delaware", "Florida", "Georgia",
        "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky", "Louisiana", "Maine", "Maryland", "Massachusetts",
        "Michigan", "Minnesota", "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada", "New Hampshire", "New Jersey",
        "New Mexico", "New York", "North Carolina", "North Dakota", "Ohio", "Oklahoma", "Oregon", "Pennsylvania", "Rhode Island",
        "South Carolina", "South Dakota", "Tennessee", "Texas", "Utah", "Vermont", "Virginia", "Washington", "West Virginia",
        "Wisconsin", "Wyoming"
    ];

    return (
        <div className="px-10 pb-20 pt-40">
            <h2 className="text-5xl poppins font-black text-center">Make a lead list</h2>
            <div className="mt-20">
                <form className="w-1/2 space-y-10 mx-auto">
                    <div className="form-control relative">
                        <label className="label absolute bg-white left-[2%] -top-[50%]">
                            <span className="label-text text-primary font-normal text-base poppins">List Name</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Ex. Best Leads List"
                            className="input input-bordered rounded-[10px] bg-white border border-[#5C6272]"
                        />
                    </div>
                    <div className="form-control relative">
                        <label className="label absolute bg-white left-[2%] -top-[50%]">
                            <span className="label-text text-primary font-normal text-base poppins">Pick An Email Template</span>
                        </label>
                        <select
                            className="select select-bordered rounded-[10px] bg-white border border-[#5C6272]">
                            <option className="text-[#666968] poppins text-lg" selected disabled>Pick a type</option>
                        </select>
                    </div>
                    <div className="form-control relative">
                        <label className="label absolute bg-white left-[2%] -top-[50%]">
                            <span className="label-text text-primary font-normal text-base poppins">State</span>
                        </label>
                        <select
                            className="select select-bordered rounded-[10px] bg-white border border-[#5C6272]">
                            <option className="text-[#666968] poppins text-lg" selected disabled>Select a sate</option>
                            {
                                usStates.map(state => {
                                    return (
                                        <option key={state} className="text-[#666968] poppins text-lg" value="Company Name">{state}</option>
                                    )
                                })
                            }
                        </select>
                    </div>
                    <div className="form-control relative">
                        <button className="bg-primary text-white w-1/2 mx-auto btn rounded-[16px] poppins text-lg font-semibold h-[60px]"><Link href={'/lists'}>Make It</Link><FaArrowRight /></button>
                        
                    </div>
                </form>
            </div>
        </div>
    );
};

export default page;