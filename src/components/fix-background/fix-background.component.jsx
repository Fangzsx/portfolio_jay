import './fix-background.styles.css';
import DivO from './html/divO.component.jsx';
import Paragraph from './html/paragraph.component.jsx';
import Image from './html/image.component.jsx';
import DivC from './html/divC.component.jsx';

const FixBackground = () => (
    <div className='d-flex flex-column position-fixed p-3 futura-med'>
        <div className='d-flex flex-column opaque-50'>
            <DivO text='topNavTop'/>
            <div className='d-flex flex-row'>
                <label>&nbsp;&nbsp;&nbsp;&nbsp;</label>
                <Paragraph text='Hello World!'/>
            </div>
            <div className='d-flex flex-row'>
                <label>&nbsp;&nbsp;&nbsp;&nbsp;</label>
                <DivO text='topNavRight'/>
            </div>
            <div className='d-flex flex-row'>
                <label>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    &nbsp;&nbsp;
                </label>
                <Image text='assets/top-nav-icon-phone.png'/>
            </div>

            <div className='d-flex flex-row'>
                <label>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    &nbsp;&nbsp;
                </label>
                <Paragraph text='11001100111'/>
            </div>

            <div className='d-flex flex-row'>
                <label>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    &nbsp;&nbsp;
                </label>
                <Image text='assets/top-nav-icon-email.png'/>
            </div>

            <div className='d-flex flex-row'>
                <label>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    &nbsp;&nbsp;
                </label>
                <Paragraph text='11001100111'/>
            </div>

            <div className='d-flex flex-row'>
                <label>&nbsp;&nbsp;&nbsp;&nbsp;</label>
                <DivC/>
            </div>
            <DivC/>
        </div>

    </div>

)

export default FixBackground;
