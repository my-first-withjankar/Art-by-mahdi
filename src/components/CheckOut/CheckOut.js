import { useParams } from 'react-router-dom';
import checkout from '../../images/self/laptop-5820171__340.webp'

const CheckOut = () => {
    // const { checkoutId } = useParams()

    return (
        <div className='d-flex justify-content-center align-items-center d-block mt-5'>
            <img className='mt-5' src={checkout} alt="" />
        </div>
    );
};

export default CheckOut;