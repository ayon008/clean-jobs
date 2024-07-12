import { FaCircle } from "react-icons/fa";
import TickCircle from "../Components/TickCircle";
import { Link } from "react-router-dom";
import PageTitle from "../Shared/PageTitle";

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
        <div className="py-10">
            <PageTitle name={'Sign Up'} />
            <div className="flex items-center gap-4 p-10">
                <div className="w-1/2 my-10">
                    <p className="text-primary my-6 text-xl text-center">Join now! No credit card needed.</p>
                    <div>
                        <div>
                            <h3 className="text-3xl text-center text-blue-400 font-semibold">Free To Start</h3>
                            <p className="text-red-600 line-through text-center my-3">$100/year</p>
                        </div>
                        <div className='relative w-fit mx-auto mt-2'>
                            <span className='absolute -left-[20%] text-primary text-2xl'>$</span>
                            <span className='text-7xl font-bold'>0</span>
                            <span className='text-primary font-semibold'>/yr</span>
                        </div>
                        <ul className='mt-6 space-y-3 text-left w-fit mx-auto'>
                            <li className='flex gap-2'>
                                <TickCircle className="" /><span className='text-left w-fit'>View 1 cleaning opportunity per 30 days.</span>
                            </li>
                            <li className='flex gap-2'>
                                <TickCircle className="" /><span className='text-left w-fit'>Search/view 5 decision makers per search.</span>
                            </li>
                            <li className='flex gap-2'>
                                <TickCircle className="" /><span className='text-left w-fit'>Make sub contractor solicitations.</span>
                            </li>
                            <li className='flex gap-2'>
                                <TickCircle className="" /><span className='text-left w-fit'>Cleaning opportunities sent to your inbox.</span>
                            </li>
                            <li className='flex gap-2'>
                                <TickCircle className="" /><span className='text-left w-fit'>Create 1 Lead List with up to 45 total leads.</span>
                            </li>
                            <li className='flex gap-2'>
                                <TickCircle className="" /><span className='text-left w-fit'>Store & manage up to 3 cleaning contracts</span>
                            </li>
                            <li className='flex gap-2'>
                                <TickCircle className="" /><span className='text-left w-fit'>Calculate your bid numbers with our cleaning calculators.</span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="w-1/2">
                    <form className="shadow-2xl rounded-lg w-full p-8">
                        <label htmlFor="" className="text-2xl text-blue-400">Account Information</label>
                        <div className="w-full grid grid-cols-2 grid-rows-3 gap-6">
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
                        <input type="submit" className="btn btn-outline text-blue-400 w-full text-xl mt-6" value="Sign Up!" />
                        <Link to={'/login'}><p className="text-center mt-6 cursor-pointer">Already have an account?</p></Link>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;