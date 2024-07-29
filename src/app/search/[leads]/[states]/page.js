import MapMarker from "@/Components/MapMarker";
import { FaArrowDown, FaMapMarkerAlt, FaSearch } from "react-icons/fa";

const page = ({ params }) => {
    console.log(params);
    return (
        <div className="pt-40 pb-20 px-10">
            <div>
                <div className="flex items-center gap-4 justify-center">
                    <h4 className="text-xl inter font-medium text-center">Cleaning opportunities in {params.states}</h4>
                    <p className="text-[#6941C6] inter text-sm font-medium pt-[3px] px-[10px] bg-[#F9F5FF] rounded-[18px]">240 leads</p>
                </div>
                <p className="text-[#667085] inter font-normal text-base text-center mt-2">Opportunites can range from city/state, construcion clean ups, airbnb cleanings, sub contracts, and more. The process of providing a quote varies for each opportunity, and contact information is available for reaching out to the respective contacts in every opportunity</p>
            </div>
            <div className="w-1/2 mx-auto mt-9">
                <div className="flex items-start gap-2">
                    <input id="search" type="text" placeholder={`Search cities near you`} className="input input-bordered bg-white w-[75%] h-[60px] rounded-[10px] border border-[#D0D5DD] shadow-lg" />
                    <button className="btn bg-primary text-white flex items-center h-[60px] w[20%] rounded-[10px]">
                        <FaSearch size={'1rem'} />
                        <span className="inter text-base font-medium">Search</span>
                    </button>
                </div>
            </div>
            <div className="overflow-x-auto mt-6">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr className="bg-[#FCFCFD]">
                            <th className="text-center text-[#667085] font-medium text-sm inter">Leads</th>
                            <th className="text-center text-[#667085] font-medium text-sm inter">Location</th>
                            <th className="text-center text-[#667085] font-medium text-sm inter">Opportunity Type</th>
                            <th className="flex items-center gap-1 text-center text-[#667085] font-medium text-sm inter">
                                <span>Date</span>
                                <FaArrowDown />
                            </th>
                            <th className="text-center text-[#667085] font-medium text-sm inter">Status</th>
                            <th className="text-center text-[#667085] font-medium text-sm inter">View Details</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        <tr>
                            <td className="">
                                <div className="flex items-center gap-3 w-fit mx-auto">
                                    <div className="avatar">
                                        <div className="mask mask-squircle h-12 w-12">
                                            <img
                                                src="https://img.daisyui.com/images/profile/demo/2@94.webp"
                                                alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="font-bold">Hart Hagerty</div>
                                        <div className="text-sm opacity-50">United States</div>
                                    </div>
                                </div>
                            </td>
                            <td>
                                <div className="flex items-center gap-4 w-fit mx-auto">
                                    <MapMarker />
                                    <div>
                                        <h4 className="inter font-normal text-lg">18th Street Brewery</h4>
                                        <p className="text-[#72777A]">Oakley Avenue, Hammond, IN</p>
                                    </div>
                                </div>
                            </td>
                            <td>
                                <p className="text-[#175CD3] bg-[#EFF8FF] w-fit rounded-[18px] mx-auto inter text-sm font-medium pt-[3px] px-[10px]">Standard Opportunity </p>
                            </td>
                            <th>
                                <button className="btn btn-ghost btn-xs">details</button>
                            </th>
                        </tr>
                        {/* row 2 */}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default page;