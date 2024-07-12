import { FaCheckCircle } from 'react-icons/fa';

const TickCircle = () => {
    return (
        <div style={{ display: 'inline-block', position: 'relative', width: '20px', height: '20px' }}>
            <FaCheckCircle style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', color: 'green', fontSize: '20px' }} />
        </div>
    );
};

export default TickCircle;
