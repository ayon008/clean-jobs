import TickCircle from './TickCircle';

const Pricing = () => {
    return (
        <div className='my-20 grid grid-cols-3 gap-10 py-10'>
            <div className="h-full flex flex-col px-8 py-6">
                <div className='text-left'>
                    <div className='mt-2'>
                        <span className='text-4xl font-bold'>$0</span>
                        <span className='text-primary font-semibold text-xs'>/year</span>
                    </div>
                    <p className='text-green-500 text-xl mt-6'>Free</p>
                </div>
                <ul className='mt-6 space-y-3 text-left text-xs'>
                    <li className='flex gap-2'>
                        <TickCircle className="" /><span className='text-left w-fit'>View 1 cleaning opportunity per 30 days.</span>
                    </li>
                    <li className='flex gap-2'>
                        <TickCircle className="" /><span className='text-left w-fit'>Search/view 5 decision makers per search.</span>
                    </li>
                    <li className='flex gap-2'>
                        <TickCircle className="" /><span className='text-left w-fit'>Cleaning opportunities sent to your inbox.</span>
                    </li>
                    <li className='flex gap-2'>
                        <TickCircle className="" /><span className='text-left w-fit'>Cleaning contract calculators</span>
                    </li>
                    <li className='flex gap-2'>
                        <TickCircle className="" /><span className='text-left w-fit'>Create 1 Lead List with up to 45 total leads.</span>
                    </li>
                    <li className='flex gap-2'>
                        <TickCircle className="" /><span className='text-left w-fit'>Store & manage up to 3 cleaning opportunities/solicitations.</span>
                    </li>
                    <li className='flex gap-2'>
                        <TickCircle className="" /><span className='text-left w-fit'>Post up to 3 solicitations.</span>
                    </li>
                </ul>
                <button className='btn mt-auto bg-green-500 font-semibold text-white text-base w-full'>Free to start</button>
            </div>

            <div className='h-full flex flex-col py-6 px-8'>
                <div className='text-left'>
                    <div className='mt-2'>
                        <span className='text-4xl font-bold'>$60</span>
                        <span className='text-primary font-semibold text-xs'>/bi-annually</span>
                    </div>
                    <p className='text-green-500 text-xl mt-6'>Unlimited</p>
                </div>
                <small className='text-xs'>(Billed every 6 months)</small>
                <ul className='my-6 space-y-3 text-left text-xs'>
                    <li className='flex gap-2'>
                        <TickCircle className="" /><span className='text-left w-fit'>View unlimited cleaning opportunities.</span>
                    </li>
                    <li className='flex gap-2'>
                        <TickCircle className="" /><span className='text-left w-fit'>Contact information for unlimited decision makers.</span>
                    </li>
                    <li className='flex gap-2'>
                        <TickCircle className="" /><span className='text-left w-fit'>Create unlimited Lead Lists with unlimited leads.</span>
                    </li>
                    <li className='flex gap-2'>
                        <TickCircle className="" /><span className='text-left w-fit'>Put lead lists on autopilot.</span>
                    </li>
                    <li className='flex gap-2'>
                        <TickCircle className="" /><span className='text-left w-fit'>Add Follow Up Flows to Lead Lists</span>
                    </li>
                    <li className='flex gap-2'>
                        <TickCircle className="" /><span className='text-left w-fit'>Email Verifier</span>
                    </li>
                    <li className='flex gap-2'>
                        <TickCircle className="" /><span className='text-left w-fit'>Store & manage unlimited cleaning opportunities/solicitations.</span>
                    </li>
                    <li className='flex gap-2'>
                        <TickCircle className="" /><span className='text-left w-fit'>Create unlimited solicitations</span>
                    </li>
                    <li className='flex gap-2'>
                        <TickCircle className="" /><span className='text-left w-fit'>10% off all Exclusive Leads!</span>
                    </li>
                    <li className='flex gap-2'>
                        <TickCircle className="" /><span className='text-left w-fit'>Instant Notifications when an Exclusive Lead or LayUp is posted.</span>
                    </li>
                </ul>
                <button className='btn mt-auto bg-green-500 font-semibold text-white text-base w-full'>Free to start</button>
            </div>

            <div className="h-full w-fit px-8 py-6 rounded-2xl flex flex-col bg-[#004d40] text-white">
                <div className="flex flex-row-reverse">
                    <div className="btn btn-outline text-white rounded-2xl text-xs">Most Popular</div>
                    <div className='text-left'>
                        <div className='text-left'>
                            <div className='mt-2'>
                                <span className='text-4xl font-bold'>$100</span>
                                <span className='text-primary font-semibold text-xs'>/year</span>
                            </div>
                            <p className='text-green-500 text-xl mt-6'>Unlimited Annual</p>
                        </div>
                        <small className='text-xs'>( <span className=''>20% OFF!</span> Billed annually)</small>
                    </div>
                </div>
                <ul className='space-y-3 text-left my-6 text-xs'>
                    <li className='flex gap-2'>
                        <TickCircle className="" /><span className='text-left w-fit'>View unlimited cleaning opportunities.</span>
                    </li>
                    <li className='flex gap-2'>
                        <TickCircle className="" /><span className='text-left w-fit'>Contact information for unlimited decision makers.</span>
                    </li>
                    <li className='flex gap-2'>
                        <TickCircle className="" /><span className='text-left w-fit'>Create unlimited Lead Lists with unlimited leads.</span>
                    </li>
                    <li className='flex gap-2'>
                        <TickCircle className="" /><span className='text-left w-fit'>Put lead lists on autopilot.</span>
                    </li>
                    <li className='flex gap-2'>
                        <TickCircle className="" /><span className='text-left w-fit'>Add Follow Up Flows to Lead Lists</span>
                    </li>
                    <li className='flex gap-2'>
                        <TickCircle className="" /><span className='text-left w-fit'>Email Verifier</span>
                    </li>
                    <li className='flex gap-2'>
                        <TickCircle className="" /><span className='text-left w-fit'>Store & manage unlimited cleaning opportunities/solicitations.</span>
                    </li>
                    <li className='flex gap-2'>
                        <TickCircle className="" /><span className='text-left w-fit'>Create unlimited solicitations</span>
                    </li>
                    <li className='flex gap-2'>
                        <TickCircle className="" /><span className='text-left w-fit'>10% off all Exclusive Leads!</span>
                    </li>
                    <li className='flex gap-2'>
                        <TickCircle className="" /><span className='text-left w-fit'>Instant Notifications when an Exclusive Lead or LayUp is posted.</span>
                    </li>
                </ul>
                <button className='btn bg-green-500 font-semibold text-white text-base mt-auto w-full'>Free to start</button>
            </div>
        </div>
    );
};

export default Pricing;