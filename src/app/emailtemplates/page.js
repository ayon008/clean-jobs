import Button from '@/Components/Button';
import Email from '@/Components/Email';
import EmailTemplateForm from '@/Components/EmailTemplateForm';
import React from 'react';

const page = () => {
    return (
        <div className='w-fit mx-auto text-center mt-20'>
            <Email />
            <h2 className='text-3xl my-10'>You don't have any email templates</h2>
        </div>
    );
};

export default page;