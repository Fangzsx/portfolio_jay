import './gradient-div.styles.css';

const GradientDiv = ({text, icon}) => (
        <div className='d-flex flex-row fs-xs align-items-center p-2 text-white gradient-div'>
            <img src= {icon} width='18px' alt='html.png'/>
            <label className='ms-2 black-outline'>{text}</label>
            
        </div>
)
export default GradientDiv;
