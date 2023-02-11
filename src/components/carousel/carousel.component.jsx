import { Carousel } from 'react-bootstrap';
import Jay from '../../assets/images/jay.jpg';



function importAll(r) {
  let images = {};
  r.keys().forEach((item, index) => { 
    images[item.replace('./', '')] = r(item); 
  });
  return images;
}

const mercantileImages = importAll(require.context('../../assets/images/projects/mercantile/', false, /\.(png|jpe?g|svg)$/));
const figaroImages = importAll(require.context('../../assets/images/projects/figaro/', false, /\.(png|jpe?g|svg)$/));
const sushiImages = importAll(require.context('../../assets/images/projects/sushi/', false, /\.(png|jpe?g|svg)$/));


const MyCarousel = ({ app }) => {

    let images;
    switch(app.toLowerCase()){
        case  'mercantile insurance' : images = Object.entries(mercantileImages).map(([key, value]) => ({ key, value }));
        break;
        case  'figaro coffee group' : images = Object.entries(figaroImages).map(([key, value]) => ({ key, value }));
        break;
        case  'sushi learning academy' : images = Object.entries(sushiImages).map(([key, value]) => ({ key, value }));
        break;
        default : console.log('app not found');
    }

    return(
        <Carousel className='container-fluid black-outline'>
            {
                images && images.map(image => {
                    return(
                        <Carousel.Item key={image.key}>
                            <div className='d-flex justify-content-center align-items-center' style={{width : '100%', height : '100%'}}>
                                <img className='img-fluid' src={image.value} style={{height : '550px'}} alt={image.key}/>
                            </div>
                            <Carousel.Caption>
                                <p className='futura-bold black-outline'>{image.key}</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    )
                })

            }
        </Carousel>
    )
}
export default MyCarousel;
