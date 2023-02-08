import { Button } from 'react-bootstrap';
import './gradient-button.styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faFileArrowDown} from '@fortawesome/free-solid-svg-icons';

const GradientButton = ({text}) => (
    <Button className='gradient-button'>
        {
            text
        }
        <FontAwesomeIcon className='ms-1' icon={faFileArrowDown} />
    </Button>

)

export default GradientButton;
