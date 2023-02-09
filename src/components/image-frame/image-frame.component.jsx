import './image-frame.styles.css';

const ImageFrame = ({src}) => (

    <div className='d-flex flex-row'>
        <div className='one-part square'>
        </div>

        <div className='one-part square d-flex align-items-center justify-content-center mt-4'>
            <div className='bg-danger first-layer rounded'>
            </div>

            <div className='bg-primary second-layer rounded'>
            </div>
            <img src={src} alt='profile1.jpg' className='third-layer bg-danger'/>
        </div>
        <div className='one-part square'>
        </div>
    </div>
)
export default ImageFrame;
