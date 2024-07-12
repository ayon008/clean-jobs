'use client'
import { useRouter } from 'next/navigation'

const Button = () => {
    const router = useRouter();
    return (
        <button onClick={() => router.push('/register')} className='btn bg-green-500 font-semibold text-white border-none text-lg hover:bg-green-600'>Sign Up</button>
    );
};

export default Button;