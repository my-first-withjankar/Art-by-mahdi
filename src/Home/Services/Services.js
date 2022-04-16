import service1 from '../../images/services/services1.jpg'
import service2 from '../../images/services/services2.jpg'
import service3 from '../../images/services/services3.jpg'
import service4 from '../../images/services/services4.jpg'
import service5 from '../../images/services/services5.jpg'
import './Services.css'

const Services = () => {

    // const [services, setServices] = useState([]);
    // useEffect(() => {
    //     fetch('services.json')
    //         .then(res => res.json())
    //         .then(data => setServices(data))
    // }, [])

    return (
        <div className='container mt-5' id='services'>
            <h1 className='mb-5'>MAHDIS'S SERVICES</h1>
            <div className='d-flex justify-content-center row  img-hover overflow-hidden'>
                <div className='img-container w-50 d-inline'>
                    <img className='w-100 h-100' src={service1} alt="" />
                    <button>FRAMED PRINTS</button>
                </div>
                <div className='img-container w-50 d-inline'>
                    <img className='w-100 h-100' src={service2} alt="" />
                    <button>CANVAS PRINTS</button>
                </div>

            </div>
            <div className='d-flex justify-content-center row my-4  img-hover overflow-hidden'>
                <div className='d-inline img-container col-4'>
                    <img className='w-100 h-100' src={service3} alt="" />
                    <button>POSTERS</button>
                </div>
                <div className='d-inline img-container col-4'>
                    <img className='w-100 h-100' src={service4} alt="" />
                    <button>ART PRINTS</button>
                </div>
                <div className='d-inline img-container col-4'>
                    <img className='w-100 h-100' src={service5} alt="" />
                    <button>ACRYLIC PRINTS</button>
                </div>

            </div>
        </div>
    );
};

export default Services;