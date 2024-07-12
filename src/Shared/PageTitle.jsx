import { FaCircle } from 'react-icons/fa';

const PageTitle = ({ name }) => {
    return (
        <div>
            <h1 className="text-4xl text-center">{name}</h1>
            <div className="flex items-center gap-2 w-fit mx-auto mt-4">
                <FaCircle size={'0.5rem'} className="text-blue-400" />
                <FaCircle size={'0.5rem'} className="text-blue-400" />
                <FaCircle size={'0.5rem'} className="text-blue-400" />
                <FaCircle size={'0.5rem'} className="text-blue-400" />
            </div>
        </div>
    );
};

export default PageTitle;