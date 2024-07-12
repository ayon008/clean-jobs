import { FaHandshake, FaRobot, FaRocket, FaSearch, FaThumbsUp } from 'react-icons/fa';
import image from '../assets/new-opp-snip.png'
import image2 from '../assets/dm-search-snip.png'
import image3 from '../assets/solicitationsnip.png';
import image4 from '../assets/followupflow1.png'
import { TiCalculator } from 'react-icons/ti';
import { MdStore } from 'react-icons/md';
import { AiOutlineFileText } from 'react-icons/ai';
import TickCircle from './TickCircle';

const Others = () => {
    return (
        <div>
            <div className="text-center">
                <h2 className="text-3xl font-bold">Work smarter not harder</h2>
                <p className="text-primary text-lg mt-2 w-3/4 mx-auto">Get cleaning opportunities sent to your inbox, easily find and sub work to cleaning subcontractors, and reach tons of decision makers on autopilot.</p>
            </div>
            <div className='flex items-start my-20'>
                <img className='w-[70%] h-auto' src={image} alt="" />
                <div className='w-1/2'>
                    <FaSearch size={'4rem'} className='mb-10' />
                    <div>
                        <h3 className='text-2xl font-bold'>Find Cleaning Opportunities</h3>
                        <p className='text-primary text-lg mt-6'>Find upcoming cleaning opportunites like office cleaning and construction clean ups all in one place for every state.</p>
                    </div>
                </div>
            </div>
            <div className='flex flex-row-reverse items-start'>
                <img className='w-[70%] h-auto' src={image2} alt="" />
                <div className=''>
                    <FaRobot size={'4rem'} className='mb-10' />
                    <div>
                        <h3 className='text-2xl font-bold'>Reach Decision Makers on autopilot</h3>
                        <p className='text-primary text-lg mt-6'>Search for decision makers near you then reach out to them on autopilot.</p>
                    </div>
                </div>
            </div>
            <div className='flex gap-6 items-start my-20'>
                <img className='w-[60%] h-auto' src={image3} alt="" />
                <div className=''>
                    <FaHandshake color='yellow' size={'4rem'} className='mb-10' />
                    <div>
                        <h3 className='text-2xl font-bold'>Post your own opportunites and get in touch with tons of subcontractors</h3>
                        <p className='text-primary text-lg mt-6'>When you post your own opportunities on CleanJob, it gets sent to tons of commercial cleaning subcontractors. Once a cleaning contractor shows interest in your opportunity you can start a conversation.</p>
                    </div>
                </div>
            </div>
            <div className='flex flex-row-reverse items-start'>
                <img className='w-[70%] h-auto' src={image4} alt="" />
                <div className=''>
                    <FaRocket size={'4rem'} className='mb-10' />
                    <div>
                        <h3 className='text-2xl font-bold'>Autopilot follow up emails</h3>
                        <p className='text-primary text-lg mt-6'>CleanJob sends follow up emails to your leads after a set number of days if they dont open or respond to your cold emails.</p>
                    </div>
                </div>
            </div>
            <div className='my-20'>
                <h3 className='text-center font-bold text-3xl flex justify-center items-center gap-2'><span>What cleaning companies think</span> <FaThumbsUp /></h3>

                {/*  */}
                <div className='grid grid-cols-3 gap-x-4 gap-y-2 my-20'>
                    <div className='border-2 border-gray-200 p-6 text-primary'>
                        <h4>
                            <span className='font-bold'>The best thing I ever did was invest in CleanJob. When I first opened my cleaning business</span>, I wasn’t getting any clients and quite frankly I wanted to give up. I heard about CleanJob and decided to give it a try. Within my first week of signing up, I secured two cleaning contracts! Still to this day, I’m gettin leads and my clientele is increasing. I definitely recommend to anyone!
                        </h4>
                        <p className='w-fit my-2 ms-auto text-blue-400'>- Poliard Services</p>
                    </div>
                    <div className='border-2 border-gray-200 p-6 text-primary'>
                        <h4>
                            <span className='font-bold'>CleanJob has helped my business out!</span>, It was a small yearly investment but I get bids sent to my email, have gotten some clients from the email blasts, and also developed some great relationship with future clients as well. Jerome and his team will answer any question you have they even helped me bid on my first contract. Trust the process with CleanJob and you will not regret it.
                        </h4>
                        <p className='w-fit my-2 ms-auto text-blue-400'> Valkyrie Cleaning LLC</p>
                    </div>
                    <div className='border-2 border-gray-200 p-6 text-primary'>
                        <h4>
                            <span className='font-bold'>CleanJob has given me an opportunity to meet and service Chick-fil-A here in Jacksonville FL. </span>, The information given was accurate and I heard back from the owner the same evening I reached out to him by email. I'd like to thank Jerome for his consistency in posting new opportunities daily!
                        </h4>
                        <p className='w-fit my-2 ms-auto text-blue-400'>- Dust Trappers, LLC</p>
                    </div>
                    <div className='border-2 border-gray-200 p-6 text-primary'>
                        <h4>
                            If anyone is looking for a site to get real leads, use CleanJob. I found a local match, set up a walk through and submitted a bid for the project.<span className='font-bold'> I recommend it to anyone looking for their next potential client.</span>
                        </h4>
                        <p className='w-fit my-2 ms-auto text-blue-400'>- Serenity Residential and Commercial Cleaning Inc</p>
                    </div>
                    <div className='border-2 border-gray-200 p-6 text-primary'>
                        <h4>
                            <span className='font-bold'>The best thing I ever did was invest in CleanJob. When I first opened my cleaning business</span>, I wasn’t getting any clients and quite frankly I wanted to give up. I heard about CleanJob and decided to give it a try. Within my first week of signing up, I secured two cleaning contracts! Still to this day, I’m gettin leads and my clientele is increasing. I definitely recommend to anyone!
                        </h4>
                        <p className='w-fit my-2 ms-auto text-blue-400'>- All Smiles Cleaning Services LLC</p>
                    </div>
                    <div className='border-2 border-gray-200 p-6 text-primary'>
                        <h4>
                            We were looking for an online leads generator company in hopes of connecting us to “Key Decision Makers” without paying an arm and a leg. Jerome at CleanJob more than delivered. They provided our company with an extensive list of leads throughout the state, county and our local city that were not advertised or known to the general public.<span className='font-bold'>We saw an immediate opportunity in growing our client base through the most recent and past leads list reaching out to key decision makers through CleanJob. Sales for us have increased in the last 3 months! our business has only been in business now for a little over a year! </span>The good people at CleanJob have taken the time to build a list of great leads. We would have never made the connections we have now if it wasn’t for Jerome! We wholeheartedly recommend CleanJob to everyone we know.
                        </h4>
                        <p className='w-fit my-2 ms-auto text-blue-400'>-  Spotless Cleaning Services</p>
                    </div>
                </div>
            </div>
            <div>
                <h3 className="text-center text-3xl">Other cool features</h3>
                {/*  */}
                <div className='grid grid-cols-4 my-20 gap-6'>
                    <div className='border-2 border-gray-200 p-6'>
                        <TiCalculator size={'4rem'} />
                        <h4 className='text-2xl my-6 font-bold'>Cleaning Calculators</h4>
                        <p className='text-primary text-lg'>With our easy to use cleaning contract calculators you'll be able to shave time off of your pricing process, and come up with numbers that will win you contracts.</p>
                    </div>
                    <div className='border-2 border-gray-200 p-6'>
                        <MdStore size={'4rem'} />
                        <h4 className='text-2xl my-6 font-bold'>Store & Manage Cleaning Opportunities</h4>
                        <p className='text-primary text-lg'>Stop trying to remember every contract you have ever come across or bid on. CleanJob helps you keep track of all your new, old, and desired cleaning opportunites in one place.</p>
                    </div>
                    <div className='border-2 border-gray-200 p-6'>
                        <AiOutlineFileText size={'4rem'} />
                        <h4 className='text-2xl my-6 font-bold'>Create Lead Lists</h4>
                        <p className='text-primary text-lg'>Keep track of all of your potential clients with Lead Lists. CleanJob connects with your email and uses templates to reach tons of potential clients on autopilot.</p>
                    </div>
                    <div className='border-2 border-gray-200 p-6'>
                        <TiCalculator size={'4rem'} />
                        <h4 className='text-2xl my-6 font-bold'>Cleaning Calculators</h4>
                        <p className='text-primary text-lg'>With our easy to use cleaning contract calculators you'll be able to shave time off of your pricing process, and come up with numbers that will win you contracts.</p>
                    </div>
                </div>
            </div>

            <h3 className='text-3xl font-bold text-center'>Pricing</h3>
            <p className='text-center text-primary mt-6 text-lg'>CleanJob is free to start. No credit card needed</p>
            {/*  */}
            <div className='grid grid-cols-3 gap-7 my-20'>
                {/*  */}
                <div className='border-2 border-gray-200 py-14 px-6 h-fit'>
                    <div className='text-center'>
                        <p className='text-blue-400 text-3xl'>Free</p>
                        <div className='relative w-fit mx-auto mt-2'>
                            <span className='absolute -left-[20%] text-primary text-2xl'>$</span>
                            <span className='text-7xl font-bold'>0</span>
                            <span className='text-primary font-semibold'>/yr</span>
                        </div>
                    </div>
                    <ul className='mt-6 space-y-3 text-left'>
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
                    <button className='btn bg-blue-400 font-semibold text-white text-lg mt-6 w-full'>Free to start</button>
                </div>
                {/*  */}
                <div className='border-4 shadow-2xl border-blue-400 py-14 px-6 h-fit'>
                    <div className='text-center'>
                        <p className='text-blue-400 text-3xl'>Unlimited Annual</p>
                        <div className='relative w-fit mx-auto mt-2'>
                            <span className='absolute -left-[20%] text-primary text-2xl'>$</span>
                            <span className='text-7xl font-bold'>100</span>
                            <span className='text-primary font-semibold'>/yr</span>
                        </div>
                        <small>( <span className='text-blue-400'>13% OFF!</span> Billed annually)</small>
                    </div>
                    <ul className='mt-6 space-y-3 text-left'>
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
                            <TickCircle className="" /><span className='text-left w-fit'>Store & manage unlimited cleaning opportunites/solicitations.</span>
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
                    <button className='btn bg-blue-400 font-semibold text-white text-lg mt-6 w-full'>Free to start</button>
                </div>
                <div className='border-2 border-gray-200 py-14 px-6'>
                    <div className='text-center'>
                        <p className='text-blue-400 text-3xl'>Unlimited</p>
                        <div className='relative w-fit mx-auto mt-2'>
                            <span className='absolute -left-[20%] text-primary text-2xl'>$</span>
                            <span className='text-7xl font-bold'>50</span>
                            <span className='text-primary font-semibold'>/yr</span>
                        </div>
                        <small>(Billed every 6 months)</small>
                    </div>
                    <ul className='mt-6 space-y-3 text-left'>
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
                            <TickCircle className="" /><span className='text-left w-fit'>Store & manage unlimited cleaning opportunites/solicitations.</span>
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
                    <button className='btn bg-blue-400 font-semibold text-white text-lg mt-6 w-full'>Free to start</button>
                </div>
            </div>
        </div>
    );
};

export default Others;