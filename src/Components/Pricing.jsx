import TickCircle from './TickCircle';

const Pricing = () => {
    return (
        <div className='px-10 grid grid-cols-3 gap-6 mt-36'>
            <div className='bg-white rounded-[30px] py-12 px-10'>
                <h3 className='text-2xl font-medium nunito'>Free</h3>
                <small className='nunito text-xs font-normal'>Free To Start</small>
                <div className='mt-10'>
                    <small className='nunito text-xs font-normal'>Starting from</small>
                    <div>
                        <span className='text-6xl font-bold inter'>$0</span>
                        <span className='text-gray-500 font-semibold text-base'>/year</span>
                    </div>
                </div>
                <div className='mt-7 space-y-6'>
                    <div className='flex items-center gap-2'>
                        <TickCircle />
                        <p className='text-base nunito font-normal'>View 1 cleaning opportunity per 30 days.</p>
                    </div>
                    <div className='flex items-center gap-2'>
                        <TickCircle />
                        <p className='text-base nunito font-normal'>Find contact information for decision makers.</p>
                    </div>
                    <div className='flex items-center gap-2'>
                        <TickCircle />
                        <p className='text-base nunito font-normal'>Find contact information for local businesses.</p>
                    </div>
                    <div className='flex items-center gap-2'>
                        <TickCircle />
                        <p className='text-base nunito font-normal'> Make solicitations to find subcontractors.</p>
                    </div>
                    <div className='flex items-center gap-2'>
                        <TickCircle />
                        <p className='text-base nunito font-normal'> Cleaning opportunities sent to your inbox.</p>
                    </div>
                    <div className='flex items-center gap-2'>
                        <TickCircle />
                        <p className='text-base nunito font-normal'>Create 1 Lead List with up to 45 total leads.</p>
                    </div>
                    <div className='flex items-center gap-2'>
                        <TickCircle />
                        <p className='text-base nunito font-normal'>Store & manage up to 3 cleaning contracts</p>
                    </div>
                    <div className='flex items-center gap-2'>
                        <TickCircle />
                        <p className='text-base nunito font-normal'>Calculate your bid numbers with our cleaning calculators</p>
                    </div>
                    <div>
                        <button className='btn btn-outline hover:bg-green-700 hover:text-white font-semibold w-full'>Start Now</button>
                    </div>
                </div>
            </div>
            <div className='bg-primary text-white rounded-[30px] py-12 px-10'>
                <h3 className='text-2xl font-medium nunito'>Professional Plan</h3>
                <small className='nunito text-xs font-normal'>Advanced Features for Power Users</small>
                <div className='mt-10'>
                    <small className='nunito text-xs font-normal'>Starting from</small>
                    <div>
                        <span className='text-6xl font-bold inter'>$100</span>
                        <span className='font-semibold text-base'>/year</span>
                    </div>
                    <p className='text-sm nunito'><span className='text-[#ADD8E6]'>Saved 20%!</span> Annual Billing</p>
                </div>
                <div className='mt-7 space-y-6'>
                    <div className='flex items-center gap-2'>
                        <TickCircle />
                        <p className='text-base nunito font-normal'>View unlimited cleaning opportunities.</p>
                    </div>
                    <div className='flex items-center gap-2'>
                        <TickCircle />
                        <p className='text-base nunito font-normal'>Contact information for decision makers and local businesses</p>
                    </div>
                    <div className='flex items-center gap-2'>
                        <TickCircle />
                        <p className='text-base nunito font-normal'>Create unlimited Lead Lists with unlimited leads.</p>
                    </div>
                    <div className='flex items-center gap-2'>
                        <TickCircle />
                        <p className='text-base nunito font-normal'>Put lead lists on autopilot.</p>
                    </div>
                    <div className='flex items-center gap-2'>
                        <TickCircle />
                        <p className='text-base nunito font-normal'>Add Follow Up Flows to Lead Lists</p>
                    </div>
                    <div className='flex items-center gap-2'>
                        <TickCircle />
                        <p className='text-base nunito font-normal'>Email Verifier</p>
                    </div>
                    <div className='flex items-center gap-2'>
                        <TickCircle />
                        <p className='text-base nunito font-normal'>Store & manage unlimited cleaning opportunities/solicitations.</p>
                    </div>
                    <div className='flex items-center gap-2'>
                        <TickCircle />
                        <p className='text-base nunito font-normal'>Create unlimited solicitations</p>
                    </div>
                    <div className='flex items-center gap-2'>
                        <TickCircle />
                        <p className='text-base nunito font-normal'>10% off all Exclusive Leads!</p>
                    </div>
                    <div className='flex items-center gap-2'>
                        <TickCircle />
                        <p className='text-base nunito font-normal'>Instant Notifications when an Exclusive Lead or LayUp is posted</p>
                    </div>
                    <div>
                        <button className='btn btn-outline text-black bg-white hover:bg-green-700 hover:text-white font-semibold w-full'>Start Now</button>
                    </div>
                </div>
            </div>
            <div className='bg-white rounded-[30px] py-12 px-10'>
                <h3 className='text-2xl font-medium nunito'>Essential Plan</h3>
                <small className='nunito text-xs font-normal'>Affordable and Reliable</small>
                <div className='mt-10'>
                    <small className='nunito text-xs font-normal'>Starting from</small>
                    <div>
                        <span className='text-6xl font-bold inter'>$60</span>
                        <span className='text-gray-500 font-semibold text-base'>/bi-annually</span>
                    </div>
                    <p className='text-sm nunito'>Billed every 6 months</p>
                </div>
                <div className='mt-7 space-y-6'>
                    <div className='flex items-center gap-2'>
                        <TickCircle />
                        <p className='text-base nunito font-normal'>View unlimited cleaning opportunities.</p>
                    </div>
                    <div className='flex items-center gap-2'>
                        <TickCircle />
                        <p className='text-base nunito font-normal'>Contact information for decision makers and local businesses</p>
                    </div>
                    <div className='flex items-center gap-2'>
                        <TickCircle />
                        <p className='text-base nunito font-normal'>Create unlimited Lead Lists with unlimited leads.</p>
                    </div>
                    <div className='flex items-center gap-2'>
                        <TickCircle />
                        <p className='text-base nunito font-normal'>Put lead lists on autopilot.</p>
                    </div>
                    <div className='flex items-center gap-2'>
                        <TickCircle />
                        <p className='text-base nunito font-normal'>Add Follow Up Flows to Lead Lists</p>
                    </div>
                    <div className='flex items-center gap-2'>
                        <TickCircle />
                        <p className='text-base nunito font-normal'>Email Verifier</p>
                    </div>
                    <div className='flex items-center gap-2'>
                        <TickCircle />
                        <p className='text-base nunito font-normal'>Store & manage unlimited cleaning opportunities/solicitations.</p>
                    </div>
                    <div className='flex items-center gap-2'>
                        <TickCircle />
                        <p className='text-base nunito font-normal'>Create unlimited solicitations</p>
                    </div>
                    <div className='flex items-center gap-2'>
                        <TickCircle />
                        <p className='text-base nunito font-normal'>10% off all Exclusive Leads!</p>
                    </div>
                    <div className='flex items-center gap-2'>
                        <TickCircle />
                        <p className='text-base nunito font-normal'>Instant Notifications when an Exclusive Lead or LayUp is posted</p>
                    </div>
                    <div>
                        <button className='btn btn-outline hover:bg-green-700 hover:text-white font-semibold w-full'>Start Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Pricing;