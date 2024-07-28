import Pricing from "@/Components/Pricing";
import SectionTitles from "@/Components/SectionTitles";

const page = () => {
    return (
        <div className="px-10 py-40 bg-[#DDD]">
            {/* <SectionTitles heading={"Start your free 7 days"} subHeading={"No commitments. Cancel anytime"}/> */}
            <SectionTitles heading={"Find the right plan"} subHeading={"Invest in your company's future with our comprehensive financial solution. Contact us for pricing details and see how we can help you streamline your finances and reach your business goals."} />
            <div>
                <Pricing />
            </div>
        </div>
    );
};

export default page;