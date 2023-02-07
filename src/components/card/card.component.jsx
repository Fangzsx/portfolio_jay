import GradientDiv from '../gradient-div/gradient-div.component.jsx';
import htmlPng from '../../assets/images/html.png'
import './card.styles.css';

const Card = ({body}) => (
<div className='card' style={{width : '25rem'}}>
  <GradientDiv text='dialog_greetings.html' icon={htmlPng}/>
  <div className="card-body">
    {
        body
    }
  </div>
</div>
);

export default Card;

