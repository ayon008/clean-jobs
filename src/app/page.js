import Image from "next/image";
import bannerImage from '../../public/assets/1904c9e7a4e1664e4e229a2f3c915594.png'
import image from '../../public/assets/new-opp-snip.png'
import image2 from '../../public/assets/dm-search-snip.png'
import image3 from '../../public/assets/solicitationsnip.png';
import image4 from '../../public/assets/followupflow1.png'
import Button from "@/Components/Button";
import Banner from "@/Components/Banner";
import { FaHandshake, FaRobot, FaRocket, FaSearch, FaThumbsUp } from "react-icons/fa";
import TickCircle from "@/Components/TickCircle";
import feature1 from '../../public/assets/cytonn-photography-n95VMLxqM2I-unsplash.jpg'
import feature2 from '../../public/assets/nuno-silva-Rcsa_Rg77Tc-unsplash.jpg'
import feature3 from '../../public/assets/arlington-research-kN_kViDchA0-unsplash.jpg'
import feature4 from '../../public/assets/brett-jordan-LPZy4da9aRo-unsplash.jpg'
import Reviews from "@/Components/Reviews";
import Navbar from "@/Shared/Navbar";
import Footer from "@/Shared/Footer";


export default function Home() {
  return (
    <div>
      <Navbar />
      {/* Banner */}
      <div className="">
        <div className="w-full h-full relative">
          <Image src={bannerImage} alt="Janitorial Leads" className="h-full w-full"></Image>
          <div className="absolute inset-0 bg-black opacity-5"></div>
          <div className="text-black text-left absolute top-1/2 right-1/2 transform -translate-y-1/2 w-1/2 space-y-4 z-10 px-16">
            <p className="text-base font-semibold">Quality Leads at a fair price</p>
            <h1 className="text-4xl font-bold">
              Maximize Your Cleaning Contracts with Our Superior Janitorial Leads & Services!
            </h1>
            <p className="text-primary font-semibold">Efficiently connecting you to top janitorial leads, saving you time, energy, and money.</p>
            <div className="flex items-center gap-2">
              <Button />
              <p className="text-black font-semibold">No credit needed</p>
            </div>
          </div>
        </div>
      </div>

      {/*  */}
      <div>
        <div className="px-16">
          <div className="flex items-center justify-between mt-20 mb-8">
            <div className="lg:w-1/2">
              <h2 className="text-4xl font-bold">We always provide the <br></br> best service</h2>
            </div>
            <div className="lg:w-1/2">
              <h3 className="font-bold mb-2">Services</h3>
              <p className="text-primary">While we can customize our lead packages to meet your specific needs, most clients choose regular lead deliveries to consistently secure new janitorial contracts</p>
            </div>
          </div>
          <hr className="h-[1px] bg-green-500" />
          <div className="flex items-center justify-center w-3/4 mx-auto my-10">
            <div className="space-y-4 w-1/2">
              <h2 className="text-2xl font-bold"><span className="underline decoration-blue-400 font-bold">Discover </span>
                cleaning opportunities effortlessly.</h2>
              <p className="text-base text-[#808080]">Reach tons of <span className="font-bold">decision makers</span> and get <span className="font-bold">opportunities</span> sent to your inbox, <span className="font-bold">all on autopilot</span>.</p>
            </div>
            <div className="lg:w-1/2">
              <Banner />
            </div>
          </div>
          <div>
            <div className="text-center my-20">
              <h2 className="text-4xl font-bold">Smart effort, great results</h2>
              <p className="text-primary text-lg mt-2 w-3/4 mx-auto">Receive cleaning opportunities directly to your inbox, effortlessly subcontract cleaning work, and connect with numerous decision-makers automatically.</p>
            </div>
            <div className='flex items-start justify-between my-20'>
              <Image className='w-[60%] h-auto' src={image} alt="TO DO" />
              <div className=''>
                <FaSearch size={'4rem'} className='mb-10' />
                <div>
                  <h3 className='text-2xl font-bold'>Find Cleaning Opportunities</h3>
                  <p className='text-primary text-lg mt-6'>Find upcoming cleaning opportunites like office cleaning and construction clean ups all in one place for every state.</p>
                </div>
              </div>
            </div>
            <div className='flex flex-row-reverse items-start'>
              <Image className='w-[60%] h-auto' src={image2} alt="" />
              <div className=''>
                <FaRobot size={'4rem'} className='mb-10' />
                <div>
                  <h3 className='text-2xl font-bold'>Reach Decision Makers on autopilot</h3>
                  <p className='text-primary text-lg mt-6'>Search for decision makers near you then reach out to them on autopilot.</p>
                </div>
              </div>
            </div>
            <div className='flex gap-6 items-start my-20'>
              <Image className='w-[60%] h-auto' src={image3} alt="" />
              <div className=''>
                <FaHandshake color='yellow' size={'4rem'} className='mb-10' />
                <div>
                  <h3 className='text-2xl font-bold'>Post your own opportunites and get in touch with tons of subcontractors</h3>
                  <p className='text-primary text-lg mt-6'>When you post your own opportunities on CleanJob, it gets sent to tons of commercial cleaning subcontractors. Once a cleaning contractor shows interest in your opportunity you can start a conversation.</p>
                </div>
              </div>
            </div>
            <div className='flex flex-row-reverse items-start'>
              <Image className='w-[60%] h-auto' src={image4} alt="" />
              <div className=''>
                <FaRocket size={'4rem'} className='mb-10' />
                <div>
                  <h3 className='text-2xl font-bold'>Autopilot follow up emails</h3>
                  <p className='text-primary text-lg mt-6'>CleanJob sends follow up emails to your leads after a set number of days if they dont open or respond to your cold emails.</p>
                </div>
              </div>
            </div>
            <div className='my-20'>
              <h3 className='text-center font-bold text-3xl flex justify-center items-center gap-2'><span>Real Testimonials from Satisfied Customers</span> <FaThumbsUp /></h3>
              {/*  */}
              <p className="text-green-500 text-xs text-left my-10">/Testimonials (clean companies)</p>
              <Reviews />
            </div>
          </div>
          <div>
            <h3 className="text-center text-3xl font-bold">Other cool features</h3>
            {/*  */}
            <div className='grid grid-cols-4 my-20 gap-3'>
              <div className="card bg-base-100 shadow-xl">
                <figure>
                  <Image src={feature1} placeholder="blur" className="w-full h-[150px] hover:scale-110 transition-all duration-200" alt="store-management" />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">
                    Cleaning Contracts
                  </h2>
                  <p className='text-primary text-sm'>Our user-friendly cleaning contract calculators streamline your pricing process, helping you quickly generate winning quotes and secure more contracts</p>
                </div>
              </div>
              <div className="card bg-base-100 shadow-xl">
                <figure>
                  <Image src={feature2} placeholder="blur" className="w-full h-[150px] hover:scale-110 transition-all" alt="store-management" />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">
                    Organize & Track Cleaning Opportunities
                  </h2>
                  <p className='text-primary text-sm'>No more struggling to remember every contract you've encountered or bid on. CleanJob helps you track all your new, old, and desired cleaning opportunities in one convenient place.</p>
                </div>
              </div>
              <div className="card bg-base-100 shadow-xl">
                <figure>
                  <Image src={feature3} placeholder="blur" className="w-full h-[150px] hover:scale-110 transition-all" alt="Lead" />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">
                    Build & Manage Lead Lists
                  </h2>
                  <p className='text-primary text-sm'>Effortlessly keep track of all your potential clients with Lead Lists. CleanJob integrates with your email and uses templates to automatically reach out to numerous potential clients.</p>
                </div>
              </div>
              <div className="card bg-base-100 shadow-xl">
                <figure>
                  <Image src={feature4} placeholder="blur" className="w-full h-[150px] hover:scale-110 transition-all" alt="Mail" />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">
                    Cleaning Opportunities Sent to Your Inbox
                  </h2>
                  <p className='text-primary text-sm'>CleanJob sends you email notifications directly to your inbox whenever new opportunities are posted.</p>
                </div>
              </div>
            </div>
          </div>

          <h3 className='text-3xl font-bold text-center'>Plans & Pricing</h3>
          <p className='text-center text-primary mt-6 text-lg'>Whether your time-saving automation needs are large or small, we’re here to help you scale.</p>
          {/*  */}
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
        </div>
      </div>
      <Footer />
    </div >
  )
}
