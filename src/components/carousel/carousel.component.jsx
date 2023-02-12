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
const aparImages = importAll(require.context('../../assets/images/projects/apar/', false, /\.(png|jpe?g|svg)$/));
const animuImages = importAll(require.context('../../assets/images/projects/animu/', false, /\.(png|jpe?g|svg)$/));
const newsImages = importAll(require.context('../../assets/images/projects/news/', false, /\.(png|jpe?g|svg)$/));
const mealImages = importAll(require.context('../../assets/images/projects/meal/', false, /\.(png|jpe?g|svg)$/));
const cocktailImages = importAll(require.context('../../assets/images/projects/cocktail/', false, /\.(png|jpe?g|svg)$/));
const todoImages = importAll(require.context('../../assets/images/projects/todo/', false, /\.(png|jpe?g|svg)$/));


const MyCarousel = ({ app }) => {

    let images;
    switch(app.toLowerCase()){
        case  'mercantile insurance' : images = Object.entries(mercantileImages).map(([key, value]) => ({ key, value }));
        break;
        case  'figaro coffee group' : images = Object.entries(figaroImages).map(([key, value]) => ({ key, value }));
        break;
        case  'sushi learning academy' : images = Object.entries(sushiImages).map(([key, value]) => ({ key, value }));
        break;
        case  'apar app' : images = Object.entries(aparImages).map(([key, value]) => ({ key, value }));
        break;
        case  'animu db' : images = Object.entries(animuImages).map(([key, value]) => ({ key, value }));
        break;
        case  'news app' : images = Object.entries(newsImages).map(([key, value]) => ({ key, value }));
        break;
        case  'meal db' : images = Object.entries(mealImages).map(([key, value]) => ({ key, value }));
        break;
        case  'cocktail db' : images = Object.entries(cocktailImages).map(([key, value]) => ({ key, value }));
        break;
        case  'todo app' : images = Object.entries(todoImages).map(([key, value]) => ({ key, value }));
        break;
        default:
    }

    return(
        <Carousel 
            fade
            className='container-fluid black-outline'>
            {
                images && images.map(image => {
                    return(
                        <Carousel.Item interval={700}  key={image.key }>
                            <div className='d-flex justify-content-center align-items-center' style={{width : '100%', height : '100%'}}>
                                <img className='img-fluid' src={image.value} style={{height : '470px'}} alt={image.key}/>
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
