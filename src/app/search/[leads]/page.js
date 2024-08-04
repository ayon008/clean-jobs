import { usStates } from "@/js/states";
import Link from "next/link";
import { FaSearch } from "react-icons/fa";

const page = ({ params }) => {
    console.log(params);
    return (
        <div className="pt-40 pb-20 px-10">
            <div className="w-1/2 mx-auto">
                <div className="flex items-start gap-2">
                    <input id="search" type="text" placeholder={`Find ${params.leads} by state`} className="input input-bordered bg-white w-[75%] h-[60px] rounded-[10px] border border-[#D0D5DD] shadow-lg" />
                    <button className="btn bg-primary text-white flex items-center h-[60px] w[20%] rounded-[10px]">
                        <FaSearch size={'1rem'} />
                        <span className="inter text-base font-medium">Search</span>
                    </button>
                </div>
            </div>
            <div className="w-3/4 mx-auto mt-10">
                <ul>
                    {
                        usStates.map((state) => (
                            <Link key={state} href={`${params.leads}/${state}`}>
                                <li className='p-3 hover:bg-[#F7F8F9] rounded'>
                                    <div>
                                        <h3 className="poppins text-base font-medium">{state}</h3>
                                        <p className="text-[#64748B] poppins text-xs font-light mt-2">200 Leads</p>
                                    </div>
                                </li>
                            </Link>
                        ))
                    }
                </ul>
            </div>
        </div>
    );
};

export default page;