import Map from '@/Components/Map';
import Sale from '@/Components/Sale';
import React from 'react';
import { FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';

const page = () => {
    return (
        <div className='px-20 mt-20'>
            <div className='flex items-start justify-between'>
                <div>
                    <Sale />
                    <h1 className='text-2xl font-semibold text-gray-600'>Restaurant hood cleaning and fan cleaning - 2x/year</h1>
                    <div className="mt-4 flex items-center gap-2">
                        <FaCalendarAlt className="text-primary" />
                        <p className="text-xs text-primary">1 week ago</p>
                    </div>
                </div>
                <div>
                    <div className='flex items-center gap-4'>
                        <FaMapMarkerAlt size={'1.5rem'} className='text-primary' />
                        <div>
                            <h4 className='text-gray-600 mt-4 font-semibold'>Location</h4>
                            <p className='text-primary'>Chicago, Illinois</p>
                        </div>
                    </div>
                    <Map />
                </div>
            </div>
        </div>
    );
};

export default page;