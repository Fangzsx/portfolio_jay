import './card-small.styles.css';
const CardSmall = ({label, body, onClick}) => (
    <div onClick={onClick} className='d-flex flex-column justify-content-center align-items-center p-4 clickable'>
        <div className='card-small d-flex flex-column'>
            <div className='gradient-card d-flex flex-column align-items-center align-items-center p-1'/>
            {
                body
            }
        </div>
        <label className='mt-1 text-center futura-light' >{label}</label>

    </div>

)
export default CardSmall;
