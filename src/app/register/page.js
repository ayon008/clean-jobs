import TickCircle from "@/Components/TickCircle";
import Link from "next/link";

const Register = () => {
    const states = [
        'Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'Florida', 'Georgia',
        'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts',
        'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey',
        'New Mexico', 'New York', 'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania',
        'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia',
        'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'
    ];

    return (
        <div className="h-screen login lg:px-16">
            <div className="flex h-full items-start justify-center">
                <div className="w-[40%] h-full flex flex-col">
                    <div className="my-auto">
                        <p className="text-primary mb-6 -mt-5 text-xl pl-8">Join now! No credit card needed.</p>
                        <div className="h-full flex flex-col px-8 py-6">
                            <div className='text-left'>
                                <div className='mt-2'>
                                    <span className='text-4xl font-bold'>$0</span>
                                    <span className='text-primary font-semibold text-xs'>/year</span>
                                </div>
                                <p className='text-green-500 text-xl mt-6'>Free</p>
                            </div>
                            <ul className='mt-6 space-y-3 text-left text-xs'>
                                <li className='flex gap-2'>
                                    <TickCircle className="" /><span className='text-left w-fit'>View 1 cleaning opportunity per 30 days.</span>
                                </li>
                                <li className='flex gap-2'>
                                    <TickCircle className="" /><span className='text-left w-fit'>Search/view 5 decision makers per search.</span>
                                </li>
                                <li className='flex gap-2'>
                                    <TickCircle className="" /><span className='text-left w-fit'>Cleaning opportunities sent to your inbox.</span>
                                </li>
                                <li className='flex gap-2'>
                                    <TickCircle className="" /><span className='text-left w-fit'>Cleaning contract calculators</span>
                                </li>
                                <li className='flex gap-2'>
                                    <TickCircle className="" /><span className='text-left w-fit'>Create 1 Lead List with up to 45 total leads.</span>
                                </li>
                                <li className='flex gap-2'>
                                    <TickCircle className="" /><span className='text-left w-fit'>Store & manage up to 3 cleaning opportunities/solicitations.</span>
                                </li>
                                <li className='flex gap-2'>
                                    <TickCircle className="" /><span className='text-left w-fit'>Post up to 3 solicitations.</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="w-[60%] h-full flex flex-col">
                    <form className="w-full p-8 my-auto">
                        <label htmlFor="" className="text-2xl text-blue-400 font-semibold">Create an account</label>
                        <div className="grid grid-cols-2 grid-rows-3 gap-6">
                            <div className="form-control">
                                <label className="form-control w-full">
                                    <div className="label">
                                        <span className="label-text text-base text-primary">Company Name</span>
                                    </div>
                                    <input type="text" placeholder="SparkleClean Solutions" className="input input-bordered w-full" />
                                </label>
                            </div>
                            <div className="form-control">
                                <label className="form-control w-full">
                                    <div className="label">
                                        <span className="label-text text-base text-primary">E-Mail Address</span>
                                    </div>
                                    <input type="email" placeholder="contact@sparklecleansolutions.com" className="input input-bordered w-full" />
                                </label>
                            </div>
                            <div className="form-control">
                                <label className="form-control w-full">
                                    <div className="label">
                                        <span className="label-text text-base text-primary">Service State</span>
                                    </div>
                                    <select className="select text-primary text-base select-bordered w-full ">
                                        <option disabled selected>Pick Your State</option>
                                        {
                                            states?.map((state, index) => <option key={index} value={state}>{state}</option>)
                                        }
                                    </select>
                                </label>
                            </div>
                            <div className="form-control">
                                <label className="form-control w-full">
                                    <div className="label">
                                        <span className="label-text text-base text-primary">What cities do you service?</span>
                                    </div>
                                    <input type="text" placeholder="New York City" className="input input-bordered w-full" />
                                </label>
                            </div>
                            <div className="form-control">
                                <label className="form-control w-full">
                                    <div className="label">
                                        <span className="label-text text-base text-primary">Password</span>
                                    </div>
                                    <input type="text" placeholder="" className="input input-bordered w-full" />
                                </label>
                            </div>
                            <div className="form-control">
                                <label className="form-control w-full">
                                    <div className="label">
                                        <span className="label-text text-base">Confirm Password</span>
                                    </div>
                                    <input type="text" placeholder="" className="input input-bordered w-full" />
                                </label>
                            </div>
                        </div>
                        <input type="submit" className="btn btn-outline text-green-600 w-full text-xl mt-6" value="Sign Up!" />
                        <Link href={'/login'}><p className="text-center mt-6 cursor-pointer">Already have an account?</p></Link>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;