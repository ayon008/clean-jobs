import Navbar from "@/Shared/Navbar";

const layout = ({ children }) => {
    return (
        <div>
            <Navbar />
            {children}
        </div>
    );
};

export default layout;