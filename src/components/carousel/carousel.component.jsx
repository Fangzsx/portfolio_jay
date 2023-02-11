import { Carousel } from 'react-bootstrap';
import Jay from '../../assets/images/jay.jpg';

const MyCarousel = () => (

    <Carousel>
        <Carousel.Item>
            <img className='d-block w-100' src={Jay}/>
            <Carousel.Caption>
                <p>Hi Im Jay</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img className='d-block w-100' src={Jay}/>
            <Carousel.Caption>
                <p>Hi Im Jay</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img className='d-block w-100' src={Jay}/>
            <Carousel.Caption>
                <p>Hi Im Jay</p>
            </Carousel.Caption>
        </Carousel.Item>
    </Carousel>

)

export default MyCarousel;
