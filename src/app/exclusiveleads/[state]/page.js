import FireIcon from "@/Components/FireIcon";
import Sale from "@/Components/Sale";
import Link from "next/link";
import { FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";

// export async function generateStaticParams() {
//     const states = [
//         'Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'Florida', 'Georgia',
//         'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts',
//         'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey',
//         'New Mexico', 'New York', 'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania',
//         'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia',
//         'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'
//     ];
//     return states.map(stateName => {
//         return { state: stateName }
//     })
// }


const page = ({ params }) => {
    console.log(params);
    return (
        <div className="px-16 my-20">
            <div>
                <div className="flex items-center justify-between">
                    <div>
                        <h3 className="text-xl font-semibold">Exclusive cleaning leads in {params.state}</h3>
                        <p className="text-xs text-green-500 mt-2">Exclusive leads are pre-scheduled walkthroughs for <br /> cleaning quotes. Once purchased, they are no longer available</p>
                    </div>
                    <div className="flex items-center gap-6">
                        <div>
                            <div className="label">
                                <span className="label-text text-green-500">Search</span>
                            </div>
                            <div className="relative w-fit">
                                <input type="search" className="input input-bordered pr-16" placeholder="search cities near you for exclusive leads" />
                                <svg className="absolute right-[10%] top-1/2 -translate-y-1/2 transform cursor-pointer z-10" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z" stroke="#7E7E7E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M21 21L16.65 16.65" stroke="#7E7E7E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </div>
                        </div>
                        <div className="">
                            <div className="label">
                                <span className="label-text text-green-500">Sort By</span>
                            </div>
                            <select className="bg-inherit select select-bordered font-semibold" defaultValue={'Newest'}>
                                <option>Newest</option>
                                <option>Oldest</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-[90%] mx-auto mt-20">
                <Link href={`${params.state}/1`}>
                    <div className="custom-grid shadow-2xl rounded-lg pt-2 pb-4 px-6 cursor-pointer">
                        <div className="pl-4">
                            <p className="text-white bg-green-500 font-semibold w-fit text-xl px-4 py-2 rounded-lg">S</p>
                        </div>
                        <div>
                            <Sale />
                            <h2 className="text-2xl font-semibold text-gray-600">Restaurant hood cleaning and fan cleaning - 2x/year </h2>
                            <p className="text-primary text-sm">Location: Chicago, IL 60622 Type: Restaurant
                                Scope: They need hood cleaning and fan cleaning</p>
                        </div>
                        <div className="flex items-start gap-6">
                            <div>
                                <div className="flex items-center gap-1">
                                    <FaMapMarkerAlt className="text-primary" />
                                    <p className="text-primary">Chicago</p>
                                </div>
                                <div className="flex items-end">
                                    <FireIcon />
                                    <p className="text-primary">Popular</p>
                                </div>
                            </div>
                            <div className="mt-1 flex items-center gap-2">
                                <FaCalendarAlt className="text-primary" />
                                <p className="text-xs text-primary">1 week ago</p>
                            </div>
                        </div>
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default page;