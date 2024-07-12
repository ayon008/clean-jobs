import Banner from "../Components/Banner";
import Others from "../Components/Others";
import Footer from "../Shared/Footer";

const Home = () => {
    return (
        <div>
            <div className="px-20">
                <Banner />
                <Others />
            </div>
            <Footer />
        </div>
    );
};

export default Home;