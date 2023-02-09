import './labeled-icon.styles.css';

const LabeledIcon = ({src, label}) => (
    <div className='d-flex flex-column'>
        <img className='square32' src={src} alt={`${label}.svg`}/>
        <label className='futura-light text-center'>{label}</label>
    </div>
)

export default LabeledIcon;
