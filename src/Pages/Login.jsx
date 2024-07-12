import { useForm } from 'react-hook-form';
import PageTitle from '../Shared/PageTitle';
import useAuth from '../Hook/useAuth';

const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { signIn } = useAuth();
    
    const onSubmit = (data) => {
        console.log(data);
    };

    return (
        <div className="h-screen flex flex-col">
            <div className="space-y-10 my-auto">
                <div>
                    <PageTitle name={'Log In'} />
                </div>
                <form
                    className="w-[450px] mx-auto text-center space-y-6 rounded-lg shadow-2xl px-8 py-16"
                    onSubmit={handleSubmit(onSubmit)}
                >
                    <div className="form-control space-y-2">
                        <label>Email</label>
                        <input
                            className="border-2 border-gray-200 p-1"
                            type="email"
                            {...register('email', { required: 'Email is required' })}
                        />
                        {errors.email && (
                            <p className="text-red-500">{errors.email.message}</p>
                        )}
                    </div>
                    <div className="form-control space-y-2">
                        <label>Password</label>
                        <input
                            className="border-2 border-gray-200 p-1"
                            type="password"
                            {...register('password', { required: 'Password is required' })}
                        />
                        {errors.password && (
                            <p className="text-red-500">{errors.password.message}</p>
                        )}
                    </div>
                    <input
                        className="btn bg-blue-400 text-white text-lg px-10"
                        type="submit"
                        value="Login"
                    />
                    <p>Forgot Your Password?</p>
                </form>
            </div>
        </div>
    );
};

export default Login;
