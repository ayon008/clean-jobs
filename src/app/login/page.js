'use client'
import useAuth from '@/Hooks/useAuth';
import { redirect } from 'next/navigation';
import { useForm } from 'react-hook-form';

const Page = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();

    const { signIn } = useAuth();

    const onSubmit = data => {
        const email = data.email;
        const password = data.password;
        signIn(email, password)
            .then(res => {
                const user = res.user;
                console.log(user);
                redirect('http://localhost:3000/')
                reset();
            })
            .catch(err => {
                // Handle error
                console.error(err);
            });
    };

    return (
        <div className='h-screen flex items-center justify-center login'>
            <div className='w-full max-w-md bg-[#F6FBF9] rounded-[40px]'>
                <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
                    <h2 className='text-2xl font-semibold text-center'>Login</h2>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input
                            type="email"
                            placeholder="email"
                            className="input input-bordered"
                            {...register('email', { required: 'Email is required' })}
                        />
                        {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input
                            type="password"
                            placeholder="password"
                            className="input input-bordered"
                            {...register('password', { required: 'Password is required' })}
                        />
                        {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6 w-1/2 mx-auto">
                        <button type="submit" className="btn btn-primary bg-green-500 text-white">Login</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Page;
