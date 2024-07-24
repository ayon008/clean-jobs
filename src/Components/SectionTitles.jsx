import React from 'react';

const SectionTitles = ({ heading, subHeading }) => {
    return (
        <section className='text-center'>
            <h1 className='text-6xl poppins font-semibold my-4'>{heading}</h1>
            <p className='w-[80%] mx-auto poppins font-normal text-lg'>{subHeading}</p>
        </section>
    );
};

export default SectionTitles;