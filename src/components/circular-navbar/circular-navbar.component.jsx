import './circular-navbar.styles.css';
import personLogo from '../../assets/images/person.svg';
import gearLogo from '../../assets/images/gear.svg';
import folderLogo from '../../assets/images/folder.svg';
import phoneLogo from '../../assets/images/telephone.svg';

const CirculaNavBar = () => (
    <div className='d-flex justify-content-center align-items-center'>
        <div className='position-fixed bottom-0 mb-4 circular-navbar d-flex flex-row'>
            <img className='clickable icon' src={personLogo} alt='person.svg' style={{width : '24px', height : '24px', flex : '1'}} />
            <img className='clickable icon' src={gearLogo} alt='gear.svg' style={{width : '24px', height : '24px', flex : '1'}} />
            <img className='clickable icon' src={folderLogo} alt='folder.svg' style={{width : '24px', height : '24px', flex : '1'}} />
            <img className='clickable icon' src={phoneLogo} alt='phone.svg' style={{width : '24px', height : '24px', flex : '1'}} />
        </div>
    </div>


)

export default CirculaNavBar;
