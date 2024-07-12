import PageTitle from "../Shared/PageTitle";

const AddaContract = () => {
    return (
        <div className="mt-10 w-fit mx-auto">
            <PageTitle name={'Add A Contract To Your Master List'} />
            <p className="text-center text-primary mt-6">Add all your past, current, and upcoming contracts you find to your Master List.</p>
            <form className="card-body rounded-xl mt-10 shadow-2xl">
                <h3 className="text-blue-400 text-2xl tracking-wide">Contract Information</h3>
                <div className="flex items-center gap-3">
                    <div className="form-control w-full">
                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text text-sm">Contact Name</span>
                            </div>
                            <input type="text" placeholder="William Johnson" className="input input-bordered w-full" />
                            <div className="label">
                                <span className="label-text-alt">*required</span>
                            </div>
                        </label>
                    </div>
                    <div className="form-control w-full">
                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text text-sm">Contact Email</span>
                            </div>
                            <input type="email" placeholder="william.johnson@example.com" className="input input-bordered w-full max-w-xs" />
                            <div className="label">
                                <span className="label-text-alt">*required</span>
                            </div>
                        </label>
                    </div>
                </div>
                <div className="flex items-center gap-3">
                    <div className="form-control w-full">
                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text text-sm">Phone Number</span>
                            </div>
                            <input type="tel" placeholder="+1 (555) 123-4567" className="input input-bordered w-full" />
                            <div className="label">
                                <span className="label-text-alt">*required</span>
                            </div>
                        </label>
                    </div>
                    <div className="form-control w-full">
                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text text-sm">Ext</span>
                            </div>
                            <input type="text" placeholder="123" className= "input input-bordered w-full max-w-xs" />
                            <div className="label">
                                <span className="label-text-alt">*required</span>
                            </div>
                        </label>
                    </div>
                </div>
                <div className="flex items-center gap-3">
                    <div className="form-control w-full">
                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text text-sm">Contact Name</span>
                            </div>
                            <input type="text" placeholder="William Johnson" className="input input-bordered w-full" />
                            <div className="label">
                                <span className="label-text-alt">*required</span>
                            </div>
                        </label>
                    </div>
                    <div className="form-control w-full">
                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text text-sm">Contact Name</span>
                            </div>
                            <input type="text" placeholder="William Johnson" className="input input-bordered w-full max-w-xs" />
                            <div className="label">
                                <span className="label-text-alt">*required</span>
                            </div>
                        </label>
                    </div>
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
                <div className="form-control mt-6">
                    <button className="btn btn-primary">Login</button>
                </div>
            </form>
        </div>
    );
};

export default AddaContract;