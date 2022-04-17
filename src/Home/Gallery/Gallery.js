import service1 from '../../images/gallery/services1.jpg'
import service2 from '../../images/gallery/services2.jpg'
import service3 from '../../images/gallery/services3.jpg'
import service4 from '../../images/gallery/services4.jpg'
import service5 from '../../images/gallery/services5.jpg'
import './Gallery.css'

const Gallery = () => {


    return (
        <div className='container my-5' id='gallery'>
            <div className=' d-flex align-items-center flex-column mb-5'>
                <div className='w-50' style={{ height: '1px', backgroundColor: 'lightgray' }}></div>
                <h2 style={{ color: 'rgb(116, 116, 116)' }}>MAHDIS'S GALLERY</h2>
                <div className='w-50' style={{ height: '1px', backgroundColor: 'lightgray' }}></div>
            </div>
            <div className='d-flex justify-content-center row  img-hover overflow-hidden'>
                <div className='img-container d-inline col-md-6 col-sm-12'>
                    <img className='w-100 h-100' src={service1} alt="" />
                    <button>FRAMED PRINTS</button>
                </div>
                <div className='img-container d-inline col-md-6 col-sm-12'>
                    <img className='w-100 h-100' src={service2} alt="" />
                    <button>CANVAS PRINTS</button>
                </div>

            </div>
            <div className='d-flex justify-content-center row my-4  img-hover overflow-hidden'>
                <div className='d-inline img-container col-md-4 col-sm-12'>
                    <img className='w-100 h-100' src={service3} alt="" />
                    <button>POSTERS</button>
                </div>
                <div className='d-inline img-container col-md-4  col-sm-12'>
                    <img className='w-100 h-100' src={service4} alt="" />
                    <button>ART PRINTS</button>
                </div>
                <div className='d-inline img-container col-md-4  col-sm-12'>
                    <img className='w-100 h-100' src={service5} alt="" />
                    <button>ACRYLIC PRINTS</button>
                </div>

            </div>
        </div>
    );
};

export default Gallery;