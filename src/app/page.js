import Image from "next/image";
import Banner from "@/Components/Banner";
import Reviews from "@/Components/Reviews";
import Navbar from "@/Shared/Navbar";
import Footer from "@/Shared/Footer";
import SectionTitles from "@/Components/SectionTitles";
import side1 from "../../public/assets/597346f805a7ac1230c3c0eb176f2c90.png";
import side2 from "../../public/assets/3a5f8d21d291fb96da9cf2d4b91d2db0.png";
import side3 from "../../public/assets/21d3c07652283c432b6c4b982b0d04d0.png";
import FaCheck from "@/Components/FaCheck";
import Pricing from "@/Components/Pricing";
import Utilities from "@/Components/Utilities";


export default function Home() {
  return (
    <div className="relative">

      {/* Navbar */}
      <Navbar />

      {/* Banner */}
      <Banner />

      {/* Section */}
      <div className="max-w-screen-2xl mx-auto px-10">
        <h5 className="text-secondary nunito text-center font-light text-xl mt-20 mb-4">What We Offer</h5>
        <SectionTitles heading={'Maximize results with minimal effort'} subHeading={"Get cleaning jobs sent straight to your inbox, easily find and delegate tasks to subcontractors, and engage with decision makers automatically"} />

        <div className="mt-32 flex">
          <div className="w-1/2 pb-10 pt-10 pr-10 bg-[#F4F4F4] rounded-[32px]">
            <Image src={side2} className="h-[400px] w-auto" alt="" />
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
          <div className="w-1/2 pb-10 pt-10 pl-10 bg-[#F4F4F4] rounded-[32px]">
            <Image src={side2} className="h-[400px] w-auto" alt="" />
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
          <div className="w-1/2 bg-[#F4F4F4] rounded-[32px]">
            <Image src={side1} className="w-auto mx-auto h-[500px]" alt="" />
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
          <div className="w-1/2 bg-[#F4F4F4] py-10 rounded-[32px]">
            <Image src={side3} className="w-auto mx-auto h-[520px]" alt="" />
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
        <Reviews />
        {/*  */}
        <div className="mt-40">
          <SectionTitles heading={"Useful utilities & Extra advantages"} subHeading={"Unlocking Efficiency: Useful Utilities and Extra Advantages to Boost Productivity and Simplify Operations"} />
          <Utilities />
        </div>
      </div>
      <div className="bg-[#EBFAEF] py-48  max-w-screen-2xl mx-auto">
        <SectionTitles heading={"Find the right plan"} subHeading={"Invest in your company's future with our comprehensive financial solution. Contact us for pricing details and see how we can help you streamline your finances and reach your business goals."} />
        <Pricing />
      </div>
      <Footer />
    </div >
  )
}
