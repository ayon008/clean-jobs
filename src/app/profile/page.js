import React from 'react';

const page = () => {

    const states = [
        'Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'Florida', 'Georgia',
        'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts',
        'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey',
        'New Mexico', 'New York', 'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania',
        'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia',
        'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'
    ];

    return (
        <div className="flex gap-5 px-16 py-10 max-md:flex-wrap">
            <div className="flex flex-col grow shrink-0 my-auto basis-0 w-fit max-md:max-w-full p-8 shadow-2xl">
                <div className="flex gap-5 justify-between w-full max-md:flex-wrap max-md:max-w-full">
                    <div className="flex flex-col">
                        <div className="text-2xl font-medium text-slate-700">
                            Welcome, Amanda
                        </div>
                        <div className="mt-6 text-base text-stone-400">
                            Tue June 2022
                        </div>
                    </div>
                </div>
                <div>
                    <form className="card-body p-0 my-4 space-y-2">
                        <h2 className='text-3xl text-green-500 font-semibold mt-6'>Company Information</h2>
                        <div className='flex lg:flex-row flex-col items-center gap-4'>
                            <div className="form-control w-full lg:max-w-1/2">
                                <label className="label">
                                    <span className="label-text text-primary text-sm">Company Name</span>
                                </label>
                                <input type="text" placeholder="" className="input input-bordered" required />
                                <div className="label">
                                    <span className="label-text-alt">*required</span>
                                </div>
                            </div>
                            <div className="form-control w-full lg:max-w-1/2">
                                <label className="label">
                                    <span className="label-text text-primary text-sm">Main Contact</span>
                                </label>
                                <input type="text" placeholder="" className="input input-bordered" required />
                                <div className="label">
                                    <span className="label-text-alt">*required</span>
                                </div>
                            </div>
                        </div>
                        <div className='flex lg:flex-row flex-col items-center gap-4'>
                            <div className="form-control w-full lg:max-w-1/2">
                                <label className="label">
                                    <span className="label-text text-primary text-sm">Email</span>
                                </label>
                                <input type="email" placeholder="" className="input input-bordered" required />
                                <div className="label">
                                    <span className="label-text-alt">*required</span>
                                </div>
                            </div>
                            <div className="form-control w-full lg:max-w-1/2">
                                <label className="label">
                                    <span className="label-text text-primary text-sm">Phone Number</span>
                                </label>
                                <input type="text" placeholder="" className="input input-bordered" required />
                                <div className="label">
                                    <span className="label-text-alt">*required</span>
                                </div>
                            </div>
                        </div>
                        <div className='flex lg:flex-row flex-col items-center gap-4'>
                            <div className="form-control w-full lg:max-w-1/2">
                                <label className="label">
                                    <span className="label-text text-primary text-sm">Add a company logo</span>
                                </label>
                                <input type="file" className="file-input file-input-bordered w-full lg:max-w-1/2 custom-file-input" />
                            </div>
                            <div className="form-control w-full lg:max-w-1/2">
                                <label className="label">
                                    <span className="label-text text-primary text-sm">Company website</span>
                                </label>
                                <input type="text" placeholder="" className="input input-bordered" required />
                            </div>
                        </div>
                        <div className='flex lg:flex-row flex-col items-center gap-4'>
                            <div className="form-control w-full lg:max-w-1/2">
                                <label className="label">
                                    <span className="label-text text-primary text-sm">Service Cities</span>
                                </label>
                                <input type="email" placeholder="" className="input input-bordered" required />
                                <div className="label">
                                    <span className="label-text-alt">*required</span>
                                </div>
                            </div>
                            <div className="form-control w-full lg:max-w-1/2">
                                <label className="label">
                                    <span className="label-text text-primary text-sm">Service State</span>
                                </label>
                                <select className="select text-primary text-base select-bordered w-full ">
                                    <option disabled selected>Pick Your State</option>
                                    {
                                        states?.map((state, index) => <option key={index} value={state}>{state}</option>)
                                    }
                                </select>
                                <div className="label">
                                    <span className="label-text-alt">*required</span>
                                </div>
                            </div>
                        </div>
                        <div className='flex lg:flex-row flex-col items-center gap-4'>
                            <div className="form-control w-full lg:max-w-1/2">
                                <label className="label">
                                    <span className="label-text text-primary text-sm">Service Cities 2</span>
                                </label>
                                <input type="email" placeholder="" className="input input-bordered" required />
                            </div>
                            <div className="form-control w-full lg:max-w-1/2">
                                <label className="label">
                                    <span className="label-text text-primary text-sm">Service State 2</span>
                                </label>
                                <select className="select text-primary text-base select-bordered w-full ">
                                    <option disabled selected>Pick Your State</option>
                                    {
                                        states?.map((state, index) => <option key={index} value={state}>{state}</option>)
                                    }
                                </select>
                            </div>
                        </div>
                        <div className='flex lg:flex-row flex-col items-center gap-4'>
                            <div className="form-control w-full lg:max-w-1/2">
                                <label className="label">
                                    <span className="label-text text-primary text-sm">Service Cities 3</span>
                                </label>
                                <input type="email" placeholder="" className="input input-bordered" required />
                            </div>
                            <div className="form-control w-full lg:max-w-1/2">
                                <label className="label">
                                    <span className="label-text text-primary text-sm">Service State 3</span>
                                </label>
                                <select className="select text-primary text-base select-bordered w-full ">
                                    <option disabled selected>Pick Your State</option>
                                    {
                                        states?.map((state, index) => <option key={index} value={state}>{state}</option>)
                                    }
                                </select>
                            </div>
                        </div>
                        <h2 className='text-3xl text-green-500 font-semibold mt-6'>Company Details</h2>
                        <div className='flex lg:flex-row flex-col items-center gap-4'>
                            <div className="form-control w-full lg:max-w-1/2">
                                <label className="label">
                                    <span className="label-text text-primary text-sm">Year in Business</span>
                                </label>
                                <input type="number" placeholder="" className="input input-bordered" required />
                                <div className="label">
                                    <span className="label-text-alt">*required</span>
                                </div>
                            </div>
                            <div className="form-control w-full lg:max-w-1/2">
                                <label className="label">
                                    <span className="label-text text-primary text-sm">Numbers of employee</span>
                                </label>
                                <input type="number" placeholder="" className="input input-bordered" required />
                                <div className="label">
                                    <span className="label-text-alt">*required</span>
                                </div>
                            </div>
                        </div>
                        <div className='form-control'>
                            <label className="label">
                                <span className="label-text text-primary text-sm">Company Details</span>
                            </label>
                            <textarea className="textarea textarea-bordered" placeholder="Bio" rows={6}></textarea>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary bg-green-500 text-white">Update</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default page;