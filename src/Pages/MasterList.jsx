import { Link } from "react-router-dom";
import PageTitle from "../Shared/PageTitle";
import SectionDecision from "../Shared/SectionDecision";

const MasterList = () => {
    return (
        <div>
            <PageTitle name={"Master List"} />
            <div className="w-3/4 mx-auto mt-10">
                <SectionDecision />
                <Link to='/addcontract'>
                    <button className="btn bg-blue-400 text-white">+ Add An Opportunity</button>
                </Link>
            </div>
        </div>
    );
};

export default MasterList;