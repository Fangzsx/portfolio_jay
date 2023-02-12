import './fix-background.styles.css';
import DivO from './html/divO.component.jsx';
import Paragraph from './html/paragraph.component.jsx';
import Image from './html/image.component.jsx';
import DivC from './html/divC.component.jsx';
import Href from './html/href.component.jsx';

const FixBackground = () => (
    <div className='container-fluid d-flex flex-column position-fixed p-3 futura-med'>
        <div className='d-flex flex-column opaque-10'>
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
                <Paragraph text='90295399252'/>
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
                <Paragraph text='jaygilbert.garzon@gmail.com'/>
            </div>

            <div className='d-flex flex-row'>
                <label>&nbsp;&nbsp;&nbsp;&nbsp;</label>
                <DivC/>
            </div>
            <DivC/>
        </div>

        <div className='d-flex flex-row'>
            <div style={{flex : 1}}>
            </div>

            <div style={{flex : 1}}>
            </div>
            <div style={{flex : 1}}>
                <div className='d-flex flex-column opaque-25 mt-4'>
                    <DivO text='topNavBottom'/>
                    <div className='d-flex flex-row'>
                        <label>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        </label>
                        <Image text='assets/images/profile.png'/>
                    </div>
                    <div className='d-flex flex-row'>
                        <label>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        </label>
                        <DivO text='topNavRightBottom'/>
                    </div>
        
                    <div className='d-flex flex-row'>
                        <label>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            &nbsp;&nbsp;
                        </label>
                        <Href value='index.html' 
                              text='HOME'/>
                    </div>
        
                    <div className='d-flex flex-row'>
                        <label>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            &nbsp;&nbsp;
                        </label>
                        <Href value='event.html' 
                              text='EVENT'/>
                    </div>
                    <div className='d-flex flex-row'>
                        <label>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            &nbsp;&nbsp;
                        </label>
                        <Href value='menu.html' 
                              text='MENU'/>
                    </div>
                    <div className='d-flex flex-row'>
                        <label>&nbsp;&nbsp;&nbsp;&nbsp;</label>
                        <DivC/>
                    </div>
                    <DivC/>
                </div>
            </div>

        </div>

        <div className='d-flex flex-column mt-4 opaque-10'>
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
                <Paragraph text='09295399252'/>
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
                <Paragraph text='jaygilbert.garzon@gmail.com'/>
            </div>

            <div className='d-flex flex-row'>
                <label>&nbsp;&nbsp;&nbsp;&nbsp;</label>
                <DivC/>
            </div>
            <DivC/>
        </div>

        <div className='d-flex flex-row'>
            <div style={{flex : 1}}>
            </div>

            <div style={{flex : 1}}>
            </div>
            <div style={{flex : 1}}>
                <div className='d-flex flex-column opaque-10 mt-4'>
                    <DivO text='topNavBottom'/>
                    <div className='d-flex flex-row'>
                        <label>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        </label>
                        <Image text='assets/images/profile.png'/>
                    </div>
                    <div className='d-flex flex-row'>
                        <label>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        </label>
                        <DivO text='topNavRightBottom'/>
                    </div>
        
                    <div className='d-flex flex-row'>
                        <label>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            &nbsp;&nbsp;
                        </label>
                        <Href value='index.html' 
                              text='HOME'/>
                    </div>
        
                    <div className='d-flex flex-row'>
                        <label>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            &nbsp;&nbsp;
                        </label>
                        <Href value='event.html' 
                              text='EVENT'/>
                    </div>
                    <div className='d-flex flex-row'>
                        <label>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            &nbsp;&nbsp;
                        </label>
                        <Href value='menu.html' 
                              text='MENU'/>
                    </div>
                    <div className='d-flex flex-row'>
                        <label>&nbsp;&nbsp;&nbsp;&nbsp;</label>
                        <DivC/>
                    </div>
                    <DivC/>
                </div>
            </div>

        </div>

    </div>

)

export default FixBackground;
