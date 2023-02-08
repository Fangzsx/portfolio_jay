import { Component } from 'react';
import ImageFrame from '../../components/image-frame/image-frame.component.jsx';
import MyProfile from '../../assets/images/jay.jpg';

class AboutMePage extends Component {

    render(){
        return(
            <div className='d-flex flex-column vh-100'>
                <div className='d-flex flex-column one-part justify-content-center align-items-center'>
                    <div className='d-flex flex-row' style={{marginBottom : 40}}>
                        <label className='fs-1 ms-4 futura-bold text-teal black-outline'>About</label>
                        <label className='fs-1 futura-bold white-text mx-2 black-outline'>Me</label>
                    </div>
                    <ImageFrame className='mt-4'src={MyProfile} />
                    <div>
                    </div>

                </div>
                <div className='one-part bg-success'>
                </div>
                <div className='one-part bg-danger'>
                </div>
            </div>
        )

    }
}
export default AboutMePage;
