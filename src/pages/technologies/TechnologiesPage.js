import { Component } from 'react';
import Card from '../../components/card/card.component.jsx';
import LabeledIcon from '../../components/labeled-icon/labeled-icon.component.jsx';
import htmlLogo from '../../assets/images/html-1.png';
import cssLogo from '../../assets/images/css-3.png';
import reactLogo from '../../assets/images/structure.png';
import bootstrapLogo from '../../assets/images/bootstrap.png';
import nodejsLogo from '../../assets/images/node-js.png';
import expressLogo from '../../assets/images/express.png';
import mongodbLogo from '../../assets/images/mongodb.png';
import jasmineLogo from '../../assets/images/jasmine.png';
import postmanLogo from '../../assets/images/postman.png';
import kotlinLogo from '../../assets/images/kotlin.png';
import firebaseLogo from '../../assets/images/firebase.png';
import androidStudioLogo from '../../assets/images/android-studio.png';
import figmaLogo from '../../assets/images/figma.png';
import apiLogo from '../../assets/images/api.png';
import roomLogo from '../../assets/images/database.png';
import  ubuntuLogo from '../../assets/images/ubuntu.png';
import digitalOceanLogo from '../../assets/images/digital-ocean.png';

class TechnologiesPage extends Component {

    setFrontEndBody(){
        return(
            <div className='d-flex flex-row p-4 justify-content-center align-items-center flex-wrap'>
                <LabeledIcon 
                    src={htmlLogo}
                    label='HTML'/>
                <LabeledIcon 
                    src={cssLogo}
                    label='CSS'/>
                <LabeledIcon 
                    src={reactLogo}
                    label='REACT JS'/>
                <LabeledIcon 
                    src={bootstrapLogo}
                    label='BOOTSTRAP'/>
            </div>
        )
    }

    setBackEndBody(){
        return(
            <div className='d-flex flex-row p-4 justify-content-center align-items-center flex-wrap'>
                <LabeledIcon 
                    src={nodejsLogo}
                    label='NODE JS'/>
                <LabeledIcon 
                    src={expressLogo}
                    label='EXPRESS JS'/>
                <LabeledIcon 
                    src={mongodbLogo}
                    label='MONGO DB'/>
                <LabeledIcon 
                    src={jasmineLogo}
                    label='JASMINE'/>
                <LabeledIcon 
                    src={postmanLogo}
                    label='POSTMAN'/>
                <LabeledIcon 
                    src={ubuntuLogo}
                    label='UBUNTU'/>
                <LabeledIcon 
                    src={digitalOceanLogo}
                    label='DIGITAL OCEAN'/>
            </div>
        )

    }

    setAndroidBody(){
        return(
            <div className='d-flex flex-row p-4 justify-content-center align-items-center flex-wrap'>
                <LabeledIcon 
                    src={kotlinLogo}
                    label='KOTLIN'/>
                <LabeledIcon 
                    src={firebaseLogo}
                    label='FIREBASE'/>
                <LabeledIcon 
                    src={androidStudioLogo}
                    label='ANDROID STUDIO'/>
                <LabeledIcon 
                    src={figmaLogo}
                    label='FIGMA'/>
                <LabeledIcon 
                    src={apiLogo}
                    label='API'/>
                <LabeledIcon 
                    src={roomLogo}
                    label='ROOM DB'/>
            </div>
        )

    }

    render(){
        return(
            <div className='d-flex flex-column justify-content-center align-items-center'>
                <div className='d-flex flex-row m-4'>
                    <label className='futura-bold fs-1 text-teal black-outline'>Tech</label>
                    <label className='futura-bold fs-1 white-text black-outline'>nologies</label>
                </div>
                
                <div className='mb-4'>
                    <Card
                        title='tech_front.html'
                        body={this.setFrontEndBody()}
                     />
                </div>

                <div className='my-4'>
                    <Card
                        title='tech_backend.html'
                        body={this.setBackEndBody()}
                     />
                </div>
                <div className='my-4'>
                    <Card
                        title='tech_android.html'
                        body={this.setAndroidBody()}
                     />
                </div>
            </div>
        )
    }
}
export default TechnologiesPage;
