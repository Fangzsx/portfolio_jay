import { Component } from 'react';
import Card from '../../components/card/card.component.jsx';
import wavePng from '../../assets/images/hi.gif';
import githubLogo from '../../assets/images/github.svg';
import linkedinLogo from '../../assets/images/linkedin.svg';
import viberLogo from '../../assets/images/viber.svg';
import discordLogo from '../../assets/images/discord.svg';
import facebookLogo from '../../assets/images/facebook.svg';
import profile from '../../assets/images/jay.jpg';
import GradientButton from '../../components/gradient-button/gradient-button.component.jsx';

class GreetingsPage extends Component{

    setBody(){
        return(
            <div className='d-flex flex-column'>
                <label className='futura-med'>HELLO,</label>
                <div className='d-flex flex-row'>
                        <label className='futura-bold fs-1 white-text'>I'm</label>
                        <label className='futura-bold fs-1 mx-2 text-pink'>Jay</label>
                        <label className='futura-bold fs-1 white-text me-2'>Garzon</label>
                        <img src={wavePng} alt='hi.gif' style={{width : '32px', height : '32px'}}/>                       
                </div>

                <label className='futura-light'>Bachelor of Science in Computer Science Graduate (Batch 2022)</label>
            
                <div className='d-flex flex-row mt-2'>
                    <div className='w-40'>
                        <label className='text-pink futura-bold'>Senior Web Developer</label>
                    </div>
                    <div className='w-60 d-flex flex-row justify-content-between ms-3'></div>
                        <img className='clickable' src={githubLogo} alt='github.svg' style={{width : '24px', height : '24px', flex : 1}}/>                       
                        <img className='clickable' src={linkedinLogo} alt='hi.gif' style={{width : '24px', height : '24px', flex : 1}}/>                       
                        <img className='clickable' src={viberLogo} alt='hi.gif' style={{width : '24px', height : '24px', flex : 1}}/>                       
                        <img className='clickable' src={discordLogo} alt='hi.gif' style={{width : '24px', height : '24px', flex : 1}}/>                       
                        <img className='clickable' src={facebookLogo} alt='hi.gif' style={{width : '24px', height : '24px', flex : 1}}/>                       
                </div>
                <div className='d-flex flex-column justify-content-center align-items-center'>
                    <img className='circle-image mt-3' src={profile} alt='profile.jpg'/>
                    <div className='mt-3'>
                        <GradientButton
                            text='Download CV'/>
                    </div>

                </div>

            </div>
        )
    }

    render(){
        return(
            <div className='d-flex flex-column vh-100'>
                <div className='p-2 h-25'>
                </div>
                <div className='p-2 h-50 d-flex justify-content-center align-items-center'>
                    <Card body={this.setBody()}/>
                </div>
                <div className='p-2 h-25'></div>
                
            </div>
        )
    }
}
export default GreetingsPage;
