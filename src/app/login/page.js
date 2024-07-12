import Image from 'next/image';

const Page = () => {
    return (
        <div className='h-screen flex items-center justify-center login'>
            <div className='w-full max-w-md bg-[#F6FBF9] rounded-[40px]'>
                <form className="card-body">
                    <h2 className='text-2xl font-semibold text-center'>Login</h2>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" placeholder="password" className="input input-bordered" required />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6 w-1/2 mx-auto">
                        <button className="btn btn-primary bg-green-500 text-white">Login</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Page;
