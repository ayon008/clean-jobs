import Image from "next/image";
import picture from '../../../public/assets/7c41850856e6cce7e695638f0cab6361.jpeg';
import blogBanner from '../../../public/assets/mike-cox-3yJOe33FeHY-unsplash.jpg'

const page = () => {
    return (
        <div>
            <div className="relative">
                <Image src={blogBanner} alt="" className="h-[90vh]" />
                <div className="bg-black opacity-20 absolute z-10 inset-0"></div>
            </div>
            <div className="px-16">
                <h3 className="mb-10 mt-20 font-bold text-2xl">Latest Blogs</h3>
                <div className="grid grid-cols-3 gap-6 mb-20">
                    <div className="card bg-base-100  rounded-none">
                        <figure>
                            <Image src={picture} alt="blogs" />
                        </figure>
                        <div className="card-body p-4">
                            <h2 className="card-title text-lg">How to start a commercial cleaning service in 5 steps (2023)</h2>
                            <p className="text-primary text-sm">An in-depth guide on how to start commercial cleaning service</p>
                            <p className="text-xs text-primary">12/02/2024</p>
                            <div className="card-actions justify-start">
                                <button className="btn btn-outline rounded-none border-b-2 border-t-0 border-r-0 border-l-0">View Post</button>
                            </div>
                        </div>
                    </div>
                    <div className="card bg-base-100  rounded-none">
                        <figure>
                            <Image src={picture} alt="blogs" />
                        </figure>
                        <div className="card-body p-4">
                            <h2 className="card-title text-lg">How to start a commercial cleaning service in 5 steps (2023)</h2>
                            <p className="text-primary text-sm">An in-depth guide on how to start commercial cleaning service</p>
                            <p className="text-xs text-primary">12/02/2024</p>
                            <div className="card-actions justify-start">
                                <button className="btn btn-outline rounded-none border-b-2 border-t-0 border-r-0 border-l-0">View Post</button>
                            </div>
                        </div>
                    </div>
                    <div className="card bg-base-100  rounded-none">
                        <figure>
                            <Image src={picture} alt="blogs" />
                        </figure>
                        <div className="card-body p-4">
                            <h2 className="card-title text-lg">How to start a commercial cleaning service in 5 steps (2023)</h2>
                            <p className="text-primary text-sm">An in-depth guide on how to start commercial cleaning service</p>
                            <p className="text-xs text-primary">12/02/2024</p>
                            <div className="card-actions justify-start">
                                <button className="btn btn-outline rounded-none border-b-2 border-t-0 border-r-0 border-l-0">View Post</button>
                            </div>
                        </div>
                    </div>
                </div>
                {/*  */}
                <div className="mb-20">
                    <h3 className="text-2xl font-bold">You may also like</h3>
                    <div className="grid grid-cols-3 gap-6 w-3/4 mt-10">
                        <div className="card bg-base-100 rounded-none">
                            <figure>
                                <Image src={picture} alt="blogs" height={200} />
                            </figure>
                            <div className="card-body p-4">
                                <h2 className="card-title text-lg">How to start a commercial cleaning service in 5 steps (2023)</h2>
                                <p className="text-primary text-sm">An in-depth guide on how to start commercial cleaning service</p>
                                <p className="text-xs text-primary">12/02/2024</p>
                                <div className="card-actions justify-start">
                                    <button className="btn btn-outline rounded-none border-b-2 border-t-0 border-r-0 border-l-0">View Post</button>
                                </div>
                            </div>
                        </div>
                        <div className="card bg-base-100  rounded-none">
                            <figure>
                                <Image src={picture} alt="blogs" />
                            </figure>
                            <div className="card-body p-4">
                                <h2 className="card-title text-lg">How to start a commercial cleaning service in 5 steps (2023)</h2>
                                <p className="text-primary text-sm">An in-depth guide on how to start commercial cleaning service</p>
                                <p className="text-xs text-primary">12/02/2024</p>
                                <div className="card-actions justify-start">
                                    <button className="btn btn-outline rounded-none border-b-2 border-t-0 border-r-0 border-l-0">View Post</button>
                                </div>
                            </div>
                        </div>
                        <div className="card bg-base-100  rounded-none">
                            <figure>
                                <Image src={picture} alt="blogs" />
                            </figure>
                            <div className="card-body p-4">
                                <h2 className="card-title text-lg">How to start a commercial cleaning service in 5 steps (2023)</h2>
                                <p className="text-primary text-sm">An in-depth guide on how to start commercial cleaning service</p>
                                <p className="text-xs text-primary">12/02/2024</p>
                                <div className="card-actions justify-start">
                                    <button className="btn btn-outline rounded-none border-b-2 border-t-0 border-r-0 border-l-0">View Post</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default page;