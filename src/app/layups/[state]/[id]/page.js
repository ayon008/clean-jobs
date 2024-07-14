import FireIcon from '@/Components/FireIcon';
import Map from '@/Components/Map';
import Sale from '@/Components/Sale';
import React from 'react';
import { FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';

const page = () => {
    return (
        <div className='px-20 mt-10'>
            <div className='flex items-start justify-between gap-4'>
                <div>
                    <Sale />
                    <span className='flex items-end'>
                        <h1 className='text-2xl font-semibold text-gray-600'>Restaurant hood cleaning and fan cleaning - 2x/year</h1>
                        <FireIcon />
                    </span>
                    <div className="mt-4 flex items-center gap-2">
                        <FaCalendarAlt className="text-primary" />
                        <p className="text-xs text-primary">1 week ago</p>
                    </div>
                    <div className='space-y-2 mt-4'>
                        <h4 className='text-primary text-xl tracking-wider'>Details</h4>
                        <p className='text-gray-700 text-sm leading-7 tracking-widest'>
                            Type: Restaurant <br></br>
                            Scope: They need hood cleaning and fan cleaning <br></br>
                            Current Cleaning Status (Inhouse/Outsourced) : Outsourced
                            Cleaning Frequency: 2x/year <br></br>
                            Size of the facility:  900 sq ft <br></br>
                            Notes: Willing to switch if they receive a better price.
                        </p>
                    </div>
                    <p className='text-primary mt-10'><span className='text-red-400'>*</span> The preset walkthrough date for this exclusive lead is 7/01/2024 . Walkthrough dates and times may possibly be changed after purchasing but there is no guarantee.</p>
                    <h2 className='text-2xl font-semibold mt-6'>Attachments:</h2>
                    <p className='mt-6'>Get an <span className='text-green-500 font-medium'>Unlimited</span> subscription and get 10% off of all exclusive leads!</p>
                    <button className='text-white mt-6 px-10 text-base w-3/4 font-semibold btn  bg-green-500 hover:bg-green-800'>Buy now $50</button>
                </div>
                <div>
                    <div className='flex items-center gap-4'>
                        <FaMapMarkerAlt size={'1.5rem'} className='text-primary' />
                        <div>
                            <h4 className='text-gray-600 mt-4 font-semibold'>Location</h4>
                            <p className='text-primary'>Chicago, Illinois</p>
                        </div>
                    </div>
                    <Map city={'chicago'} />
                </div>
            </div>
            <div className='bg-[#e7e2e2] w-fit mt-20 mx-auto py-2 px-10'>
                <p className='text-xs text-primary'>Questions or concerns about this exclusive lead? See our <span className='text-blue-500 hover:underline cursor-pointer'>FAQs</span></p>
            </div>
        </div>
    );
};

export default page;