import Image from "next/image";
import image from '../../public/assets/new-opp-snip.png'
import image2 from '../../public/assets/dm-search-snip.png'
import image3 from '../../public/assets/solicitationsnip.png';
import image4 from '../../public/assets/followupflow1.png'
import Banner from "@/Components/Banner";
import { FaHandshake, FaRobot, FaRocket, FaSearch, FaThumbsUp } from "react-icons/fa";
import feature1 from '../../public/assets/cytonn-photography-n95VMLxqM2I-unsplash.jpg'
import feature2 from '../../public/assets/nuno-silva-Rcsa_Rg77Tc-unsplash.jpg'
import feature3 from '../../public/assets/arlington-research-kN_kViDchA0-unsplash.jpg'
import feature4 from '../../public/assets/brett-jordan-LPZy4da9aRo-unsplash.jpg'
import Reviews from "@/Components/Reviews";
import Navbar from "@/Shared/Navbar";
import Footer from "@/Shared/Footer";
import Pricing from "@/Components/Pricing";
import SectionTitles from "@/Components/SectionTitles";
import side1 from "../../public/assets/8cfc2e02bcd7b344adf9b4a6eecd5fd9.png";
import FaCheck from "@/Components/FaCheck";


export default function Home() {
  return (
    <div className="relative">

      {/* Navbar */}
      <Navbar />

      {/* Banner */}
      <Banner />

      {/* Section */}
      <div className="max-w-screen-2xl mx-auto px-10">
        <h5 className="text-secondary nunito text-center font-light text-xl mt-20">What We Offer</h5>
        <SectionTitles heading={'Maximize results with minimal effort'} subHeading={"Get cleaning jobs sent straight to your inbox, easily find and delegate tasks to subcontractors, and engage with decision makers automatically"} />

        <div className="mt-32 flex">
          <div className="2xl:pr-12 2xl:pt-12 2xl:pb-12 lg:pr-8 lg:pt-8 lg:pb-8 rounded-[32px] bg-[#F4F4F4] lg:w-1/2 md:w-1/2 xl:w-fit xl:mx-auto 2xl:w-fit 2xl:mx-auto">
            <Image src={side1} alt="" />
          </div>
          <div className="space-y-8 w-1/2 my-auto pl-24">
            <h5 className="text-primary poppins font-medium text-lg">Upcoming Cleaning Project Access</h5>
            <h1 className="text-5xl poppins font-semibold">Uncover Top <br /> Cleaning Jobs</h1>
            <p className="poppins font-normal">Access upcoming cleaning projects, including office and construction clean-ups, all gathered in one place.</p>
            <div className="space-y-1">
              <div className="flex items-center gap-[11px]">
                <div className="">
                  <FaCheck />
                </div>
                <p className="text-lg font-medium poppins">Effortless Access</p>
              </div>
              <div className="flex items-center gap-[11px]">
                <div className="">
                  <FaCheck />
                </div>
                <p className="text-lg font-medium poppins">Enhanced Planning</p>
              </div>
              <div className="flex items-center gap-[11px]">
                <div className="">
                  <FaCheck />
                </div>
                <p className="text-lg font-medium poppins">Expanded Opportunities</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-32 flex flex-row-reverse">
          <div className="2xl:pl-12 2xl:pt-12 2xl:pb-12 lg:pl-8 lg:pt-8 lg:pb-8 rounded-[32px] bg-[#F4F4F4] lg:w-1/2 md:w-1/2 xl:w-fit xl:mx-auto 2xl:w-fit 2xl:mx-auto">
            <Image src={side1} alt="" />
          </div>
          <div className="space-y-8 w-1/2 my-auto pr-24">
            <h5 className="text-primary poppins font-medium text-lg">Local Decision Maker Discovery</h5>
            <h1 className="text-5xl poppins font-semibold">Reach Decision Makers Instantly & Effortlessly</h1>
            <p className="poppins font-normal">Discover key decision makers nearby and initiate contact seamlessly</p>
            <div className="space-y-1">
              <div className="flex items-center gap-[11px]">
                <div className="">
                  <FaCheck />
                </div>
                <p className="text-lg font-medium poppins">Effortless Networking</p>
              </div>
              <div className="flex items-center gap-[11px]">
                <div className="">
                  <FaCheck />
                </div>
                <p className="text-lg font-medium poppins">Seamless Outreach</p>
              </div>
              <div className="flex items-center gap-[11px]">
                <div className="">
                  <FaCheck />
                </div>
                <p className="text-lg font-medium poppins">Enhanced Collaboration</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-32 flex">
          <div className="2xl:pr-12 2xl:pt-12 2xl:pb-12 lg:pr-8 lg:pt-8 lg:pb-8 rounded-[32px] bg-[#F4F4F4] lg:w-1/2 md:w-1/2 xl:w-fit xl:mx-auto 2xl:w-fit 2xl:mx-auto">
            <Image src={side1} alt="" />
          </div>
          <div className="space-y-6 w-1/2 my-auto pl-24">
            <h5 className="text-primary poppins font-medium text-lg">Connect with Cleaning Subcontractors</h5>
            <h1 className="text-5xl poppins font-semibold">Share your projects and engage with a wide network of subcontractors</h1>
            <p className="poppins font-normal">Posting your opportunities connects you with many commercial cleaning subcontractors. Begin conversations when contractors show interest in your opportunity</p>
            <div className="space-y-1">
              <div className="flex items-center gap-[11px]">
                <div className="">
                  <FaCheck />
                </div>
                <p className="text-lg font-medium poppins">Broad Reach</p>
              </div>
              <div className="flex items-center gap-[11px]">
                <div className="">
                  <FaCheck />
                </div>
                <p className="text-lg font-medium poppins">Efficient Communication</p>
              </div>
              <div className="flex items-center gap-[11px]">
                <div className="">
                  <FaCheck />
                </div>
                <p className="text-lg font-medium poppins">Increased Collaboration</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-32 flex flex-row-reverse">
          <div className="2xl:pl-12 2xl:pt-12 2xl:pb-12 lg:pl-8 lg:pt-8 lg:pb-8 rounded-[32px] bg-[#F4F4F4] lg:w-1/2 md:w-1/2 xl:w-fit xl:mx-auto 2xl:w-fit 2xl:mx-auto">
            <Image src={side1} alt="" />
          </div>
          <div className="space-y-8 w-1/2 my-auto pr-24">
            <h5 className="text-primary poppins font-medium text-lg">Automated Follow-Up Emails</h5>
            <h1 className="text-5xl poppins font-semibold">Seamless follow-up email automation</h1>
            <p className="poppins font-normal">We will send automated follow-up emails to your leads after a specified number of days if you don't open or response to your emails within a set timeframe</p>
            <div className="space-y-1">
              <div className="flex items-center gap-[11px]">
                <div className="">
                  <FaCheck />
                </div>
                <p className="text-lg font-medium poppins">Consistent Engagement</p>
              </div>
              <div className="flex items-center gap-[11px]">
                <div className="">
                  <FaCheck />
                </div>
                <p className="text-lg font-medium poppins">Improved Efficiency</p>
              </div>
              <div className="flex items-center gap-[11px]">
                <div className="">
                  <FaCheck />
                </div>
                <p className="text-lg font-medium poppins">Enhanced Conversion</p>
              </div>
            </div>
          </div>
        </div>


        <div className="mt-40">
          <SectionTitles heading={"What our customers say"} subHeading={"Thank you for your trust in Crypt Land! We are grateful for your feedback and are committed to providing the best [products/services offered]. Read what our clients have to say about their experience with us."} />
        </div>
        <div className="px-10">
          <Reviews />
        </div>
        <div>
          <Pricing />
        </div>
      </div>
      <Footer />
    </div >
  )
}
