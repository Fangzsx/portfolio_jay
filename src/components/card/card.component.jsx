import GradientDiv from '../gradient-div/gradient-div.component.jsx';
import htmlPng from '../../assets/images/html.png'
import './card.styles.css';

const Card = ({title, body}) => (
<div className='card' style={{width : '25rem'}}>
  <GradientDiv title={title} icon={htmlPng}/>
  <div className="card-body">
    {
        body
    }
  </div>
</div>
);

export default Card;

