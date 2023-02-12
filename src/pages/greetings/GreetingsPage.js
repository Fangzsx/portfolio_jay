import { Component, createRef } from 'react';
import Card from '../../components/card/card.component.jsx';
import wavePng from '../../assets/images/hi.gif';
import githubLogo from '../../assets/images/github.svg';
import linkedinLogo from '../../assets/images/linkedin.svg';
import viberLogo from '../../assets/images/viber.svg';
import discordLogo from '../../assets/images/discord.svg';
import facebookLogo from '../../assets/images/facebook.svg';
import profile from '../../assets/images/jay.jpg';
import GradientButton from '../../components/gradient-button/gradient-button.component.jsx';
import openProfileTab from '../../openProfileTab.js';

class GreetingsPage extends Component{
    constructor(props){
        super(props);
        this.profileRef = createRef();
    }

    setBody(){
        return(
            <div
                className='d-flex flex-column'>
                <label className='futura-med fs-sm'>HELLO,</label>
                <div className='d-flex flex-row'>
                        <label className='futura-bold fs-1 white-text'>I'm</label>
                        <label className='futura-bold fs-1 mx-2 text-teal'>Jay</label>
                        <label className='futura-bold fs-1 white-text me-2'>Garzon</label>
                        <img src={wavePng} alt='hi.gif' style={{width : '32px', height : '32px'}}/>                       
                </div>

                <label className='futura-light'>Bachelor of Science in Computer Science Graduate (Batch 2022)</label>
            
                <div className='d-flex flex-row mt-2'>
                    <div className='w-40'>
                        <label className='text-teal futura-bold'>Senior Web Developer</label>
                    </div>
                    <div className='w-60 d-flex flex-row justify-content-between ms-3'></div>
                        <img className='clickable' onClick={ () => openProfileTab('github', 'fangzsx') } src={githubLogo} alt='github.svg' style={{width : '24px', height : '24px', flex : 1}}/>                       
                        <img className='clickable' onClick={ () => openProfileTab('linkedin', 'jay-gilbert-garzon') } src={linkedinLogo} alt='linkedin.svg' style={{width : '24px', height : '24px', flex : 1}}/>
                        <img className='clickable' onClick={ () => openProfileTab('facebook', 'jygrzn')} src={facebookLogo} alt='facebook.svg' style={{width : '24px', height : '24px', flex : 1}}/>                       
                        <img className='clickable' onClick={ () => openProfileTab('viber', '09295399252') } src={viberLogo} alt='viber.svg' style={{width : '24px', height : '24px', flex : 1}}/>                       
                        <img className='clickable' onClick={ () => openProfileTab('discord', 'superjay#2849') } src={discordLogo} alt='discord.svg' style={{width : '24px', height : '24px', flex : 1}}/>                       

                </div>
                <div className='d-flex flex-column justify-content-center align-items-center'>
                    <img className='circle-image mt-3' src={profile} alt='profile.jpg'/>
                    <div className='mt-3'>
                        <GradientButton
                            fileName='CV-Garzon-Jay-Gilbert'
                            fileUrl='https://drive.google.com/uc?export=download&id=1wqpwdcndWJFyTmN2qYzGkOcv9sW5zGOk'
                            text='Download CV'/>
                    </div>

                </div>

            </div>
        )
    }

    render(){
        return(
            <div ref={this.profileRef} className='d-flex flex-column vh-100'>
                <div className='p-2 h-25'>
                </div>
                <div className='p-2 h-50 d-flex justify-content-center align-items-center'>
                    <Card
                        title='welcome.html'
                        body={this.setBody()}/>
                </div>
                <div className='p-2 h-25'></div>
                
            </div>
        )
    }
}
export default GreetingsPage;
